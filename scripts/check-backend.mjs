const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
if (!url || !key) throw new Error("Provide the public Supabase URL and publishable key through environment variables.");
const headers = { apikey: key };
const settings = await fetch(`${url}/auth/v1/settings`, { headers, signal: AbortSignal.timeout(15000) });
if (!settings.ok) throw new Error(`Supabase Auth unavailable (${settings.status})`);
const auth = await settings.json();
console.log(`Email auth: ${auth.external?.email === true}; email verification required: ${auth.mailer_autoconfirm === false}`);
let ready = true;
for (const table of ["member_profiles", "patient_cases", "case_documents"]) {
  const response = await fetch(`${url}/rest/v1/${table}?select=id&limit=0`, { headers, signal: AbortSignal.timeout(15000) });
  const body = await response.json();
  if (body.code === "PGRST205") { console.log(`${table}: not provisioned`); ready = false; }
  else if ([401, 403].includes(response.status)) console.log(`${table}: anonymous access denied`);
  else { console.log(`${table}: unexpected status ${response.status}; review grants`); ready = false; }
}
if (!ready) process.exitCode = 1;
console.log("This read-only check does not verify SMTP delivery, member isolation or file upload.");
