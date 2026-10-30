import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../../../components/patient-sections";
import { StructuredData } from "../../../../components/structured-data";
import { educationArticlePath, educationArticles, findEducationArticle } from "../../../../lib/education";
import { publicMetadata } from "../../../../lib/seo";
import { isLocale, pagePath, siteUrl } from "../../../../lib/site";

type PageProps = { params: Promise<{ locale: string; slug: string }> };
export function generateStaticParams() { return educationArticles.map(({ locale, slug }) => ({ locale, slug })); }
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = findEducationArticle(locale, slug);
  if (!article) return {};
  const metadata = publicMetadata(article.locale, `education/${article.slug}`, article.title, article.description);
  // The original has no translated editions. Do not advertise nonexistent hreflang URLs.
  return { ...metadata, alternates: { canonical: `${siteUrl}${educationArticlePath(article)}` }, openGraph: { ...metadata.openGraph, type: "article", locale: "zh_CN", publishedTime: article.publishedAt } };
}

export default async function EducationArticlePage({ params }: PageProps) {
  const { locale, slug } = await params;
  const article = findEducationArticle(locale, slug);
  if (!isLocale(locale) || !article) notFound();
  const url = `${siteUrl}${educationArticlePath(article)}`;
  const crumbs = [
    { name: "首頁", item: `${siteUrl}${pagePath(locale)}` },
    { name: "科普宣教", item: `${siteUrl}${pagePath(locale, "education")}` },
    { name: article.title, item: url },
  ];
  return <div className="site-body"><SiteHeader locale={locale} section="education" /><main id="main-content">
    <StructuredData data={{ "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.description, url, mainEntityOfPage: url, inLanguage: article.language, datePublished: article.publishedAt, isBasedOn: article.sourceUrl, citation: article.references.map((reference) => reference.url) }} />
    <StructuredData data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: crumbs.map((crumb, index) => ({ "@type": "ListItem", position: index + 1, ...crumb })) }} />
    <section className="page-hero"><div className="container">
      <nav className="breadcrumbs" aria-label="頁面位置"><ol><li><Link href={pagePath(locale)}>首頁</Link></li><li><Link href={pagePath(locale, "education")}>科普宣教</Link></li><li aria-current="page" lang={article.language}>{article.title}</li></ol></nav>
      <p className="eyebrow" lang={article.language}>{article.category}</p><h1 lang={article.language}>{article.title}</h1>
    </div></section>
    <section className="section"><div className="container"><article className="education-article" lang={article.language} dir="ltr">
      <div className="guide-byline"><span>原文发表于 <time dateTime={article.publishedAt}>{article.publishedAt.slice(0, 10)}</time></span><span>授权转载 · 中文原文</span></div>
      <div className="education-prose">{article.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
      <section className="guide-sources" aria-labelledby="article-references"><h2 id="article-references">参考文献与引文来源</h2><ol>{article.references.map((reference) => <li key={reference.url}><cite>{reference.citation}</cite><div className="education-reference-links"><a href={reference.url} target="_blank" rel="noopener noreferrer">DOI · 期刊论文</a>{reference.indexUrl ? <a href={reference.indexUrl} target="_blank" rel="noopener noreferrer">PubMed 文献记录</a> : null}</div></li>)}</ol></section>
      <p className="education-source">文章出处：<a href={article.sourceUrl} target="_blank" rel="noopener noreferrer">公众号原文</a></p>
      <aside className="service-note">本文用于科普教育，不代替医生的诊断、检查或治疗建议。研究结果不等于个体疗效保证，请勿据此自行停药或更改复查安排。</aside>
      <nav className="guide-related" aria-label="相关阅读"><ul><li><Link href={pagePath(locale, "education")}>返回科普宣教</Link></li><li><Link href={pagePath(locale, "records")}>就医资料准备清单</Link></li></ul></nav>
    </article></div></section>
  </main><SiteFooter locale={locale} /></div>;
}
