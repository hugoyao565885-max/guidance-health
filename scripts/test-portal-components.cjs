const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const root = path.resolve(__dirname, "..");
const cache = new Map();

// Render the real components with synthetic props; no accounts, network or live records.
function load(file) {
  if (cache.has(file)) return cache.get(file);
  const module = { exports: {} };
  const output = ts.transpileModule(fs.readFileSync(file, "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2022 } }).outputText;
  const localRequire = (id) => {
    if (id === "next/navigation") return { useRouter: () => ({ refresh() {} }) };
    if (id === "next/link") return { default: ({ children, ...props }) => React.createElement("a", props, children) };
    if (!id.startsWith(".")) return require(id);
    const base = path.resolve(path.dirname(file), id);
    if (base === path.join(root, "lib/supabase/client")) return { browserClient() { throw new Error("Network forbidden in rendering tests"); } };
    return load([`${base}.ts`, `${base}.tsx`].find(fs.existsSync));
  };
  new Function("require", "module", "exports", output)(localRequire, module, module.exports);
  cache.set(file, module.exports);
  return module.exports;
}

const { MemberCase } = load(path.join(root, "components/portal/member-case.tsx"));
const { AdminPanel } = load(path.join(root, "components/portal/admin-panel.tsx"));
const { portalContent } = load(path.join(root, "lib/portal-content.ts"));
const { locales, localeMeta } = load(path.join(root, "lib/site.ts"));
const created = "2026-10-29T08:00:00Z";
const profile = { id: "11111111-1111-4111-8111-111111111111", email: "test-only@example.invalid", display_name: "TEST ONLY / non-patient", country: "TEST ONLY", preferred_locale: "en", created_at: created };
const patientCase = { id: "22222222-2222-4222-8222-222222222222", user_id: profile.id, relationship: "patient", diagnosis: "TEST ONLY - not a diagnosis", treatment_history: "TEST ONLY", medications: "TEST ONLY", symptoms: "TEST ONLY", consent_version: "2026-10-10", status: "submitted", updated_at: created };
const document = { case_id: patientCase.id, user_id: profile.id, category: "other", mime_type: "application/pdf", byte_size: 2048, uploaded: true, created_at: created, uploaded_by: profile.id };
const documents = [
  { ...document, id: "33333333-3333-4333-8333-333333333333", original_name: "TEST-patient.pdf", object_path: "test/patient.pdf", source: "patient" },
  { ...document, id: "44444444-4444-4444-8444-444444444444", original_name: "TEST-team-summary.pdf", object_path: "test/team.pdf", source: "team" },
  { ...document, id: "55555555-5555-4555-8555-555555555555", original_name: "TEST-unpublished-team.pdf", object_path: "test/draft.pdf", source: "team", uploaded: false },
];
const outIndex = process.argv.indexOf("--output-dir");
const outputDir = outIndex >= 0 ? path.resolve(process.argv[outIndex + 1]) : null;
if (outputDir) fs.mkdirSync(outputDir, { recursive: true });
for (const locale of locales) {
  const copy = portalContent[locale];
  const member = renderToStaticMarkup(React.createElement(MemberCase, { locale, profile, initialCase: patientCase, initialDocuments: documents, checklist: ["TEST ONLY"] }));
  assert.ok(member.includes(copy.teamDocuments));
  assert.ok(member.includes("TEST-team-summary.pdf"));
  assert.ok(!member.includes("TEST-unpublished-team.pdf"));
  assert.ok(member.includes(`aria-label="${copy.remove}: TEST-patient.pdf"`));
  assert.ok(!member.includes(`aria-label="${copy.remove}: TEST-team-summary.pdf"`));
  assert.ok(member.includes('/api/member/documents/44444444-4444-4444-8444-444444444444/'));
  const admin = renderToStaticMarkup(React.createElement(AdminPanel, { locale, members: [profile], cases: [patientCase], documents, selectedCase: patientCase, page: 0 }));
  assert.ok(admin.includes(copy.confirmPatientShare));
  assert.ok(admin.includes(profile.email));
  assert.ok(admin.includes('accept="application/pdf,image/jpeg,image/png"'));
  assert.ok(admin.includes(`aria-label="${copy.remove}: TEST-team-summary.pdf"`));
  assert.ok(admin.includes(`aria-label="${copy.remove}: TEST-unpublished-team.pdf"`));
  assert.ok(!admin.includes(`aria-label="${copy.remove}: TEST-patient.pdf"`));
  for (const [role, html] of [["admin", admin], ["member", member]]) {
    if (outputDir) fs.writeFileSync(path.join(outputDir, `${locale}-${role}.html`), `<!doctype html><html lang="${localeMeta[locale].htmlLang}" dir="${localeMeta[locale].dir}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>TEST ONLY - H&C Care ${role}</title><style>${fs.readFileSync(path.join(root, "app/globals.css"), "utf8")}</style></head><body><main class="container section"><p class="eyebrow">H&amp;C Care / TEST ONLY - LOCAL RENDERING FIXTURE</p><h1>${role === "admin" ? copy.admin : copy.account}</h1>${html}</main></body></html>`);
  }
}
console.log("Six-language component checks passed: team files readable but not removable by patients, unpublished files hidden, admin recipient/confirmation controls present. This is a local render test, not a live upload test.");
