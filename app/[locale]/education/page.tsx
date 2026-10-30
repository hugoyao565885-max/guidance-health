import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumbs } from "../../../components/patient-guide";
import { SiteFooter, SiteHeader } from "../../../components/patient-sections";
import { educationArticlePath, educationArticles, educationArticleUi, educationUi } from "../../../lib/education";
import { oncologyGuides, oncologyGuideTopics } from "../../../lib/oncology-guides";
import { publicMetadata } from "../../../lib/seo";
import { isLocale, localeMeta, locales, pagePath } from "../../../lib/site";

type PageProps = { params: Promise<{ locale: string }> };
export function generateStaticParams() { return locales.map((locale) => ({ locale })); }
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const ui = educationUi[locale];
  return publicMetadata(locale, "education", ui.title, ui.description);
}

export default async function EducationPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const ui = educationUi[locale];
  const articles = educationArticles.filter((article) => article.locale === locale).sort((a, b) => (b.publishedAt ?? b.addedOn).localeCompare(a.publishedAt ?? a.addedOn));
  return <div className="site-body"><SiteHeader locale={locale} section="education" /><main id="main-content">
    <section className="page-hero"><div className="container"><Breadcrumbs locale={locale} section="education" title={ui.title} /><h1>{ui.title}</h1><p>{ui.description}</p></div></section>
    <section className="section"><div className="container education-library">
      <h2>{ui.articles}</h2>
      <div className="education-list">{articles.map((article) => <article key={article.slug}>
        <div className="education-meta"><span>{article.publishedAt ? educationArticleUi[locale].originalPublished : educationArticleUi[locale].added}: <time dateTime={article.publishedAt ?? article.addedOn}><bdi>{(article.publishedAt ?? article.addedOn).slice(0, 10)}</bdi></time></span><span>{article.category}</span></div>
        <h3 lang={article.language} dir={localeMeta[locale].dir}><Link href={educationArticlePath(article)}>{article.title}</Link></h3>
        <p lang={article.language} dir={localeMeta[locale].dir}>{article.description}</p>
        <Link className="text-link" href={educationArticlePath(article)} hrefLang={article.language}>{ui.read}<ArrowUpRight size={18} aria-hidden="true" /></Link>
      </article>)}</div>
      <nav className="guide-related" aria-label={ui.guides}><h2>{ui.guides}</h2><ul>{oncologyGuideTopics.map((topic) => <li key={topic}><Link href={pagePath(locale, `guides/${topic}`)}>{oncologyGuides[locale][topic].label}<ArrowUpRight size={18} aria-hidden="true" /></Link></li>)}</ul></nav>
    </div></section>
  </main><SiteFooter locale={locale} /></div>;
}
