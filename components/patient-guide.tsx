import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { content } from "../lib/content";
import { guidesUpdated, patientGuides, type GuideKey } from "../lib/patient-guides";
import { portalContent } from "../lib/portal-content";
import { breadcrumbData, guideData } from "../lib/seo";
import { localeMeta, pagePath, type Locale } from "../lib/site";
import { StructuredData } from "./structured-data";

export function Breadcrumbs({ locale, section, title }: { locale: Locale; section: string; title: string }) {
  const home = content[locale].nav.home;
  return <>
    <StructuredData data={breadcrumbData(locale, section, home, title)} />
    <nav className="breadcrumbs" aria-label={`${home} / ${title}`}><ol>
      <li><Link href={pagePath(locale)}>{home}</Link></li>
      <li aria-current="page">{title}</li>
    </ol></nav>
  </>;
}

export function PatientGuideBody({ locale, guideKey }: { locale: Locale; guideKey: GuideKey }) {
  const ui = patientGuides[locale];
  const guide = ui.guides[guideKey];
  const date = new Intl.DateTimeFormat(localeMeta[locale].htmlLang, { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${guidesUpdated}T00:00:00Z`));
  return <article className="patient-guide">
    <StructuredData data={guideData(locale, guideKey, guide.title, guide.description, guidesUpdated)} />
    <div className="guide-byline"><span>{ui.publishedBy}</span><span>{ui.updated}: <time dateTime={guidesUpdated}>{date}</time></span></div>
    <div className="guide-sections">{guide.sections.map((item, index) => <section key={item.title}>
      <span className="item-number">{String(index + 1).padStart(2, "0")}</span>
      <div><h2>{item.title}</h2><p>{item.text}</p></div>
    </section>)}</div>
    {guide.questions.length ? <section className="guide-questions"><h2>{ui.questions}</h2><div className="faq-list">
      {guide.questions.map((item) => <details className="faq-item" key={item.title}><summary>{item.title}<ChevronDown size={19} aria-hidden="true" /></summary><p>{item.text}</p></details>)}
    </div></section> : null}
    <p className="service-note">{ui.scope}</p>
    {guide.sources.length ? <section className="guide-sources"><h2>{ui.sources}</h2><ul>{guide.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.title}</a></li>)}</ul></section> : null}
    <nav className="guide-related" aria-label={ui.related}><h2>{ui.related}</h2><ul>{guide.related.map((section) => <li key={section}>
      <Link href={pagePath(locale, section)}>{section === "mdt" || section === "journey" || section === "records" ? ui.guides[section].label : content[locale].nav[section]}<ArrowUpRight size={18} aria-hidden="true" /></Link>
    </li>)}</ul></nav>
    <Link className="button button-dark" href={pagePath(locale, "register")}>{portalContent[locale].register}<ArrowUpRight size={18} aria-hidden="true" /></Link>
  </article>;
}
