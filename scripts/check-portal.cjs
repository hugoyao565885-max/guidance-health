const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");
const root = path.resolve(__dirname, "..");
const cache = new Map();

function load(file) {
  if (cache.has(file)) return cache.get(file);
  const module = { exports: {} };
  const result = ts.transpileModule(fs.readFileSync(file, "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } });
  const requireLocal = (id) => load(path.resolve(path.dirname(file), `${id}.ts`));
  new Function("require", "module", "exports", result.outputText)(requireLocal, module, module.exports);
  cache.set(file, module.exports);
  return module.exports;
}

async function main() {
  const { locales } = load(path.join(root, "lib/site.ts"));
  const { portalContent } = load(path.join(root, "lib/portal-content.ts"));
  const { documentCategories, maxDocuments, maxFileBytes, validatedFileExtension, isUuid, authCallbackOrigin } = load(path.join(root, "lib/portal-validation.ts"));
  const keys = Object.keys(portalContent.en).sort();
  for (const locale of locales) {
    const copy = portalContent[locale];
    assert.deepEqual(Object.keys(copy).sort(), keys, `${locale}: portal dictionary parity`);
    assert.equal(copy.categories.length, documentCategories.length);
    for (const key of keys) assert.ok(copy[key].length, `${locale}/${key}: empty copy`);
    assert.match(copy.dataNotice, /Singapore|新加坡|Сингапур|سنغافورة|Singapura/, `${locale}: disclose the project's verified database region`);
    assert.doesNotMatch(copy.dataNotice, /Tokyo|東京|Токио|طوكيو/, `${locale}: remove the previous database region`);
    assert.doesNotMatch(JSON.stringify(copy), /\bNK\b|输注|輸注|\binfusion\b|Clifford|祈福|Hugo Yao/i);
  }
  assert.equal(maxDocuments, 20);
  assert.equal(maxFileBytes, 10485760);
  assert.equal(await validatedFileExtension(new File(["%PDF-1.7\nfixture"], "test.pdf", { type: "application/pdf" })), "pdf");
  assert.equal(await validatedFileExtension(new File([new Uint8Array([255, 216, 255, 224])], "test.jpg", { type: "image/jpeg" })), "jpg");
  assert.equal(await validatedFileExtension(new File([new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10])], "test.png", { type: "image/png" })), "png");
  assert.equal(await validatedFileExtension(new File(["<script>not a PDF</script>"], "fake.pdf", { type: "application/pdf" })), null);
  assert.equal(await validatedFileExtension(new File(["<svg/>"], "test.svg", { type: "image/svg+xml" })), null);
  assert.equal(await validatedFileExtension(new File(["%PDF-1.7"], "test.html", { type: "application/pdf" })), null);
  assert.equal(await validatedFileExtension(new File([], "empty.pdf", { type: "application/pdf" })), null);
  assert.equal(await validatedFileExtension(new File([new Uint8Array(maxFileBytes + 1)], "large.pdf", { type: "application/pdf" })), null);
  assert.ok(isUuid("36c4dbbe-61a7-4e5b-aa93-aa074856de3c"));
  assert.equal(isUuid("../../another-member"), false);
  const canonicalOrigin = "https://hccareadvisory.com";
  const deploymentHost = "guidance-health-release-test.vercel.app";
  assert.equal(authCallbackOrigin(canonicalOrigin, canonicalOrigin, deploymentHost), canonicalOrigin);
  assert.equal(authCallbackOrigin(`https://${deploymentHost}`, canonicalOrigin, deploymentHost), `https://${deploymentHost}`);
  assert.equal(authCallbackOrigin("https://evil.example", canonicalOrigin, deploymentHost), canonicalOrigin);
  assert.equal(authCallbackOrigin(`https://${deploymentHost}.evil.example`, canonicalOrigin, deploymentHost), canonicalOrigin);
  assert.equal(authCallbackOrigin("https://guidance-health.vercel.app", canonicalOrigin, deploymentHost), canonicalOrigin);
  assert.equal(authCallbackOrigin(`http://${deploymentHost}`, canonicalOrigin, deploymentHost), canonicalOrigin);
  assert.equal(authCallbackOrigin("http://localhost:3000", canonicalOrigin), canonicalOrigin);

  const sql = fs.readFileSync(path.join(root, "supabase/migrations/202610100001_member_portal.sql"), "utf8");
  for (const table of ["member_profiles", "patient_cases", "case_documents"]) assert.ok(sql.includes(`alter table public.${table} enable row level security;`));
  assert.ok(sql.includes("(auth.jwt()->>'aal') = 'aal2'"), "Admin requires MFA in the database");
  assert.ok(sql.includes("pg_advisory_xact_lock(20261010)"), "Serialize storage reservations");
  assert.match(sql, /values\('patient-records','patient-records',false,10485760/);
  assert.match(sql, /d\.user_id=auth\.uid\(\)/);
  assert.doesNotMatch(sql, /grant\s+(?:all|insert|update|delete)\s+on\s+public\.(?:member_profiles|patient_cases|case_documents)\s+to\s+authenticated/i);
  assert.doesNotMatch(sql, /raw_user_meta_data|service_role/);
  const adminSql = fs.readFileSync(path.join(root, "supabase/authorize-admin.sql"), "utf8");
  assert.ok(adminSql.includes("support@hccareadvisory.com") && adminSql.includes("email_confirmed_at is not null"));
  const download = fs.readFileSync(path.join(root, "app/api/member/documents/[id]/route.ts"), "utf8");
  assert.match(download, /auth\.getUser\(\)/);
  assert.match(download, /createSignedUrl\(document\.object_path, 60, \{ download: name \}\)/);
  assert.match(download, /audit_document_access/);
  assert.match(download, /private, no-store/);
  const middleware = fs.readFileSync(path.join(root, "middleware.ts"), "utf8");
  assert.match(middleware, /auth\.getUser\(\)/);
  assert.doesNotMatch(middleware, /getSession\(/);
  assert.match(middleware, /noindex, nofollow/);
  const layout = fs.readFileSync(path.join(root, "app/[locale]/(portal)/layout.tsx"), "utf8");
  assert.match(layout, /dynamic = "force-dynamic"/);
  assert.match(layout, /index: false/);
  assert.match(fs.readFileSync(path.join(root, "app/sitemap.ts"), "utf8"), /section !== "register"/);
  const authForm = fs.readFileSync(path.join(root, "components/portal/auth-form.tsx"), "utf8");
  assert.match(authForm, /const \{ error \} = await client\.auth\.resetPasswordForEmail\(email, \{ redirectTo: callback \}\);\s*if \(error\) throw error;/, "Do not report recovery email success when the provider rejects the request");
  assert.ok(authForm.includes('/auth/callback?next='), "Email templates append token parameters to the callback's existing next query");
  for (const [file, type] of [["confirm-sign-up.html", "email"], ["reset-password.html", "recovery"]]) {
    const template = fs.readFileSync(path.join(root, "supabase/templates", file), "utf8");
    assert.ok(template.includes(`{{ .RedirectTo }}&amp;token_hash={{ .TokenHash }}&amp;type=${type}`));
    assert.doesNotMatch(template, /\{\{\s*\.(?:Data|Email|Token)\s*\}\}/, "Authentication templates must not include personal profile or record data");
  }
  for (const file of ["components/portal/member-case.tsx", "components/portal/auth-form.tsx", "components/portal/admin-panel.tsx"]) {
    assert.doesNotMatch(fs.readFileSync(path.join(root, file), "utf8"), /console\.|localStorage|sessionStorage|service_role/);
  }
  console.log("Portal unit and configuration checks passed. Live RLS, SMTP and upload verification is still required.");
}

main().catch((error) => { console.error(error.message); process.exitCode = 1; });
