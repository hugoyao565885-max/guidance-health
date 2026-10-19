import type { MetadataRoute } from "next";
import { locales, siteUrl } from "../lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Login/registration pages remain crawlable so their noindex can be read.
      disallow: ["/api/member/", "/auth/", ...locales.flatMap((locale) => ["member", "admin", "mfa"].flatMap((page) => [`/${locale}/${page}$`, `/${locale}/${page}/`]))],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
