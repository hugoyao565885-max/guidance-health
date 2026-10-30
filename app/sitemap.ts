import type { MetadataRoute } from "next";
import { locales, pagePath, siteUrl } from "../lib/site";
import { publicPageUpdates } from "../lib/seo";
import { educationArticles, educationArticlePath } from "../lib/education";

export default function sitemap(): MetadataRoute.Sitemap {
  return [...locales.flatMap((locale) => Object.entries(publicPageUpdates).map(([section, updated]) => ({
    url: `${siteUrl}${pagePath(locale, section)}`,
    lastModified: updated,
  }))), ...educationArticles.map((article) => ({ url: `${siteUrl}${educationArticlePath(article)}`, lastModified: article.addedOn }))];
}
