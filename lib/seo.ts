import type { Metadata } from "next";
import { alternates, brand, contact, localeMeta, pagePath, siteUrl, type Locale } from "./site";

// Record substantive page or structured-data changes, not build times.
export const publicPageUpdates = {
  "": "2026-10-29", about: "2026-10-29", membership: "2026-10-26",
  oncology: "2026-10-26", research: "2026-10-26", mdt: "2026-10-19", experts: "2026-10-29",
  hospitals: "2026-10-19", journey: "2026-10-19", contact: "2026-10-19",
  "car-t": "2026-10-19", privacy: "2026-10-19", terms: "2026-10-19", records: "2026-10-19",
};

export function publicMetadata(locale: Locale, section: string, title: string, description: string): Metadata {
  const url = `${siteUrl}${pagePath(locale, section)}`;
  const fullTitle = `${title} | ${brand.name}`;
  return {
    title: fullTitle,
    description,
    verification: section === "" ? { google: "BRWziSFBy8VB_Qp3s4i9pUUsFfW2HyOIm6LXQ7E0Mss" } : undefined,
    alternates: { canonical: url, languages: alternates(section) },
    openGraph: {
      title: fullTitle, description, url, siteName: brand.name, type: "website",
      images: [{ url: `${siteUrl}/brand/hccare-logo.webp`, width: 1280, height: 405, alt: brand.legalName }],
    },
    twitter: { card: "summary", title: fullTitle, description, images: [`${siteUrl}/brand/apple-touch-icon.png`] },
  };
}

export function organizationData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: brand.name,
    legalName: brand.legalName,
    alternateName: brand.zhLegalName,
    url: siteUrl,
    logo: { "@type": "ImageObject", url: `${siteUrl}/brand/hccare-logo.webp`, width: 1280, height: 405 },
    email: contact.email,
    telephone: contact.whatsapp,
    contactPoint: contact.emails.map((email, index) => ({
      "@type": "ContactPoint", email,
      contactType: ["New patient enquiries", "Service coordination", "Existing patient support"][index],
    })),
  };
}

export function breadcrumbData(locale: Locale, section: string, home: string, title: string) {
  return {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: home, item: `${siteUrl}${pagePath(locale)}` },
      { "@type": "ListItem", position: 2, name: title, item: `${siteUrl}${pagePath(locale, section)}` },
    ],
  };
}

export function guideData(locale: Locale, section: string, title: string, description: string, modified: string) {
  return {
    "@context": "https://schema.org", "@type": "WebPage",
    "@id": `${siteUrl}${pagePath(locale, section)}#webpage`,
    url: `${siteUrl}${pagePath(locale, section)}`, name: title, description,
    inLanguage: localeMeta[locale].htmlLang, dateModified: modified,
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}
