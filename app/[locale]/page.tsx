import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { ContactSection, ExpertProfiles, SectionHeading, SiteFooter, SiteHeader, TextLink } from "../../components/patient-sections";
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

        <CompanySummary locale={locale} compact />

        <section className="section light-band" id="oncology"><div className="container">
          <SectionHeading {...ui.focus} />
          <div className="focus-grid">{ui.focus.items.map((item, index) => <article key={item.title}><span className="item-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p><TextLink href={`${path}${index === 0 ? "mdt" : "oncology"}/`}>{ui.more}</TextLink></article>)}</div>
        </div></section>

        <section className="section" id="experts"><div className="container">
          <div className="heading-with-link"><SectionHeading {...ui.team} /><TextLink href={`${path}experts/`}>{copy.nav.experts}</TextLink></div>
          <ExpertProfiles locale={locale} compact />
        </div></section>

        <ContactSection locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
