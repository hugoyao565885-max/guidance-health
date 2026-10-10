-- Run as the project owner after support has registered and verified its email.
-- Never grant administrator access from user-editable auth metadata.
do $$
declare admin_id uuid;
begin
  select id into admin_id from auth.users where lower(email)='support@hccareadvisory.com' and email_confirmed_at is not null;
  if admin_id is null then raise exception 'The support account must register and verify its email first'; end if;
  insert into private.portal_admins(user_id) values(admin_id) on conflict do nothing;
end;
$$;
