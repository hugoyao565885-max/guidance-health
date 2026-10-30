import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../../../components/patient-sections";
import { StructuredData } from "../../../../components/structured-data";
import { educationArticlePath, educationArticles, educationArticleUi, educationUi, findEducationArticle } from "../../../../lib/education";
import { content } from "../../../../lib/content";
import { patientGuides } from "../../../../lib/patient-guides";
import { publicMetadata } from "../../../../lib/seo";
import { isLocale, localeMeta, pagePath, siteUrl } from "../../../../lib/site";

type PageProps = { params: Promise<{ locale: string; slug: string }> };
const openGraphLocales = { en: "en_GB", "zh-hant": "zh_TW", ru: "ru_RU", ar: "ar_SA", id: "id_ID", ms: "ms_MY" };
export function generateStaticParams() { return educationArticles.map(({ locale, slug }) => ({ locale, slug })); }
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = findEducationArticle(locale, slug);
  if (!article) return {};
  const metadata = publicMetadata(article.locale, `education/${article.slug}`, article.title, article.description);
  return { ...metadata, openGraph: { ...metadata.openGraph, type: "article", locale: openGraphLocales[article.locale], publishedTime: article.publishedAt ?? article.addedOn } };
}

export default async function EducationArticlePage({ params }: PageProps) {
  const { locale, slug } = await params;
  const article = findEducationArticle(locale, slug);
  if (!isLocale(locale) || !article) notFound();
  const ui = educationArticleUi[locale];
  const home = content[locale].nav.home;
  const library = educationUi[locale].title;
  const guideUi = patientGuides[locale];
  const url = `${siteUrl}${educationArticlePath(article)}`;
  const displayDate = article.publishedAt ?? article.addedOn;
  const crumbs = [
    { name: home, item: `${siteUrl}${pagePath(locale)}` },
    { name: library, item: `${siteUrl}${pagePath(locale, "education")}` },
    { name: article.title, item: url },
  ];
  return <div className="site-body"><SiteHeader locale={locale} section={`education/${article.slug}`} /><main id="main-content">
    <StructuredData data={{ "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.description, url, mainEntityOfPage: url, inLanguage: article.language, datePublished: displayDate, isBasedOn: article.sourceUrl, citation: article.references.map((reference) => reference.url) }} />
    <StructuredData data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: crumbs.map((crumb, index) => ({ "@type": "ListItem", position: index + 1, ...crumb })) }} />
    <section className="page-hero"><div className="container">
      <nav className="breadcrumbs" aria-label={`${home} / ${library}`}><ol><li><Link href={pagePath(locale)}>{home}</Link></li><li><Link href={pagePath(locale, "education")}>{library}</Link></li><li aria-current="page" lang={article.language}>{article.title}</li></ol></nav>
      <p className="eyebrow" lang={article.language}>{article.category}</p><h1 lang={article.language}>{article.title}</h1>
    </div></section>
    <section className="section"><div className="container"><article className="education-article" lang={article.language} dir={localeMeta[locale].dir}>
      <div className="guide-byline"><span>{article.publishedAt ? ui.originalPublished : ui.added}: <time dateTime={displayDate}><bdi>{displayDate.slice(0, 10)}</bdi></time></span><span>{ui.edition}</span></div>
      <div className="education-prose">{article.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
      <section className="guide-sources" aria-labelledby="article-references"><h2 id="article-references">{ui.sources}</h2><ol>{article.references.map((reference) => <li key={reference.url}><cite lang="en" dir="ltr">{reference.citation}</cite><div className="education-reference-links"><a href={reference.url} target="_blank" rel="noopener noreferrer">{ui.paper}</a>{reference.indexUrl ? <a href={reference.indexUrl} target="_blank" rel="noopener noreferrer">{ui.pubmed}</a> : null}</div></li>)}</ol></section>
      <p className="education-source">{ui.sourceLabel}: <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer">{ui.sourceLink}</a></p>
      <aside className="service-note">{ui.disclaimer}</aside>
      <nav className="guide-related" aria-label={guideUi.related}><ul><li><Link href={pagePath(locale, "education")}>{ui.back}</Link></li><li><Link href={pagePath(locale, "records")}>{guideUi.recordsLink}</Link></li></ul></nav>
    </article></div></section>
  </main><SiteFooter locale={locale} /></div>;
}
