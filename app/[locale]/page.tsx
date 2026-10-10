import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, ClipboardList, FileCheck2, MessageCircle, Route, Stethoscope } from "lucide-react";
import { ContactSection, ExpertProfiles, Faq, SectionHeading, ServicePlans, SiteFooter, SiteHeader, TextLink } from "../../components/patient-sections";
import { CompanySummary } from "../../components/company-profile";
import { content } from "../../lib/content";
import { patientContent } from "../../lib/patient-content";
import { brand, contact, isLocale, localeMeta, locales, localePath, siteUrl } from "../../lib/site";

type PageProps = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const ui = patientContent[locale];
  const url = `${siteUrl}${localePath(locale)}`;
  return {
    title: `${brand.name} | ${ui.hero.title}`,
    description: ui.hero.body,
    alternates: {
      canonical: url,
      languages: { ...Object.fromEntries(locales.map((item) => [localeMeta[item].htmlLang, `${siteUrl}${localePath(item)}`])), "x-default": `${siteUrl}/en/` },
    },
    openGraph: { title: `${brand.name} | ${ui.hero.title}`, description: ui.hero.body, url, siteName: brand.name, images: [{ url: `${siteUrl}/images/patient-room.jpg`, width: 1800, height: 1200, alt: ui.roomAlt }], locale: localeMeta[locale].htmlLang, type: "website" },
  };
}

export default async function LocalePage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const ui = patientContent[locale];
  const copy = content[locale];
  const path = localePath(locale);
  const deliverableIcons = [ClipboardList, FileCheck2, Stethoscope, Route];

  return (
    <div className="site-body">
      <SiteHeader locale={locale} />
      <main id="main-content">
        <section className="hero">
          <Image className="hero-bg" src="/images/patient-room.jpg" alt={ui.roomAlt} fill sizes="100vw" priority />
          <div className="hero-overlay" />
          <div className="container hero-content">
            <p className="eyebrow">{ui.hero.eyebrow}</p>
            <h1>{ui.hero.title}</h1><p className="hero-description">{ui.hero.body}</p>
            <div className="cta-row"><Link href={`${path}register/`} className="button button-dark">{ui.start}<ArrowUpRight size={18} aria-hidden="true" /></Link><a href={contact.whatsappUrl} className="button button-light" target="_blank" rel="noopener noreferrer"><MessageCircle size={18} aria-hidden="true" />{ui.whatsapp}</a></div>
          </div>
        </section>
        <div className="trust-strip"><div className="container">{ui.hero.trust.map((item) => <span key={item}><Check size={17} aria-hidden="true" />{item}</span>)}</div></div>

        <section className="section" id="experts"><div className="container">
          <div className="heading-with-link"><SectionHeading {...ui.team} /><TextLink href={`${path}experts/`}>{copy.nav.experts}</TextLink></div>
          <ExpertProfiles locale={locale} compact />
          <div className="clinical-background"><Stethoscope size={22} aria-hidden="true" /><p>{copy.sections.clinicalTeam.cards[0].text}</p></div>
        </div></section>

        <CompanySummary locale={locale} />

        <section className="section light-band" id="oncology"><div className="container">
          <SectionHeading {...ui.focus} />
          <div className="focus-grid">{ui.focus.items.map((item, index) => <article key={item.title}><span className="item-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p><TextLink href={`${path}${index === 0 ? "mdt" : "oncology"}/`}>{ui.more}</TextLink></article>)}</div>
          <Link className="pathway-link" href={`${path}car-t/`}><span>CLDN18.2 CAR-T</span><p>{ui.carT.title}</p><ArrowUpRight size={23} aria-hidden="true" /></Link>
        </div></section>

        <section className="section" id="support"><div className="container deliverables-layout">
          <SectionHeading {...ui.deliverables} />
          <div className="deliverables-list">{ui.deliverables.items.map((item, index) => { const Icon = deliverableIcons[index]; return <article key={item.title}><Icon size={23} aria-hidden="true" /><div><h3>{item.title}</h3><p>{item.text}</p></div></article>; })}</div>
        </div></section>

        <section className="section light-band" id="journey"><div className="container">
          <div className="heading-with-link"><SectionHeading {...ui.journey} /><TextLink href={`${path}journey/`}>{copy.nav.journey}</TextLink></div>
          <ol className="journey-preview">{ui.journey.items.map((item, index) => <li key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></li>)}</ol>
        </div></section>

        <section className="section" id="membership"><div className="container"><SectionHeading {...ui.services} /><ServicePlans locale={locale} /><TextLink href={`${path}membership/`}>{copy.nav.membership}</TextLink></div></section>

        <section className="section light-band" id="questions"><div className="container faq-layout"><SectionHeading {...ui.faq} /><Faq locale={locale} /></div></section>
        <ContactSection locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
