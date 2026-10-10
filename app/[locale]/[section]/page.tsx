import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { EnquiryForm } from "../../../components/enquiry-form";
import { CompanyProfile } from "../../../components/company-profile";
import { ContactSection, ExpertProfiles, Faq, SectionHeading, ServicePlans, SiteFooter, SiteHeader, TextLink } from "../../../components/patient-sections";
import { content, sectionKeys, type SectionKey } from "../../../lib/content";
import { carTSource, patientContent } from "../../../lib/patient-content";
import { portalContent } from "../../../lib/portal-content";
import { brand, isLocale, localeMeta, locales, localePath, siteUrl } from "../../../lib/site";

type PageProps = { params: Promise<{ locale: string; section: string }> };

function isSection(value: string): value is SectionKey {
  return sectionKeys.includes(value as SectionKey);
}

export function generateStaticParams() {
  return locales.flatMap((locale) => sectionKeys.filter((section) => section !== "register").map((section) => ({ locale, section })));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, section } = await params;
  if (!isLocale(locale) || !isSection(section)) return {};
  const copy = content[locale].sections[section];
  const url = `${siteUrl}${localePath(locale)}${section}/`;
  return {
    title: `${copy.title} | ${brand.name}`, description: copy.body,
    alternates: { canonical: url, languages: { ...Object.fromEntries(locales.map((item) => [localeMeta[item].htmlLang, `${siteUrl}${localePath(item)}${section}/`])), "x-default": `${siteUrl}/en/${section}/` } },
  };
}

function ServiceList({ cards }: { cards: Array<{ title: string; text: string }> }) {
  return <div className="service-list">{cards.map((card, index) => <article key={card.title}><span className="item-number">{String(index + 1).padStart(2, "0")}</span><div><h2>{card.title}</h2><p>{card.text}</p></div></article>)}</div>;
}

export default async function SectionPage({ params }: PageProps) {
  const { locale, section } = await params;
  if (!isLocale(locale) || !isSection(section) || section === "register") notFound();
  const copy = content[locale];
  const ui = patientContent[locale];
  const page = copy.sections[section];
  const path = localePath(locale);
  const isLegal = section === "privacy" || section === "terms";

  return (
    <div className="site-body">
      <SiteHeader locale={locale} section={section} />
      <main id="main-content">
        <section className="page-hero"><div className="container"><p className="eyebrow">{page.eyebrow}</p><h1>{page.title}</h1><p>{page.body}</p></div></section>
        <section className="section"><div className="container">
          {section === "about" ? <CompanyProfile locale={locale} /> : null}
          {section === "membership" ? <><ServicePlans locale={locale} detailed /><div className="membership-modules"><h2>{copy.sections.membership.modulesTitle}</h2><ServiceList cards={copy.sections.membership.modules} /><p className="service-note">{copy.sections.membership.modulesNote}</p></div><div className="faq-layout section-inner"><SectionHeading {...ui.faq} /><Faq locale={locale} /></div></> : null}
          {section === "oncology" ? <><ServiceList cards={copy.sections.oncology.cards} /><div className="source-note"><TextLink href={`${path}car-t/`}>{ui.carT.title}</TextLink></div><p className="service-note">{copy.sections.oncology.note}</p></> : null}
          {section === "mdt" ? <><ServiceList cards={copy.sections.mdt.cards} /><div className="questions-panel"><h2>{copy.sections.mdt.questionsTitle}</h2><ul>{copy.sections.mdt.questions.map((question) => <li key={question}>{question}</li>)}</ul></div><p className="service-note">{copy.sections.mdt.note}</p></> : null}
          {section === "experts" ? <><ExpertProfiles locale={locale} /><div className="section-inner"><SectionHeading {...copy.sections.clinicalTeam} /><ServiceList cards={copy.sections.clinicalTeam.cards} /></div><p className="service-note">{copy.sections.experts.note}</p></> : null}
          {section === "hospitals" ? <div className="hospital-layout"><div><ServiceList cards={copy.sections.hospitals.cards} /><p className="service-note">{copy.sections.hospitals.note}</p></div><figure><Image src="/images/patient-room.jpg" alt={ui.roomAlt} width={1800} height={1200} sizes="(max-width: 900px) 100vw, 42vw" /><figcaption>{ui.roomAlt}</figcaption></figure></div> : null}
          {section === "journey" ? <><ol className="journey-full">{copy.sections.journey.steps.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{step.title}</h2><p>{step.text}</p></div></li>)}</ol><div className="documents section-inner"><h2>{copy.sections.journey.documentsTitle}</h2><ul>{copy.sections.journey.documents.map((document) => <li key={document}>{document}</li>)}</ul><TextLink href={`${path}register/`}>{ui.start}</TextLink></div></> : null}
          {section === "car-t" ? <><ServiceList cards={ui.carT.items} /><div className="source-note"><span>{ui.carT.published}</span><a href={carTSource} target="_blank" rel="noopener noreferrer">{ui.carT.source}</a></div><p className="service-note">{ui.carT.note}</p><TextLink href={`${path}register/`}>{ui.start}</TextLink></> : null}
          {isLegal ? <><ServiceList cards={copy.sections[section].cards} /><p className="service-note">{copy.sections[section].note}</p></> : null}
          {section === "privacy" ? <section className="section-inner"><h2>{portalContent[locale].account}</h2><p className="service-note">{portalContent[locale].dataNotice}</p><p>{portalContent[locale].healthConsent}</p></section> : null}
          {section === "terms" ? <section className="section-inner"><h2>{portalContent[locale].register}</h2><p className="service-note">{portalContent[locale].intro}</p></section> : null}
          {section === "contact" ? <div className="enquiry-layout"><EnquiryForm locale={locale} copy={ui} /><div><SectionHeading {...ui.journey} /><ol className="journey-full">{ui.journey.items.map((item, index) => <li key={item.title}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></li>)}</ol></div></div> : null}
        </div></section>
        {isLegal ? null : <ContactSection locale={locale} />}
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
