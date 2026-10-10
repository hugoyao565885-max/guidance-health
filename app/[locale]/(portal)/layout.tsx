import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { SiteHeader, SiteFooter } from "../../../components/patient-sections";
import { isLocale } from "../../../lib/site";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Member Portal | H&C Care", robots: { index: false, follow: false } };

export default async function PortalLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <div className="site-body"><SiteHeader locale={locale} /><main id="main-content" className="section portal-main"><div className="container">{children}</div></main><SiteFooter locale={locale} /></div>;
}
