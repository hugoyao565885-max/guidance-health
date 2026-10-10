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

const { locales, localeMeta, contact, brand } = loadDictionary(path.join(root, "lib/site.ts"));
const { content, sectionKeys } = loadDictionary(path.join(root, "lib/content.ts"));
const { patientContent, carTSource } = loadDictionary(path.join(root, "lib/patient-content.ts"));
const { serviceContent, servicePrices, admissionTotal } = loadDictionary(path.join(root, "lib/service-pricing.ts"));
assert.equal(new URL(carTSource).protocol, "https:");
assert.deepEqual(contact.emails, ["info@hccareadvisory.com", "contact@hccareadvisory.com", "support@hccareadvisory.com"]);
assert.equal(contact.whatsappUrl, "https://wa.me/85295813961");
assert.equal(brand.zhLegalName, "康誠健康顧問有限公司");
assert.ok(sectionKeys.includes("about"));
assert.deepEqual(servicePrices, { currency: "CNY", quotedOn: "2026-10-10", preArrival: 2880, duringStay: { fiveSeat: 3580, business: 3730 }, afterDischarge: 1180 });
assert.equal(admissionTotal("fiveSeat", true), 7640);
assert.equal(admissionTotal("business", true), 7790);
assert.equal(admissionTotal("fiveSeat", false), 4760);
assert.equal(admissionTotal("business", false), 4910);

for (const locale of locales) {
  const page = content[locale];
  const ui = patientContent[locale];
  assert.ok(page && ui, `Missing locale: ${locale}`);
  assert.equal(localeMeta[locale].dir, locale === "ar" ? "rtl" : "ltr");
  assert.equal(ui.services.plans.length, 3, `${locale}: service count`);
  assert.deepEqual(ui.services, serviceContent[locale], `${locale}: shared pricing copy`);
  assert.deepEqual(ui.services.plans.map((plan) => plan.stage), ["preArrival", "duringStay", "afterDischarge"], `${locale}: admission stages`);
  assert.equal(ui.services.conditions.length, 6, `${locale}: service allowances`);
  assert.equal(ui.services.pricing.vehicles.length, 2, `${locale}: airport vehicle options`);
  assert.ok(ui.services.pricing.firstNote && ui.services.pricing.repeatNote && ui.services.pricing.unit, `${locale}: repeat admission billing`);
  assert.equal(page.sections.membership.body, ui.services.body, `${locale}: pricing metadata`);
  assert.deepEqual(page.sections.membership.plans, ui.services.plans, `${locale}: duplicated service copy diverged`);
  assert.deepEqual(page.sections.terms.cards.slice(0, 2), [ui.services.included, ui.services.excluded], `${locale}: package fee boundaries`);
  for (const plan of ui.services.plans) assert.ok(plan.items.length >= 3, `${locale}/${plan.stage}: service scope`);
  assert.doesNotMatch(JSON.stringify(ui.services.plans), /Annual case support|年度個案支持|Годовое сопровождение|دعم الحالة السنوي|Dukungan kasus tahunan|Sokongan kes tahunan/i, `${locale}: obsolete annual plans`);
  assert.equal(page.sections.membership.modules.length, 3, `${locale}: support modules`);
  assert.equal(page.sections.experts.people.length, 3, `${locale}: expert profiles`);
  assert.equal(ui.contact.labels.length, contact.emails.length, `${locale}: contact labels`);
  assert.ok(page.sections.register.documents.length >= 11, `${locale}: records checklist`);
  assert.ok(ui.faq.items.length >= 6, `${locale}: FAQ`);
  assert.equal(ui.carT.items.length, 3, `${locale}: sourced patient information`);
  assert.equal(page.sections.about.challenges.items.length, 6, `${locale}: patient challenges`);
  assert.equal(page.sections.about.strengths.items.length, 3, `${locale}: company focus`);
  assert.equal(page.sections.about.research.steps.length, 5, `${locale}: research coordination`);
  assert.equal(page.sections.about.team.items.length, 3, `${locale}: clinical background`);
  assert.ok(page.sections.about.body.includes(brand.legalName) && page.sections.about.body.includes(brand.zhLegalName), `${locale}: company identity`);
  assert.ok(page.sections.about.boundaries.note && page.sections.about.research.note, `${locale}: clinical boundaries`);
  for (const section of sectionKeys) {
    assert.ok(page.nav[section] && page.sections[section].title && page.sections[section].body, `${locale}/${section}: missing copy`);
  }
  for (const expert of page.sections.experts.people) {
    assert.ok(fs.existsSync(path.join(root, "public", expert.image)), `${locale}: missing portrait ${expert.image}`);
  }
  const publicCopy = JSON.stringify([page, ui]);
  assert.doesNotMatch(publicCopy, /\bNK\b|输注|輸注|\binfusion\b|Clifford|祈福|Hugo Yao/i, `${locale}: restricted public copy`);
  assert.doesNotMatch(publicCopy, /USD\s*(300|980)/i, `${locale}: outdated price`);
  assert.doesNotMatch(publicCopy, /成本加價|成本加价|成本合計|成本合计|翻譯月薪|翻译月薪|客服提成|net profit|salary allocation/i, `${locale}: internal costing must not be published`);
  assert.doesNotMatch(publicCopy, /H&C 健康顧問有限公司/, `${locale}: outdated company name`);
}

assert.ok(fs.existsSync(path.join(root, "public/images/patient-room.jpg")));
console.log(`Content checks passed for ${locales.length} languages and ${sectionKeys.length} page sections.`);
