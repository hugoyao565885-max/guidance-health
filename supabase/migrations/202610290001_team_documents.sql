begin;

alter table public.case_documents
  add column source text not null default 'patient' check (source in ('patient','team')),
  add column uploaded_by uuid references auth.users(id) on delete set null;
-- Historical uploader identity remains unset; no backfill of existing file records.

-- Only the database chooses the recipient, uploader and source of a team document.
create function public.admin_reserve_case_document(p_case uuid,p_name text,p_category text,p_mime text,p_bytes bigint)
returns public.case_documents language plpgsql security definer set search_path = '' as $$
declare c public.patient_cases; d public.case_documents; extension text;
begin
  if not private.is_admin() then raise exception 'Not authorised'; end if;
  perform pg_advisory_xact_lock(20261010);
  select * into c from public.patient_cases where id=p_case for update;
  if c.id is null then raise exception 'Case not found'; end if;
  if (select count(*) from public.case_documents where user_id=c.user_id) >= 20 then raise exception 'File limit reached'; end if;
  if (select count(*) from public.case_documents) >= 60 then raise exception 'Storage capacity reached. Contact support'; end if;
  extension := case p_mime when 'application/pdf' then 'pdf' when 'image/jpeg' then 'jpg' when 'image/png' then 'png' else null end;
  if extension is null then raise exception 'Unsupported document'; end if;
  d.id:=gen_random_uuid();
  insert into public.case_documents(id,case_id,user_id,original_name,category,mime_type,byte_size,object_path,source,uploaded_by)
  values(d.id,c.id,c.user_id,p_name,p_category,p_mime,p_bytes,c.user_id::text||'/'||c.id::text||'/'||d.id::text||'.'||extension,'team',auth.uid()) returning * into d;
  insert into private.portal_audit(actor_id,case_id,document_id,action) values(auth.uid(),c.id,d.id,'team_document_reserved');
  return d;
end;
$$;

create or replace function public.finish_case_document(p_document uuid) returns void language plpgsql security definer set search_path = '' as $$
declare d public.case_documents;
begin
  select * into d from public.case_documents where id=p_document and (
    (source='patient' and user_id=auth.uid() and private.is_member()) or (source='team' and private.is_admin())
  ) for update;
  if d.id is null then raise exception 'Not authorised'; end if;
  if not exists(select 1 from storage.objects where bucket_id='patient-records' and name=d.object_path) then raise exception 'Uploaded file not found'; end if;
  if d.uploaded then return; end if;
  update public.case_documents set uploaded=true,uploaded_by=coalesce(uploaded_by,auth.uid()) where id=d.id;
  if d.source='team' then
    insert into private.portal_audit(actor_id,case_id,document_id,action) values(auth.uid(),d.case_id,d.id,'team_document_published');
  end if;
end;
$$;

create or replace function public.remove_case_document(p_document uuid) returns void language plpgsql security definer set search_path = '' as $$
declare d public.case_documents;
begin
  select * into d from public.case_documents where id=p_document and (
    (source='patient' and user_id=auth.uid() and private.is_member()) or (source='team' and private.is_admin())
  ) for update;
  if d.id is null then raise exception 'Not authorised'; end if;
  if exists(select 1 from storage.objects where bucket_id='patient-records' and name=d.object_path) then raise exception 'Remove stored object first'; end if;
  if d.source='team' then
    insert into private.portal_audit(actor_id,case_id,document_id,action) values(auth.uid(),d.case_id,d.id,'team_document_removed');
  end if;
  delete from public.case_documents where id=d.id;
end;
$$;

drop policy case_documents_read on public.case_documents;
create policy case_documents_read on public.case_documents for select to authenticated using (
  (user_id=auth.uid() and private.is_member() and (source='patient' or uploaded)) or private.is_admin()
);
drop policy patient_record_upload on storage.objects;
create policy patient_record_upload on storage.objects for insert to authenticated with check (
  bucket_id='patient-records' and exists(select 1 from public.case_documents d where d.object_path=name and not d.uploaded and (
    (d.source='patient' and d.user_id=auth.uid() and private.is_member()) or
    (d.source='team' and d.uploaded_by=auth.uid() and private.is_admin())
  ))
);
drop policy patient_record_read on storage.objects;
create policy patient_record_read on storage.objects for select to authenticated using (
  bucket_id='patient-records' and exists(select 1 from public.case_documents d where d.object_path=name and (
    (d.user_id=auth.uid() and private.is_member() and (d.source='patient' or d.uploaded)) or private.is_admin()
  ))
);
drop policy patient_record_delete on storage.objects;
create policy patient_record_delete on storage.objects for delete to authenticated using (
  bucket_id='patient-records' and exists(select 1 from public.case_documents d where d.object_path=name and (
    (d.source='patient' and d.user_id=auth.uid() and private.is_member()) or (d.source='team' and private.is_admin())
  ))
);

revoke all on function public.admin_reserve_case_document(uuid,text,text,text,bigint) from public,anon;
grant execute on function public.admin_reserve_case_document(uuid,text,text,text,bigint) to authenticated;

commit;
