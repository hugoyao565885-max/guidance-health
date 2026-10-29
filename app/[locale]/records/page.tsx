import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs, PatientGuideBody } from "../../../components/patient-guide";
import { SiteHeader, SiteFooter, ContactSection } from "../../../components/patient-sections";
import { patientGuides } from "../../../lib/patient-guides";
import { publicMetadata } from "../../../lib/seo";
import { isLocale, locales } from "../../../lib/site";

type PageProps = { params: Promise<{ locale: string }> };
export function generateStaticParams() { return locales.map((locale) => ({ locale })); }
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const guide = patientGuides[locale].guides.records;
  return publicMetadata(locale, "records", guide.title, guide.description);
}

export default async function RecordsPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const ui = patientGuides[locale];
  const guide = ui.guides.records;
  return <div className="site-body"><SiteHeader locale={locale} section="records" /><main id="main-content">
    <section className="page-hero"><div className="container"><Breadcrumbs locale={locale} section="records" title={guide.label} /><p className="eyebrow">{ui.eyebrow}</p><h1>{guide.title}</h1><p>{guide.description}</p></div></section>
    <section className="section"><div className="container"><PatientGuideBody locale={locale} section="records" guide={guide} /></div></section>
    <ContactSection locale={locale} />
  </main><SiteFooter locale={locale} /></div>;
}
