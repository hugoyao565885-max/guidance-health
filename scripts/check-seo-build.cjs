const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const output = path.join(root, ".next/server/app");
const locales = ["en", "zh-hant", "ru", "ar", "id", "ms"];
const topics = ["lymphoma", "immunotherapy", "cell-therapy"];
const origin = "https://hccareadvisory.com";
const sitemap = fs.readFileSync(path.join(output, "sitemap.xml.body"), "utf8");

for (const locale of locales) {
  const titles = new Set();
  const home = fs.readFileSync(path.join(output, `${locale}.html`), "utf8");
  const oncology = fs.readFileSync(path.join(output, `${locale}/oncology.html`), "utf8");
  for (const topic of topics) {
    const route = `/${locale}/guides/${topic}`;
    const html = fs.readFileSync(path.join(output, `${route}.html`), "utf8");
    const head = html.split("</head>")[0];
    assert.ok(head.includes(`<link rel="canonical" href="${origin}${route}"`), `${route}: self canonical`);
    assert.doesNotMatch(head, /noindex/i, `${route}: public guide must be indexable`);
    assert.doesNotMatch(head, /name="keywords"/i, "No ineffective keyword meta tag");
    assert.ok(head.includes('name="description" content="'), `${route}: description`);
    const title = head.match(/<title>(.*?)<\/title>/)?.[1];
    assert.ok(title && !titles.has(title), `${route}: unique title`);
    titles.add(title);
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${route}: one visible H1`);
    for (const alternate of locales) {
      const lang = alternate === "zh-hant" ? "zh-Hant" : alternate;
      assert.ok(head.includes(`hrefLang="${lang}" href="${origin}/${alternate}/guides/${topic}"`), `${route}: reciprocal ${lang}`);
    }
    assert.ok(head.includes(`hrefLang="x-default" href="${origin}/en/guides/${topic}"`));
    assert.ok(sitemap.includes(`<loc>${origin}${route}</loc>`), `${route}: sitemap`);
    assert.ok(home.includes(`href="${route}"`) && oncology.includes(`href="${route}"`), `${route}: crawlable entry links`);
    assert.ok(html.includes(`href="/${locale}/register"`) && html.includes(`href="/${locale}/records"`), `${route}: next steps`);
    assert.ok(html.includes(`dir="${locale === "ar" ? "rtl" : "ltr"}"`));
    const structured = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
    const page = structured.find((item) => item["@type"] === "WebPage");
    assert.ok(page, `${route}: WebPage data`);
    assert.equal(page.url, `${origin}${route}`);
    assert.equal(page.dateModified, "2026-10-29");
    assert.ok(structured.some((item) => item["@type"] === "BreadcrumbList"));
    assert.ok(!structured.some((item) => item["@type"] === "Product" || item["@type"] === "MedicalClinic"));
    if (topic === "cell-therapy") for (const term of ["CAR-T", "NK", "TCR-T", "TIL"]) assert.ok(html.includes(term));
  }
  // The shared renderer must preserve the existing guide identity and update dates.
  for (const section of ["mdt", "journey", "records"]) {
    const html = fs.readFileSync(path.join(output, `${locale}/${section}.html`), "utf8");
    assert.ok(html.includes(`dateTime="2026-10-19"`));
    assert.ok(html.includes(`${origin}/${locale}/${section}#webpage`));
  }
}
assert.doesNotMatch(sitemap, /<loc>[^<]*\/(?:member|admin|mfa|login|register|reset-password|forgot-password)(?:\/|<)/);
for (const locale of locales) {
  const html = fs.readFileSync(path.join(output, `${locale}/education.html`), "utf8");
  assert.ok(html.includes(`rel="canonical" href="${origin}/${locale}/education"`));
  assert.ok(html.includes('href="/zh-hant/education/urine-rna-bladder-cancer"'));
  assert.ok(sitemap.includes(`<loc>${origin}/${locale}/education</loc>`));
  assert.ok(fs.readFileSync(path.join(output, `${locale}.html`), "utf8").includes(`href="/${locale}/education"`));
}
const articlePath = "/zh-hant/education/urine-rna-bladder-cancer";
const articleHtml = fs.readFileSync(path.join(output, `${articlePath}.html`), "utf8");
const articleHead = articleHtml.split("</head>")[0];
assert.ok(articleHead.includes(`rel="canonical" href="${origin}${articlePath}"`));
assert.doesNotMatch(articleHead, /noindex|hrefLang=/);
const articleBody = articleHtml.match(/<article class="education-article"[\s\S]*?<\/article>/)?.[0];
assert.ok(articleBody && articleBody.includes('lang="zh-Hans"'));
assert.doesNotMatch(articleBody, /<img|<iframe|cgi-bin|token=|祈福/);
assert.equal((articleBody.match(/<div class="education-prose">([\s\S]*?)<\/div>/)?.[1].match(/<p>/g) || []).length, 9);
assert.ok(articleBody.includes("10.1038/s41591-026-04673-3") && articleBody.includes("42827132"));
assert.ok(articleBody.includes('dateTime="2026-10-29T11:46:00+08:00"'));
assert.ok(sitemap.includes(`<loc>${origin}${articlePath}</loc>`));
const articleData = [...articleHtml.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map((m) => JSON.parse(m[1])).find((item) => item["@type"] === "Article");
assert.equal(articleData.inLanguage, "zh-Hans");
assert.equal(articleData.isBasedOn, "https://mp.weixin.qq.com/s/qqtew6HP2sgvsMGPybNneQ");
assert.ok(!articleData.author && !articleData.reviewedBy, "Do not invent authors or medical reviewers");
console.log("Education checks passed: six index pages, one Chinese original, source attribution, references, text-only article and no fictitious translations.");
console.log("Built SEO checks passed: 18 new multilingual guides, reciprocal alternates, internal links, structured data, sitemap and existing-guide regression checks.");
