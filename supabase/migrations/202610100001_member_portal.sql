begin;

create schema if not exists private;
revoke all on schema private from public, anon;
grant usage on schema private to authenticated;

create table public.member_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  display_name text not null default '' check (length(display_name) <= 100),
  country text not null default '' check (length(country) <= 100),
  preferred_locale text not null default 'en' check (preferred_locale in ('en','zh-hant','ru','ar','id','ms')),
  created_at timestamptz not null default now()
);
create table private.portal_admins (
  user_id uuid primary key references auth.users(id) on delete cascade
);
create table public.patient_cases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references public.member_profiles(id) on delete cascade,
  relationship text not null check (relationship in ('patient','representative')),
  diagnosis text not null default '' check (length(diagnosis) <= 500),
  treatment_history text not null default '' check (length(treatment_history) <= 10000),
  medications text not null default '' check (length(medications) <= 5000),
  symptoms text not null default '' check (length(symptoms) <= 5000),
  consent_version text not null check (consent_version = '2026-10-10'),
  consent_at timestamptz not null default now(),
  status text not null default 'draft' check (status in ('draft','submitted','reviewing','needs_info','closed')),
  submitted_at timestamptz,
  updated_at timestamptz not null default now()
);
create table public.case_documents (
  id uuid primary key default gen_random_uuid(),
  case_id uuid not null references public.patient_cases(id) on delete cascade,
  user_id uuid not null references public.member_profiles(id) on delete cascade,
  original_name text not null check (length(original_name) between 1 and 180),
  category text not null check (category in ('biopsy','imaging','pathology','genetics','blood','treatment','medication','other')),
  mime_type text not null check (mime_type in ('application/pdf','image/jpeg','image/png')),
  byte_size bigint not null check (byte_size between 1 and 10485760),
  object_path text not null unique,
  uploaded boolean not null default false,
  created_at timestamptz not null default now()
);
create index case_documents_case_id on public.case_documents(case_id);
create table private.portal_audit (
  id bigint generated always as identity primary key,
  actor_id uuid not null,
  case_id uuid,
  document_id uuid,
  action text not null,
  created_at timestamptz not null default now()
);

create function private.is_member() returns boolean language sql stable security definer set search_path = '' as $$
  select exists (
    select 1 from auth.users u join auth.sessions s on s.user_id = u.id
    where u.id = auth.uid() and u.email_confirmed_at is not null
      and s.id::text = (auth.jwt()->>'session_id')
  );
$$;
create function public.portal_admin_member() returns boolean language sql stable security definer set search_path = '' as $$
  select private.is_member() and exists (select 1 from private.portal_admins a where a.user_id = auth.uid());
$$;
create function private.is_admin() returns boolean language sql stable security definer set search_path = '' as $$
  select public.portal_admin_member() and (auth.jwt()->>'aal') = 'aal2';
$$;
create function private.create_member_profile() returns trigger language plpgsql security definer set search_path = '' as $$
begin
  insert into public.member_profiles(id,email) values(new.id,coalesce(new.email,''));
  return new;
end;
$$;
create trigger portal_new_member after insert on auth.users for each row execute function private.create_member_profile();
create function private.sync_member_email() returns trigger language plpgsql security definer set search_path = '' as $$
begin
  update public.member_profiles set email=coalesce(new.email,'') where id=new.id;
  return new;
end;
$$;
create trigger portal_member_email after update of email on auth.users for each row execute function private.sync_member_email();
insert into public.member_profiles(id,email) select id,coalesce(email,'') from auth.users on conflict do nothing;

alter table public.member_profiles enable row level security;
alter table public.patient_cases enable row level security;
alter table public.case_documents enable row level security;
alter table private.portal_admins enable row level security;
alter table private.portal_audit enable row level security;
revoke all on public.member_profiles, public.patient_cases, public.case_documents from anon, authenticated;
grant select on public.member_profiles, public.patient_cases, public.case_documents to authenticated;
create policy member_profiles_read on public.member_profiles for select to authenticated using ((id = auth.uid() and private.is_member()) or private.is_admin());
create policy patient_cases_read on public.patient_cases for select to authenticated using ((user_id = auth.uid() and private.is_member()) or private.is_admin());
create policy case_documents_read on public.case_documents for select to authenticated using ((user_id = auth.uid() and private.is_member()) or private.is_admin());

create function public.save_member_profile(p_name text, p_country text, p_locale text) returns void language plpgsql security definer set search_path = '' as $$
begin
  if not private.is_member() then raise exception 'Not authorised'; end if;
  update public.member_profiles set display_name=trim(p_name), country=trim(p_country), preferred_locale=p_locale where id=auth.uid();
end;
$$;
create function public.save_patient_case(p_relationship text,p_diagnosis text,p_history text,p_medications text,p_symptoms text,p_consent boolean) returns uuid language plpgsql security definer set search_path = '' as $$
declare result uuid;
begin
  if not private.is_member() or p_consent is not true then raise exception 'Consent and verified account required'; end if;
  insert into public.patient_cases(user_id,relationship,diagnosis,treatment_history,medications,symptoms,consent_version)
  values(auth.uid(),p_relationship,trim(p_diagnosis),p_history,p_medications,p_symptoms,'2026-10-10')
  on conflict(user_id) do update set relationship=excluded.relationship,diagnosis=excluded.diagnosis,treatment_history=excluded.treatment_history,medications=excluded.medications,symptoms=excluded.symptoms,consent_version=excluded.consent_version,consent_at=now(),updated_at=now()
  returning id into result;
  return result;
end;
$$;

-- Reserve a random object path before upload. No patient names appear in storage paths.
create function public.reserve_case_document(p_case uuid,p_name text,p_category text,p_mime text,p_bytes bigint) returns public.case_documents language plpgsql security definer set search_path = '' as $$
declare c public.patient_cases; d public.case_documents; extension text;
begin
  if not private.is_member() then raise exception 'Not authorised'; end if;
  perform pg_advisory_xact_lock(20261010);
  select * into c from public.patient_cases where id=p_case and user_id=auth.uid() for update;
  if c.id is null then raise exception 'Case not found'; end if;
  if (select count(*) from public.case_documents where user_id=auth.uid()) >= 20 then raise exception 'File limit reached'; end if;
  if (select count(*) from public.case_documents) >= 60 then raise exception 'Storage capacity reached. Contact support'; end if;
  extension := case p_mime when 'application/pdf' then 'pdf' when 'image/jpeg' then 'jpg' when 'image/png' then 'png' else null end;
  if extension is null then raise exception 'Unsupported document'; end if;
  d.id:=gen_random_uuid();
  insert into public.case_documents(id,case_id,user_id,original_name,category,mime_type,byte_size,object_path)
  values(d.id,c.id,auth.uid(),p_name,p_category,p_mime,p_bytes,auth.uid()::text||'/'||c.id::text||'/'||d.id::text||'.'||extension) returning * into d;
  return d;
end;
$$;
create function public.finish_case_document(p_document uuid) returns void language plpgsql security definer set search_path = '' as $$
declare d public.case_documents;
begin
  if not private.is_member() then raise exception 'Not authorised'; end if;
  select * into d from public.case_documents where id=p_document and user_id=auth.uid() for update;
  if d.id is null or not exists(select 1 from storage.objects where bucket_id='patient-records' and name=d.object_path) then raise exception 'Uploaded file not found'; end if;
  update public.case_documents set uploaded=true where id=d.id;
end;
$$;
create function public.remove_case_document(p_document uuid) returns void language plpgsql security definer set search_path = '' as $$
declare d public.case_documents;
begin
  if not private.is_member() then raise exception 'Not authorised'; end if;
  select * into d from public.case_documents where id=p_document and user_id=auth.uid() for update;
  if d.id is null then raise exception 'Document not found'; end if;
  if exists(select 1 from storage.objects where bucket_id='patient-records' and name=d.object_path) then raise exception 'Remove stored object first'; end if;
  delete from public.case_documents where id=d.id;
end;
$$;
create function public.submit_patient_case(p_case uuid) returns void language plpgsql security definer set search_path = '' as $$
begin
  if not private.is_member() then raise exception 'Not authorised'; end if;
  update public.patient_cases set status='submitted',submitted_at=now(),updated_at=now() where id=p_case and user_id=auth.uid() and length(trim(diagnosis))>0;
  if not found then raise exception 'A diagnosis or cancer type is required'; end if;
end;
$$;
create function public.admin_update_case(p_case uuid,p_status text) returns void language plpgsql security definer set search_path = '' as $$
begin
  if not private.is_admin() then raise exception 'Not authorised'; end if;
  if p_status not in ('submitted','reviewing','needs_info','closed') then raise exception 'Invalid status'; end if;
  update public.patient_cases set status=p_status,updated_at=now() where id=p_case;
  if not found then raise exception 'Case not found'; end if;
  insert into private.portal_audit(actor_id,case_id,action) values(auth.uid(),p_case,'status:'||p_status);
end;
$$;
create function public.audit_document_access(p_document uuid) returns void language plpgsql security definer set search_path = '' as $$
declare d public.case_documents;
begin
  select * into d from public.case_documents where id=p_document and uploaded and ((user_id=auth.uid() and private.is_member()) or private.is_admin());
  if d.id is null then raise exception 'Not authorised'; end if;
  insert into private.portal_audit(actor_id,case_id,document_id,action) values(auth.uid(),d.case_id,d.id,'document_download');
end;
$$;

-- Every upload consumes one of 20 reserved slots; a 10 MB bucket limit bounds each slot.
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values('patient-records','patient-records',false,10485760,array['application/pdf','image/jpeg','image/png'])
on conflict(id) do update set public=false,file_size_limit=excluded.file_size_limit,allowed_mime_types=excluded.allowed_mime_types;
create policy patient_record_upload on storage.objects for insert to authenticated with check (
  bucket_id='patient-records' and private.is_member() and exists(select 1 from public.case_documents d where d.object_path=name and d.user_id=auth.uid() and not d.uploaded)
);
create policy patient_record_read on storage.objects for select to authenticated using (
  bucket_id='patient-records' and exists(select 1 from public.case_documents d where d.object_path=name and ((d.user_id=auth.uid() and private.is_member()) or private.is_admin()))
);
create policy patient_record_delete on storage.objects for delete to authenticated using (
  bucket_id='patient-records' and private.is_member() and exists(select 1 from public.case_documents d where d.object_path=name and d.user_id=auth.uid())
);

revoke all on function private.is_member(),private.is_admin(),private.create_member_profile(),private.sync_member_email() from public,anon,authenticated;
grant execute on function private.is_member(),private.is_admin() to authenticated;
revoke all on function public.portal_admin_member(),public.save_member_profile(text,text,text),public.save_patient_case(text,text,text,text,text,boolean),public.reserve_case_document(uuid,text,text,text,bigint),public.finish_case_document(uuid),public.remove_case_document(uuid),public.submit_patient_case(uuid),public.admin_update_case(uuid,text),public.audit_document_access(uuid) from public,anon;
grant execute on function public.portal_admin_member(),public.save_member_profile(text,text,text),public.save_patient_case(text,text,text,text,text,boolean),public.reserve_case_document(uuid,text,text,text,bigint),public.finish_case_document(uuid),public.remove_case_document(uuid),public.submit_patient_case(uuid),public.admin_update_case(uuid,text),public.audit_document_access(uuid) to authenticated;
revoke all on all tables in schema private from public,anon,authenticated;

commit;
