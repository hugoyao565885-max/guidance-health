import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { aboutContent } from "../lib/about-content";
import { content } from "../lib/content";
import { pagePath, type Locale } from "../lib/site";

function CompanyItems({ items }: { items: Array<{ title: string; text: string }> }) {
  return <div className="company-items">{items.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>;
}

export function CompanySummary({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const copy = aboutContent[locale];
  return (
    <section className="section light-band" id="about">
      <div className="container company-overview">
        <div className="section-header"><p className="eyebrow">{copy.eyebrow}</p><h2>{copy.summaryTitle}</h2><Link className="text-link" href={pagePath(locale, "about")}>{copy.link}<ArrowRight size={17} aria-hidden="true" /></Link></div>
        <div className="company-copy">{compact ? <p>{copy.summary}</p> : <><p>{copy.body}</p><p>{copy.summary}</p><p className="company-value">{copy.value}</p></>}</div>
      </div>
    </section>
  );
}

export function CompanyProfile({ locale }: { locale: Locale }) {
  const copy = aboutContent[locale];
  return (
    <div className="company-profile">
      <section className="company-overview"><div><h2>{copy.valueTitle}</h2><p className="company-value">{copy.value}</p></div><p>{copy.approach}</p></section>
      <section className="company-stage"><h2>{copy.challenges.title}</h2><p>{copy.challenges.body}</p><CompanyItems items={copy.challenges.items} /></section>
      <section className="company-stage"><h2>{copy.servicesTitle}</h2><p>{copy.servicesBody}</p><CompanyItems items={content[locale].sections.focus.cards} /></section>
      <section className="company-stage"><h2>{copy.strengths.title}</h2><CompanyItems items={copy.strengths.items} /></section>
      <section className="company-stage company-overview"><div><h2>{copy.research.title}</h2><p>{copy.research.body}</p><Link className="text-link" href={pagePath(locale, "research")}>{content[locale].sections.research.title}<ArrowRight size={17} aria-hidden="true" /></Link></div><div><ol className="company-research-steps">{copy.research.steps.map((step) => <li key={step}>{step}</li>)}</ol><p className="service-note">{copy.research.note}</p></div></section>
      <section className="company-stage"><h2>{copy.team.title}</h2><p>{copy.team.body}</p><CompanyItems items={copy.team.items} /><p className="service-note">{copy.team.note}</p></section>
      <aside className="company-stage company-boundaries"><h2>{copy.boundaries.title}</h2><p>{copy.boundaries.body}</p><p>{copy.boundaries.note}</p></aside>
    </div>
  );
}
