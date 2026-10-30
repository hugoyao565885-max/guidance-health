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

const { locales, localeMeta, contact, brand, siteUrl, alternates, pagePath } = loadDictionary(path.join(root, "lib/site.ts"));
const { publicMetadata, organizationData, publicPageUpdates } = loadDictionary(path.join(root, "lib/seo.ts"));
const { patientGuides, guidesUpdated } = loadDictionary(path.join(root, "lib/patient-guides.ts"));
const { oncologyGuides, oncologyGuideTopics, oncologyGuidesUpdated, isOncologyGuideTopic } = loadDictionary(path.join(root, "lib/oncology-guides.ts"));
const { educationUi, educationArticles, educationUpdated, educationArticlePath, findEducationArticle } = loadDictionary(path.join(root, "lib/education.ts"));
const { researchContent, researchUpdated, lungStudy } = loadDictionary(path.join(root, "lib/research-content.ts"));
const sitemap = loadDictionary(path.join(root, "app/sitemap.ts")).default();
const robots = loadDictionary(path.join(root, "app/robots.ts")).default();
const { content, sectionKeys } = loadDictionary(path.join(root, "lib/content.ts"));
const { patientContent, carTSource } = loadDictionary(path.join(root, "lib/patient-content.ts"));
const { serviceContent, serviceBasePrices, serviceExchangeRate, serviceCnyPerUsd, servicePrices, serviceCombinationTotal, formatServiceAmount } = loadDictionary(path.join(root, "lib/service-pricing.ts"));
assert.equal(new URL(carTSource).protocol, "https:");
assert.equal(siteUrl, "https://hccareadvisory.com");
for (const locale of locales) assert.equal(alternates("/about/")[localeMeta[locale].htmlLang], `${siteUrl}/${locale}/about`);
assert.deepEqual(contact.emails, ["info@hccareadvisory.com", "contact@hccareadvisory.com", "support@hccareadvisory.com"]);
assert.equal(contact.whatsappUrl, "https://wa.me/85295813961");
assert.equal(brand.zhLegalName, "康誠健康顧問有限公司");
assert.ok(sectionKeys.includes("about"));
assert.ok(sectionKeys.includes("research"));
assert.equal(lungStudy.protocol, "IBR854-204");
assert.equal(new URL(lungStudy.sourceUrl).protocol, "https:");
assert.equal(publicPageUpdates.research, researchUpdated);
const publicSections = ["", ...sectionKeys.filter((section) => section !== "register"), "records", "education", ...oncologyGuideTopics.map((topic) => `guides/${topic}`)];
assert.deepEqual(Object.keys(publicPageUpdates).sort(), [...publicSections].sort());
assert.equal(sitemap.length, locales.length * publicSections.length + educationArticles.length);
assert.equal(new Set(sitemap.map((item) => item.url)).size, sitemap.length);
assert.equal(organizationData()["@type"], "Organization");
assert.equal(organizationData().legalName, brand.legalName);
assert.equal(publicPageUpdates.education, educationUpdated);
for (const locale of locales) assert.ok(educationUi[locale].nav && educationUi[locale].description && educationUi[locale].originalLanguage);
assert.equal(new Set(educationArticles.map(educationArticlePath)).size, educationArticles.length);
for (const article of educationArticles) {
  assert.ok(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.slug));
  assert.equal(article.language, "zh-Hans");
  assert.equal(article.locale, "zh-hant");
  assert.ok(article.paragraphs.length > 0 && article.references.length > 0);
  assert.ok(article.paragraphs.every((text) => typeof text === "string" && text.length > 0));
  const source = new URL(article.sourceUrl);
  assert.equal(source.hostname, "mp.weixin.qq.com");
  assert.ok(source.pathname.startsWith("/s/") && !source.search);
  assert.doesNotMatch(JSON.stringify(article), /cgi-bin|token=|<img|<script|医院肿瘤中心|祈福/);
  assert.ok(sitemap.some((item) => item.url === `${siteUrl}${educationArticlePath(article)}`));
  assert.equal(findEducationArticle(article.locale, article.slug), article);
  assert.equal(findEducationArticle("en", article.slug), undefined, "Do not invent translated editions");
  for (const reference of article.references) assert.equal(new URL(reference.url).protocol, "https:");
}
assert.equal(findEducationArticle("zh-hant", "not-an-article"), undefined);
for (const locale of locales) {
  for (const topic of oncologyGuideTopics) {
    const guide = oncologyGuides[locale][topic];
    assert.equal(isOncologyGuideTopic(topic), true);
    assert.equal(publicPageUpdates[`guides/${topic}`], oncologyGuidesUpdated);
    assert.deepEqual(Object.keys(guide).sort(), Object.keys(oncologyGuides.en[topic]).sort());
    assert.ok(guide.label && guide.title && guide.description);
    assert.ok(guide.sections.length >= 5 && guide.questions.length >= 2 && guide.sources.length >= 2);
    assert.ok(new Set(guide.sections.map((item) => item.title)).size === guide.sections.length);
    for (const related of guide.related) assert.ok(publicSections.includes(related));
    for (const source of guide.sources) {
      assert.equal(new URL(source.url).protocol, "https:");
      assert.equal(new URL(source.url).hostname, "www.cancer.gov");
    }
    const guideCopy = JSON.stringify(guide);
    if (locale !== "zh-hant") assert.doesNotMatch(guideCopy, /\p{Script=Han}/u, `${locale}/${topic}: untranslated copy`);
    assert.doesNotMatch(guideCopy, /Hong\s*Kong|香港|Гонкон|هونغ كونغ|Clifford|祈福|Hugo Yao/i);
    assert.doesNotMatch(guideCopy, /guaranteed cure|100%|包治|保證治癒|保证治愈|best cancer hospital|lowest price/i);
    if (topic === "cell-therapy") {
      for (const term of ["CAR-T", "NK", "TCR-T", "TIL", "HLA", "NCI"]) assert.ok(guideCopy.includes(term), `${locale}: cell guide ${term}`);
    } else assert.doesNotMatch(guideCopy, /\bNK\b/, `${locale}: NK is confined to the educational cell guide`);
  }
  for (const section of publicSections) {
    const path = pagePath(locale, section);
    assert.equal(pagePath(locale, `/${section}/`), path);
    assert.ok(!path.endsWith("/"));
    const metadata = publicMetadata(locale, section, "Title", "Description");
    assert.equal(metadata.alternates.canonical, `${siteUrl}${path}`);
    assert.equal(metadata.alternates.languages[localeMeta[locale].htmlLang], metadata.alternates.canonical);
    assert.equal(Object.keys(metadata.alternates.languages).length, 7);
    assert.equal(metadata.openGraph.url, metadata.alternates.canonical);
    assert.ok(sitemap.some((entry) => entry.url === metadata.alternates.canonical && /^\d{4}-\d{2}-\d{2}$/.test(entry.lastModified)));
  }
  for (const key of ["mdt", "journey", "records"]) {
    const guide = patientGuides[locale].guides[key];
    assert.ok(guide.title && guide.description && guide.sections.length >= 4);
    assert.equal(publicPageUpdates[key], guidesUpdated);
    for (const section of guide.related) assert.ok(publicSections.includes(section));
    for (const source of guide.sources) assert.equal(new URL(source.url).protocol, "https:");
  }
  if (locale !== "zh-hant") assert.doesNotMatch(JSON.stringify(patientGuides[locale]), /\p{Script=Han}/u, `${locale}: untranslated Chinese text`);
  assert.doesNotMatch(JSON.stringify(patientGuides[locale]), /\bNK\b|输注|輸注|\binfusion\b|Clifford|祈福|Hugo Yao/i);
  for (const rule of robots.rules.disallow) {
    const matches = new RegExp(`^${rule.replace(/[.*+?^{}()|[\]\\]/g, "\\$&")}`).test(`/${locale}/membership`);
    assert.equal(matches, false, "Private member rule must not block public membership pricing");
  }
}
assert.equal(isOncologyGuideTopic("unknown"), false);
assert.equal(isOncologyGuideTopic("../member"), false);
assert.deepEqual(serviceBasePrices, { currency: "CNY", quotedOn: "2026-10-10", preArrival: 2880, duringStay: { fiveSeat: 3580, business: 3730 }, afterDischarge: 1180 }, "Keep the original quote unchanged");
assert.equal(serviceExchangeRate.asOf, "2026-10-23");
assert.equal(serviceExchangeRate.usdPerEur, 1.1193);
assert.equal(serviceExchangeRate.cnyPerEur, 7.4660);
assert.equal(new URL(serviceExchangeRate.sourceUrl).hostname, "www.ecb.europa.eu");
assert.equal(serviceCnyPerUsd, serviceExchangeRate.cnyPerEur / serviceExchangeRate.usdPerEur);
assert.equal(serviceCnyPerUsd.toFixed(5), "6.67024");
assert.deepEqual(servicePrices, { currency: "USD", quotedOn: "2026-10-10", preArrival: 432, duringStay: { fiveSeat: 537, business: 559 }, afterDischarge: 177 });
assert.equal(serviceCombinationTotal("fiveSeat", true), 1146);
assert.equal(serviceCombinationTotal("business", true), 1168);
assert.equal(serviceCombinationTotal("fiveSeat", false), 714);
assert.equal(serviceCombinationTotal("business", false), 736);
for (const vehicle of ["fiveSeat", "business"]) {
  assert.equal(servicePrices.duringStay[vehicle], Math.round(serviceBasePrices.duringStay[vehicle] / serviceCnyPerUsd));
  assert.equal(serviceCombinationTotal(vehicle, false), servicePrices.duringStay[vehicle] + servicePrices.afterDischarge);
  assert.equal(serviceCombinationTotal(vehicle, true), servicePrices.preArrival + serviceCombinationTotal(vehicle, false), "Totals must add the displayed stage estimates");
}
for (const stage of ["preArrival", "afterDischarge"]) assert.equal(servicePrices[stage], Math.round(serviceBasePrices[stage] / serviceCnyPerUsd));

for (const locale of locales) {
  const page = content[locale];
  const ui = patientContent[locale];
  const research = researchContent[locale];
  assert.deepEqual(Object.keys(research).sort(), Object.keys(researchContent.en).sort(), `${locale}: research translation keys`);
  assert.deepEqual(page.sections.research, research, `${locale}: shared research copy`);
  assert.equal(page.nav.research, research.label);
  assert.equal(research.facts.length, 3);
  assert.equal(research.arms.length, 2, `${locale}: disclose both study arms`);
  assert.equal(research.eligibility.length, 4);
  assert.equal(research.records.length, 5);
  assert.equal(research.steps.length, 3);
  assert.equal(research.questions.length, 3);
  assert.match(research.studyTitle, /IBR854-204/);
  assert.match(research.eligibility.join(" "), /EGFR.*ALK.*ROS1/);
  assert.match(research.eligibility.join(" "), /PD-L1 TPS.*1%/);
  assert.ok(research.status && research.allocation && research.eligibilityNote && research.boundary);
  assert.doesNotMatch(JSON.stringify(research), /IBR854-203|IBR854-101|renal cell|kidney cancer|pazopanib|腎癌|肾癌|腎細胞|肾细胞|почечноклеточн|kanser buah pinggang|kanker ginjal|سرطان الكلى/i, `${locale}: lung study only`);
  assert.doesNotMatch(JSON.stringify(research), /31\.6%|\bDIP\b|機密|机密|\bmg\b|\bCRO\b|clinical trial enrollment guaranteed/i, `${locale}: exclude internal protocol data and promotional claims`);
  if (locale !== "zh-hant") assert.doesNotMatch(JSON.stringify(research), /\p{Script=Han}/u, `${locale}: research translated`);
  assert.ok(page && ui, `Missing locale: ${locale}`);
  assert.equal(localeMeta[locale].dir, locale === "ar" ? "rtl" : "ltr");
  assert.equal(ui.services.plans.length, 3, `${locale}: service count`);
  assert.deepEqual(ui.services, serviceContent[locale], `${locale}: shared pricing copy`);
  assert.match(ui.services.eyebrow, /USD/, `${locale}: dollar pricing heading`);
  assert.match(ui.services.note, /USD/, `${locale}: reference pricing and settlement notice`);
  assert.ok(ui.services.exchange.label && ui.services.exchange.note && ui.services.exchange.source, `${locale}: translated exchange-rate disclosure`);
  assert.equal(formatServiceAmount(1146, locale), new Intl.NumberFormat(localeMeta[locale].htmlLang, { maximumFractionDigits: 0 }).format(1146), `${locale}: localized USD amounts`);
  assert.deepEqual(ui.services.plans.map((plan) => plan.stage), ["preArrival", "duringStay", "afterDischarge"], `${locale}: admission stages`);
  assert.equal(ui.services.conditions.length, 6, `${locale}: service allowances`);
  assert.equal(ui.services.pricing.vehicles.length, 2, `${locale}: airport vehicle options`);
  assert.ok(ui.services.pricing.allStagesLabel && ui.services.pricing.inChinaAfterLabel && ui.services.pricing.allStagesNote && ui.services.pricing.inChinaAfterNote && ui.services.pricing.unit, `${locale}: optional service combinations`);
  assert.match(ui.services.body, /separately|單獨|отдельно|منفصل|terpisah|berasingan/, `${locale}: stages can be purchased separately`);
  assert.match(ui.services.pricing.body, /not required|並非必須|не обязательны|ليست باقات إلزامية|bukan paket wajib|bukan pakej wajib/, `${locale}: combination totals are examples, not mandatory bundles`);
  assert.doesNotMatch(JSON.stringify(ui.services), /first-time|first admission|首次|нового пациента|Новый пациент|первой подготовке|المريض الجديد|التحضير الأولى|pertama kali|persiapan pertama|kali pertama|persediaan pertama/i, `${locale}: no first-time-only service wording`);
  assert.doesNotMatch(JSON.stringify(ui.services), /Purchased for every|每次住院均需購買|Приобретается для каждой|تشترى لكل دخول|Dibeli untuk setiap|Dibeli setiap kemasukan/, `${locale}: stages are not compulsory`);
  assert.equal(page.sections.membership.body, ui.services.body, `${locale}: pricing metadata`);
  assert.deepEqual(page.sections.membership.plans, ui.services.plans, `${locale}: duplicated service copy diverged`);
  assert.deepEqual(page.sections.terms.cards.slice(0, 2), [ui.services.included, ui.services.excluded], `${locale}: package fee boundaries`);
  for (const plan of ui.services.plans) assert.ok(plan.items.length >= 3, `${locale}/${plan.stage}: service scope`);
  assert.doesNotMatch(JSON.stringify(ui.services.plans), /Annual case support|年度個案支持|Годовое сопровождение|دعم الحالة السنوي|Dukungan kasus tahunan|Sokongan kes tahunan/i, `${locale}: obsolete annual plans`);
  assert.equal(page.sections.membership.modules.length, 3, `${locale}: support modules`);
  assert.equal(page.sections.experts.people.length, 4, `${locale}: expert profiles`);
  assert.deepEqual(page.sections.experts.people.map((expert) => expert.image), [
    "/images/huang-huiqiang.jpg",
    "/images/cai-qichun.jpg",
    "/images/xie-guoming.png",
    "/images/peng-roujun-clean.webp",
  ], `${locale}: Huang first, followed by Cai, Xie, and Peng`);
  const peng = page.sections.experts.people[3];
  assert.equal(peng.image, "/images/peng-roujun-clean.webp", `${locale}: fourth expert portrait`);
  assert.ok(peng.affiliation && peng.text && peng.role && peng.source.label, `${locale}: sourced expert profile`);
  assert.equal(peng.source.url, "https://www.sysucc.org.cn/node/3765", `${locale}: official profile source`);
  assert.doesNotMatch(peng.text, /CAR-T|lymphoma|淋巴瘤|лимфом|اللمفوما|limfoma/i, `${locale}: do not expand beyond verified clinical specialties`);
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
  for (const section of ["about", "experts", "clinicalTeam"]) {
    assert.doesNotMatch(JSON.stringify(page.sections[section]), /Hong\s*Kong|香港|Гонкон|هونغ كونغ/i, `${locale}/${section}: emphasize coordination, not the company registration location`);
  }
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
const homepage = fs.readFileSync(path.join(root, "app/[locale]/page.tsx"), "utf8");
const expertComponent = fs.readFileSync(path.join(root, "components/patient-sections.tsx"), "utf8");
assert.match(expertComponent, /compact \? people\.slice\(0, 3\) : people/, "Keep homepage to three expert previews");
assert.doesNotMatch(expertComponent, /href=\{person\.source/, "Official expert sources are for verification, not outbound profile links");
assert.doesNotMatch(homepage, /ServicePlans|<Faq|journey-preview|deliverables-layout/, "Homepage should preview, not duplicate full detail pages");
assert.match(homepage, /<CompanySummary locale=\{locale\} compact/, "Homepage company introduction should be compact");
assert.match(homepage, /<ExpertProfiles locale=\{locale\} compact/, "Keep real expert portraits on the homepage");
assert.doesNotMatch(homepage, /ResearchStudy/, "Keep the full study off the homepage");
const researchComponent = fs.readFileSync(path.join(root, "components/research-study.tsx"), "utf8");
assert.match(researchComponent, /pagePath\(locale, "member"\)/, "Use the existing private member portal");
assert.match(researchComponent, /pagePath\(locale, "records"\)/, "Link to the full record checklist");
assert.match(researchComponent, /encodeURIComponent/, "Encode study-specific WhatsApp enquiry");
assert.doesNotMatch(researchComponent, /<form|input.*type="file"|download=/, "No unprotected upload or original protocol download");
const guideRoute = fs.readFileSync(path.join(root, "app/[locale]/guides/[topic]/page.tsx"), "utf8");
assert.match(guideRoute, /generateStaticParams/);
assert.match(guideRoute, /!isOncologyGuideTopic\(topic\).*notFound\(\)/);
assert.match(guideRoute, /publicMetadata\(locale,/);
assert.match(guideRoute, /PatientGuideBody/);
assert.match(guideRoute, /OncologyGuideLinks/);
assert.doesNotMatch(guideRoute, /<form|input.*type="file"/);
assert.match(homepage, /guides\/lymphoma/);
assert.match(homepage, /guides\/immunotherapy/);
assert.match(homepage, /guides\/cell-therapy/);
console.log(`Content checks passed for ${locales.length} languages and ${sectionKeys.length} page sections.`);
