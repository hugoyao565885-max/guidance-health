import type { MetadataRoute } from "next";
import { locales, localePath, siteUrl } from "../lib/site";

const sections = ["treatments", "experts", "hospitals", "cases", "journey", "contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return locales.flatMap((locale) => [
    {
      url: `${siteUrl}${localePath(locale)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: locale === "en" ? 1 : 0.9,
    },
    ...sections.map((section) => ({
      url: `${siteUrl}${localePath(locale)}${section}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ]);
}
