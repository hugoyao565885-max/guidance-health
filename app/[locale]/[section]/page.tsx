import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { EnquiryForm } from "../../../components/enquiry-form";
import { CompanyProfile } from "../../../components/company-profile";
import { Breadcrumbs, PatientGuideBody } from "../../../components/patient-guide";
import { ContactSection, ExpertProfiles, Faq, SectionHeading, ServicePlans, SiteFooter, SiteHeader, TextLink } from "../../../components/patient-sections";
import { content, sectionKeys, type SectionKey } from "../../../lib/content";
import { carTSource, patientContent } from "../../../lib/patient-content";
import { portalContent } from "../../../lib/portal-content";
import { patientGuides } from "../../../lib/patient-guides";
import { publicMetadata } from "../../../lib/seo";
import { isLocale, locales, pagePath } from "../../../lib/site";

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
  if (section === "mdt" || section === "journey") {
    const guide = patientGuides[locale].guides[section];
    return publicMetadata(locale, section, guide.title, guide.description);
  }
  if (section === "car-t") {
    const page = patientContent[locale].carT;
    return publicMetadata(locale, section, page.title, page.body);
  }
  const copy = content[locale].sections[section];
  return publicMetadata(locale, section, copy.title, copy.body);
}

function ServiceList({ cards }: { cards: Array<{ title: string; text: string }> }) {
  return <div className="service-list">{cards.map((card, index) => <article key={card.title}><span className="item-number">{String(index + 1).padStart(2, "0")}</span><div><h2>{card.title}</h2><p>{card.text}</p></div></article>)}</div>;
}

export default async function SectionPage({ params }: PageProps) {
  const { locale, section } = await params;
  if (!isLocale(locale) || !isSection(section) || section === "register") notFound();
  const copy = content[locale];
  const ui = patientContent[locale];
  const page = section === "car-t" ? ui.carT : copy.sections[section];
  const guide = section === "mdt" || section === "journey" ? patientGuides[locale].guides[section] : null;
  const isLegal = section === "privacy" || section === "terms";

  return (
    <div className="site-body">
      <SiteHeader locale={locale} section={section} />
      <main id="main-content">
        <section className="page-hero"><div className="container"><Breadcrumbs locale={locale} section={section} title={guide?.label ?? copy.nav[section]} /><p className="eyebrow">{guide ? patientGuides[locale].eyebrow : page.eyebrow}</p><h1>{guide?.title ?? page.title}</h1><p>{guide?.description ?? page.body}</p></div></section>
        <section className="section"><div className="container">
          {section === "about" ? <CompanyProfile locale={locale} /> : null}
          {section === "membership" ? <><ServicePlans locale={locale} detailed /><div className="membership-modules"><h2>{copy.sections.membership.modulesTitle}</h2><ServiceList cards={copy.sections.membership.modules} /><p className="service-note">{copy.sections.membership.modulesNote}</p></div><div className="faq-layout section-inner"><SectionHeading {...ui.faq} /><Faq locale={locale} /></div></> : null}
          {section === "oncology" ? <><ServiceList cards={copy.sections.oncology.cards} /><div className="source-note"><TextLink href={pagePath(locale, "car-t")}>{ui.carT.title}</TextLink><TextLink href={pagePath(locale, "mdt")}>{patientGuides[locale].guides.mdt.label}</TextLink></div><p className="service-note">{copy.sections.oncology.note}</p></> : null}
          {section === "mdt" || section === "journey" ? <PatientGuideBody locale={locale} guideKey={section} /> : null}
          {section === "experts" ? <><ExpertProfiles locale={locale} /><div className="section-inner"><SectionHeading {...copy.sections.clinicalTeam} /><ServiceList cards={copy.sections.clinicalTeam.cards} /></div><p className="service-note">{copy.sections.experts.note}</p></> : null}
          {section === "hospitals" ? <div className="hospital-layout"><div><ServiceList cards={copy.sections.hospitals.cards} /><p className="service-note">{copy.sections.hospitals.note}</p></div><figure><Image src="/images/patient-room.jpg" alt={ui.roomAlt} width={1800} height={1200} sizes="(max-width: 900px) 100vw, 42vw" /><figcaption>{ui.roomAlt}</figcaption></figure></div> : null}
          {section === "car-t" ? <><ServiceList cards={ui.carT.items} /><div className="source-note"><span>{ui.carT.published}</span><a href={carTSource} target="_blank" rel="noopener noreferrer">{ui.carT.source}</a></div><p className="service-note">{ui.carT.note}</p><div className="cta-row"><TextLink href={pagePath(locale, "records")}>{patientGuides[locale].recordsLink}</TextLink><TextLink href={pagePath(locale, "register")}>{ui.start}</TextLink></div></> : null}
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
