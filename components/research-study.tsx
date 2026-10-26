import Link from "next/link";
import { ArrowUpRight, ChevronDown, ClipboardList, Info } from "lucide-react";
import { lungStudy, researchContent, researchUpdated } from "../lib/research-content";
import { contact, localeMeta, pagePath, type Locale } from "../lib/site";
import { guideData } from "../lib/seo";
import { StructuredData } from "./structured-data";

export function ResearchStudy({ locale }: { locale: Locale }) {
  const copy = researchContent[locale];
  const date = new Intl.DateTimeFormat(localeMeta[locale].htmlLang, { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${researchUpdated}T00:00:00Z`));
  const enquiryUrl = `${contact.whatsappUrl}?text=${encodeURIComponent(`${copy.enquire}: ${lungStudy.protocol}`)}`;

  return <article className="research-study">
    <StructuredData data={guideData(locale, "research", copy.title, copy.body, researchUpdated)} />
    <p className="guide-byline">{copy.updated}: <time dateTime={researchUpdated}>{date}</time></p>
    <aside className="research-status"><Info size={22} aria-hidden="true" /><div><h2>{copy.statusTitle}</h2><p>{copy.status}</p></div></aside>
    <section className="research-overview" aria-labelledby="study-title">
      <p className="eyebrow"><bdi>{lungStudy.protocol}</bdi></p><h2 id="study-title">{copy.studyTitle}</h2>
      <dl className="research-facts">{copy.facts.map((fact) => <div key={fact.title}><dt>{fact.title}</dt><dd>{fact.text}</dd></div>)}</dl>
      <p>{copy.overview}</p>
      <div className="cta-row"><a className="button button-dark" href={enquiryUrl} target="_blank" rel="noopener noreferrer">{copy.enquire}<ArrowUpRight size={18} aria-hidden="true" /></a><Link className="text-link" href={pagePath(locale, "member")}>{copy.submit}<ArrowUpRight size={18} aria-hidden="true" /></Link></div>
    </section>
    <section className="research-section"><h2>{copy.armsTitle}</h2><div className="research-arms">{copy.arms.map((arm) => <div key={arm.title}><h3>{arm.title}</h3><p>{arm.text}</p></div>)}</div><p className="service-note">{copy.allocation}</p></section>
    <div className="research-columns">
      <section className="research-section"><h2>{copy.eligibilityTitle}</h2><ul>{copy.eligibility.map((item) => <li key={item}>{item}</li>)}</ul><p className="service-note">{copy.eligibilityNote}</p></section>
      <section className="research-section"><h2><ClipboardList size={24} aria-hidden="true" />{copy.recordsTitle}</h2><ul>{copy.records.map((item) => <li key={item}>{item}</li>)}</ul><p>{copy.recordsNote}</p><Link className="text-link" href={pagePath(locale, "records")}>{copy.checklist}<ArrowUpRight size={18} aria-hidden="true" /></Link></section>
    </div>
    <section className="research-section"><h2>{copy.processTitle}</h2><ol className="research-steps">{copy.steps.map((step) => <li key={step.title}><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></section>
    <section className="research-section"><h2>{copy.questionsTitle}</h2><div className="faq-list">{copy.questions.map((item) => <details className="faq-item" key={item.title}><summary>{item.title}<ChevronDown size={19} aria-hidden="true" /></summary><p>{item.text}</p></details>)}</div></section>
    <p className="service-note">{copy.boundary}</p>
    <div className="source-note"><a href={lungStudy.sourceUrl} target="_blank" rel="noopener noreferrer">{copy.source}</a><time dateTime={lungStudy.announcementDate}>{lungStudy.announcementDate}</time></div>
  </article>;
}
