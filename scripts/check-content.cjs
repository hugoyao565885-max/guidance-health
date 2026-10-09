const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");

const root = path.resolve(__dirname, "..");
const cache = new Map();

// Load the typed dictionaries without generating extra build artifacts.
function loadDictionary(file) {
  if (cache.has(file)) return cache.get(file);
  const module = { exports: {} };
  cache.set(file, module.exports);
  const result = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  });
  const localRequire = (id) => {
    assert.ok(id.startsWith("."), `Unexpected dictionary import: ${id}`);
    return loadDictionary(path.resolve(path.dirname(file), `${id}.ts`));
  };
  new Function("require", "module", "exports", result.outputText)(localRequire, module, module.exports);
  return module.exports;
}

const { locales, localeMeta, contact } = loadDictionary(path.join(root, "lib/site.ts"));
const { content, sectionKeys } = loadDictionary(path.join(root, "lib/content.ts"));
const { patientContent, carTSource } = loadDictionary(path.join(root, "lib/patient-content.ts"));
assert.equal(new URL(carTSource).protocol, "https:");
assert.deepEqual(contact.emails, ["info@hccareadvisory.com", "contact@hccareadvisory.com", "support@hccareadvisory.com"]);
assert.equal(contact.whatsappUrl, "https://wa.me/85295813961");

for (const locale of locales) {
  const page = content[locale];
  const ui = patientContent[locale];
  assert.ok(page && ui, `Missing locale: ${locale}`);
  assert.equal(localeMeta[locale].dir, locale === "ar" ? "rtl" : "ltr");
  assert.equal(ui.services.plans.length, 3, `${locale}: service count`);
  assert.deepEqual(page.sections.membership.plans, ui.services.plans, `${locale}: duplicated service copy diverged`);
  assert.equal(page.sections.membership.modules.length, 3, `${locale}: support modules`);
  assert.equal(page.sections.experts.people.length, 3, `${locale}: expert profiles`);
  assert.equal(ui.contact.labels.length, contact.emails.length, `${locale}: contact labels`);
  assert.ok(page.sections.register.documents.length >= 11, `${locale}: records checklist`);
  assert.ok(ui.faq.items.length >= 6, `${locale}: FAQ`);
  assert.equal(ui.carT.items.length, 3, `${locale}: sourced patient information`);
  for (const section of sectionKeys) {
    assert.ok(page.nav[section] && page.sections[section].title && page.sections[section].body, `${locale}/${section}: missing copy`);
  }
  for (const expert of page.sections.experts.people) {
    assert.ok(fs.existsSync(path.join(root, "public", expert.image)), `${locale}: missing portrait ${expert.image}`);
  }
  const publicCopy = JSON.stringify([page, ui]);
  assert.doesNotMatch(publicCopy, /\bNK\b|输注|輸注|\binfusion\b|Clifford|祈福|Hugo Yao/i, `${locale}: restricted public copy`);
  assert.doesNotMatch(publicCopy, /USD\s*(300|980)|"price"\s*:/i, `${locale}: outdated price`);
}

assert.ok(fs.existsSync(path.join(root, "public/images/patient-room.jpg")));
console.log(`Content checks passed for ${locales.length} languages and ${sectionKeys.length} page sections.`);
