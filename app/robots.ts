import type { MetadataRoute } from "next";
import { locales, siteUrl } from "../lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/member/", "/auth/", ...locales.flatMap((locale) => ["register", "login", "member", "admin", "mfa", "forgot-password", "reset-password"].map((page) => `/${locale}/${page}/`))],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
