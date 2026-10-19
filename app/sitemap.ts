import type { MetadataRoute } from "next";
import { locales, pagePath, siteUrl } from "../lib/site";
import { publicPageUpdates } from "../lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) => Object.entries(publicPageUpdates).map(([section, updated]) => ({
    url: `${siteUrl}${pagePath(locale, section)}`,
    lastModified: updated,
  })));
}
