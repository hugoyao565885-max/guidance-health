import type { ReactNode } from "react";
import type { Metadata } from "next";
import { isLocale, localeMeta } from "../../lib/site";
import "../globals.css";

export const metadata: Metadata = {
  icons: {
    icon: [{ url: "/brand/favicon.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/brand/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const meta = localeMeta[isLocale(locale) ? locale : "en"];
  return <html lang={meta.htmlLang} dir={meta.dir}><body>{children}</body></html>;
}
