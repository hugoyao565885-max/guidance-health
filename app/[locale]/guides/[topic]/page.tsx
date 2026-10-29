import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs, PatientGuideBody } from "../../../../components/patient-guide";
import { OncologyGuideLinks } from "../../../../components/oncology-guide-links";
import { ContactSection, SiteFooter, SiteHeader } from "../../../../components/patient-sections";
import { isOncologyGuideTopic, oncologyGuides, oncologyGuidesUpdated, oncologyGuideTopics } from "../../../../lib/oncology-guides";
import { patientGuides } from "../../../../lib/patient-guides";
import { publicMetadata } from "../../../../lib/seo";
import { isLocale, locales } from "../../../../lib/site";

type PageProps = { params: Promise<{ locale: string; topic: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => oncologyGuideTopics.map((topic) => ({ locale, topic })));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, topic } = await params;
  if (!isLocale(locale) || !isOncologyGuideTopic(topic)) return {};
  const guide = oncologyGuides[locale][topic];
  return publicMetadata(locale, `guides/${topic}`, guide.title, guide.description);
}

export default async function OncologyGuidePage({ params }: PageProps) {
  const { locale, topic } = await params;
  if (!isLocale(locale) || !isOncologyGuideTopic(topic)) notFound();
  const guide = oncologyGuides[locale][topic];
  const section = `guides/${topic}`;
  return <div className="site-body">
    <SiteHeader locale={locale} section={section} />
    <main id="main-content">
      <section className="page-hero"><div className="container">
        <Breadcrumbs locale={locale} section={section} title={guide.label} />
        <p className="eyebrow">{patientGuides[locale].eyebrow}</p>
        <h1>{guide.title}</h1><p>{guide.description}</p>
      </div></section>
      <section className="section"><div className="container">
        <PatientGuideBody locale={locale} section={section} guide={guide} updated={oncologyGuidesUpdated} />
        <OncologyGuideLinks locale={locale} current={topic} />
      </div></section>
      <ContactSection locale={locale} />
    </main>
    <SiteFooter locale={locale} />
  </div>;
}
