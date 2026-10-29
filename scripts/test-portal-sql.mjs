import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { PGlite } from "@electric-sql/pglite";

// Disposable PostgreSQL fixtures exercise the real migration and RLS, not a portal backend.
const db = new PGlite();
const first = "11111111-1111-4111-8111-111111111111";
const second = "22222222-2222-4222-8222-222222222222";
const admin = "33333333-3333-4333-8333-333333333333";
const unverified = "44444444-4444-4444-8444-444444444444";
const sessions = new Map([[first, "11111111-aaaa-4111-8111-111111111111"], [second, "22222222-aaaa-4222-8222-222222222222"], [admin, "33333333-aaaa-4333-8333-333333333333"], [unverified, "44444444-aaaa-4444-8444-444444444444"]]);

await db.exec(`
  create role anon; create role authenticated;
  create schema auth; create schema storage;
  create table auth.users(id uuid primary key,email text,email_confirmed_at timestamptz);
  create table auth.sessions(id uuid primary key,user_id uuid references auth.users(id));
  create function auth.jwt() returns jsonb language sql stable as $$ select coalesce(nullif(current_setting('request.jwt.claims',true),''),'{}')::jsonb $$;
  create function auth.uid() returns uuid language sql stable as $$ select (auth.jwt()->>'sub')::uuid $$;
  create table storage.buckets(id text primary key,name text,public boolean,file_size_limit bigint,allowed_mime_types text[]);
  create table storage.objects(id uuid primary key default gen_random_uuid(),bucket_id text,name text,unique(bucket_id,name));
  alter table storage.objects enable row level security;
  grant usage on schema auth,storage to anon,authenticated;
  grant select,insert,update,delete on storage.objects to authenticated;
`);
await db.exec(await readFile(new URL("../supabase/migrations/202610100001_member_portal.sql", import.meta.url), "utf8"));
for (const [id, email] of [[first,"first@example.invalid"],[second,"second@example.invalid"],[admin,"support@hccareadvisory.com"],[unverified,"unverified@example.invalid"]]) {
  await db.query("insert into auth.users(id,email,email_confirmed_at) values($1,$2,$3)", [id, email, id === unverified ? null : new Date().toISOString()]);
  await db.query("insert into auth.sessions(id,user_id) values($1,$2)", [sessions.get(id), id]);
}
await db.exec(await readFile(new URL("../supabase/authorize-admin.sql", import.meta.url), "utf8"));

async function asUser(id, sql, params = [], aal = "aal1") {
  await db.exec("begin; set local role authenticated;");
  try {
    await db.query("select set_config('request.jwt.claims',$1,true)", [JSON.stringify({ sub: id, aal, session_id: sessions.get(id) })]);
    const result = await db.query(sql, params);
    await db.exec("commit");
    return result.rows;
  } catch (error) { await db.exec("rollback"); throw error; }
}

async function rejected(id, sql, params = [], aal) {
  await assert.rejects(() => asUser(id, sql, params, aal));
}

try {
  await db.exec("begin; set local role anon;");
  await assert.rejects(() => db.query("select * from public.member_profiles"));
  await db.exec("rollback");
  await rejected(unverified,"select public.save_member_profile('No','No','en')");
  await asUser(first,"select public.save_member_profile('Synthetic First','Test','en')");
  const own = await asUser(first,"select id from public.member_profiles");
  assert.deepEqual(own.map((row) => row.id), [first]);
  await rejected(first,"update public.member_profiles set email='support@hccareadvisory.com'");
  await rejected(first,"insert into private.portal_admins(user_id) values(auth.uid())");
  await rejected(first,"select public.save_patient_case('patient','Fixture','','','',false)");
  const caseOne = (await asUser(first,"select public.save_patient_case('patient','Fixture diagnosis','History','Medicine','Symptoms',true) as id"))[0].id;
  const caseTwo = (await asUser(second,"select public.save_patient_case('patient','Second fixture','','','',true) as id"))[0].id;
  assert.equal((await asUser(first,"select * from public.patient_cases where id=$1",[caseTwo])).length, 0);
  await rejected(first,"select public.submit_patient_case($1)",[caseTwo]);
  await rejected(first,"select public.admin_update_case($1,'reviewing')",[caseOne]);
  assert.equal((await asUser(first,"select public.portal_admin_member() as allowed"))[0].allowed,false);

  await rejected(first,"select * from public.reserve_case_document($1,'file.pdf','other','application/pdf',10)",[caseTwo]);
  await rejected(first,"select * from public.reserve_case_document($1,'file.html','other','text/html',10)",[caseOne]);
  await rejected(first,"select * from public.reserve_case_document($1,'large.pdf','other','application/pdf',10485761)",[caseOne]);
  const doc = (await asUser(first,"select * from public.reserve_case_document($1,'fixture.pdf','pathology','application/pdf',20)",[caseOne]))[0];
  assert.ok(doc.object_path.startsWith(`${first}/${caseOne}/`));
  assert.ok(!doc.object_path.includes("fixture"));
  await rejected(first,"select public.finish_case_document($1)",[doc.id]);
  await rejected(second,"insert into storage.objects(bucket_id,name) values('patient-records',$1)",[doc.object_path]);
  await asUser(first,"insert into storage.objects(bucket_id,name) values('patient-records',$1)",[doc.object_path]);
  await asUser(first,"select public.finish_case_document($1)",[doc.id]);
  assert.equal((await asUser(second,"select * from storage.objects where name=$1",[doc.object_path])).length,0);
  assert.equal((await asUser(second,"select * from public.case_documents where id=$1",[doc.id])).length,0);
  await rejected(second,"select public.audit_document_access($1)",[doc.id]);
  await asUser(first,"select public.audit_document_access($1)",[doc.id]);
  await asUser(first,"select public.submit_patient_case($1)",[caseOne]);
  assert.equal((await asUser(first,"select status from public.patient_cases"))[0].status,"submitted");

  assert.equal((await asUser(admin,"select count(*)::int as count from public.patient_cases"))[0].count,0);
  await rejected(admin,"select public.admin_update_case($1,'reviewing')",[caseOne]);
  assert.equal((await asUser(admin,"select count(*)::int as count from public.patient_cases",[],"aal2"))[0].count,2);
  assert.equal((await asUser(admin,"select * from storage.objects where name=$1",[doc.object_path],"aal2")).length,1);
  await asUser(admin,"select public.admin_update_case($1,'reviewing')",[caseOne],"aal2");
  await asUser(admin,"select public.audit_document_access($1)",[doc.id],"aal2");
  const audits = await db.query("select count(*)::int as count from private.portal_audit");
  assert.equal(audits.rows[0].count,3);

  await db.exec(await readFile(new URL("../supabase/migrations/202610290001_team_documents.sql", import.meta.url), "utf8"));
  const legacy = (await asUser(first,"select source,uploaded_by from public.case_documents where id=$1",[doc.id]))[0];
  assert.deepEqual(legacy, { source: "patient", uploaded_by: null }, "Existing patient uploads remain patient-owned without backfilling historical uploader identity");
  const reserveTeam = "select * from public.admin_reserve_case_document($1,'TEST ONLY summary.pdf','other','application/pdf',20)";
  await rejected(first, reserveTeam, [caseOne]);
  await rejected(second, reserveTeam, [caseOne]);
  await rejected(unverified, reserveTeam, [caseOne], "aal2");
  await rejected(admin, reserveTeam, [caseOne]);
  await rejected(admin, reserveTeam, ["00000000-0000-4000-8000-000000000000"], "aal2");
  await rejected(admin,"select * from public.admin_reserve_case_document($1,'bad.html','other','text/html',20)",[caseOne],"aal2");
  await rejected(admin,"select * from public.admin_reserve_case_document($1,'large.pdf','other','application/pdf',10485761)",[caseOne],"aal2");
  await db.exec("begin; set local role anon;");
  await assert.rejects(() => db.query(reserveTeam, [caseOne]));
  await db.exec("rollback");
  const teamDoc = (await asUser(admin,reserveTeam,[caseOne],"aal2"))[0];
  assert.equal(teamDoc.user_id,first);
  assert.equal(teamDoc.source,"team");
  assert.equal(teamDoc.uploaded_by,admin);
  assert.ok(teamDoc.object_path.startsWith(`${first}/${caseOne}/`));
  assert.ok(!teamDoc.object_path.includes("summary"));
  await rejected(first,"update public.case_documents set source='patient' where id=$1",[teamDoc.id]);
  assert.equal((await asUser(first,"select * from public.case_documents where id=$1",[teamDoc.id])).length,0,"Patient cannot see unpublished team drafts");
  await rejected(first,"select public.finish_case_document($1)",[teamDoc.id]);
  await rejected(first,"select public.remove_case_document($1)",[teamDoc.id]);
  await rejected(admin,"select public.finish_case_document($1)",[teamDoc.id]);
  await rejected(admin,"select public.finish_case_document($1)",[teamDoc.id],"aal2");
  for (const actor of [first,second,admin]) await rejected(actor,"insert into storage.objects(bucket_id,name) values('patient-records',$1)",[teamDoc.object_path]);
  await asUser(admin,"insert into storage.objects(bucket_id,name) values('patient-records',$1)",[teamDoc.object_path],"aal2");
  assert.equal((await asUser(first,"select * from storage.objects where name=$1",[teamDoc.object_path])).length,0,"Unpublished blobs remain private from recipient");
  await asUser(admin,"select public.finish_case_document($1)",[teamDoc.id],"aal2");
  await asUser(admin,"select public.finish_case_document($1)",[teamDoc.id],"aal2");
  assert.equal((await asUser(first,"select * from public.case_documents where id=$1 and uploaded",[teamDoc.id])).length,1);
  assert.equal((await asUser(first,"select * from storage.objects where name=$1",[teamDoc.object_path])).length,1);
  await asUser(first,"select public.audit_document_access($1)",[teamDoc.id]);
  for (const actor of [second,admin]) {
    assert.equal((await asUser(actor,"select * from public.case_documents where id=$1",[teamDoc.id])).length,0);
    assert.equal((await asUser(actor,"select * from storage.objects where name=$1",[teamDoc.object_path])).length,0);
    await rejected(actor,"select public.audit_document_access($1)",[teamDoc.id]);
    await rejected(actor,"select public.remove_case_document($1)",[teamDoc.id]);
  }
  await rejected(first,"select public.remove_case_document($1)",[teamDoc.id]);
  await asUser(first,"delete from storage.objects where name=$1",[teamDoc.object_path]);
  await asUser(first,"update storage.objects set name='changed.pdf' where name=$1",[teamDoc.object_path]);
  assert.equal((await asUser(first,"select * from storage.objects where name=$1",[teamDoc.object_path])).length,1,"Patient cannot alter or delete team objects");
  await rejected(admin,"select public.remove_case_document($1)",[doc.id],"aal2");
  await asUser(admin,"delete from storage.objects where name=$1",[doc.object_path],"aal2");
  assert.equal((await asUser(first,"select * from storage.objects where name=$1",[doc.object_path])).length,1,"Admin team-file editing does not grant deletion of patient files");
  await rejected(admin,"select public.remove_case_document($1)",[teamDoc.id],"aal2");
  await asUser(admin,"delete from storage.objects where name=$1",[teamDoc.object_path],"aal2");
  await asUser(admin,"select public.remove_case_document($1)",[teamDoc.id],"aal2");
  assert.equal((await asUser(first,"select * from public.case_documents where id=$1",[teamDoc.id])).length,0);
  const teamAudit = (await db.query("select action from private.portal_audit where document_id=$1 order by id",[teamDoc.id])).rows.map((row)=>row.action);
  assert.deepEqual(teamAudit,["team_document_reserved","team_document_published","document_download","team_document_removed"]);

  await rejected(first,"select public.remove_case_document($1)",[doc.id]);
  await asUser(first,"delete from storage.objects where name=$1",[doc.object_path]);
  await asUser(first,"select public.remove_case_document($1)",[doc.id]);
  for (let index=0; index<20; index++) await asUser(first,"select * from public.reserve_case_document($1,'fixture.pdf','other','application/pdf',20)",[caseOne]);
  await rejected(admin,reserveTeam,[caseOne],"aal2");
  await rejected(first,"select * from public.reserve_case_document($1,'fixture.pdf','other','application/pdf',20)",[caseOne]);
  for (let index=0; index<20; index++) await asUser(second,"select * from public.reserve_case_document($1,'fixture.pdf','other','application/pdf',20)",[caseTwo]);
  const adminCase = (await asUser(admin,"select public.save_patient_case('patient','Synthetic staff test','','','',true) as id"))[0].id;
  for (let index=0; index<20; index++) await asUser(admin,"select * from public.reserve_case_document($1,'fixture.pdf','other','application/pdf',20)",[adminCase]);
  const extra = "55555555-5555-4555-8555-555555555555";
  sessions.set(extra,"55555555-aaaa-4555-8555-555555555555");
  await db.query("insert into auth.users(id,email,email_confirmed_at) values($1,'extra@example.invalid',now())",[extra]);
  await db.query("insert into auth.sessions(id,user_id) values($1,$2)",[sessions.get(extra),extra]);
  const extraCase = (await asUser(extra,"select public.save_patient_case('patient','Extra fixture','','','',true) as id"))[0].id;
  await rejected(extra,"select * from public.reserve_case_document($1,'fixture.pdf','other','application/pdf',20)",[extraCase]);
  await rejected(admin,reserveTeam,[extraCase],"aal2");
  await db.query("delete from auth.sessions where user_id=$1",[admin]);
  await rejected(admin,reserveTeam,[caseOne],"aal2");
  await db.query("delete from auth.sessions where user_id=$1",[first]);
  assert.equal((await asUser(first,"select * from public.patient_cases")).length,0);
  await rejected(first,"select public.save_member_profile('No','No','en')");
  console.log("PostgreSQL migrations and RLS passed: patient/team uploads, recipient-only publication, cross-account isolation, immutable team files for patients, MFA, deletion, quotas, revoked sessions and audit. Live Supabase Auth/Storage still need verification.");
} finally { await db.close(); }
