import type { ReactNode } from "react";
import { isLocale, localeMeta } from "../../lib/site";
import "../globals.css";

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const meta = localeMeta[isLocale(locale) ? locale : "en"];
  return <html lang={meta.htmlLang} dir={meta.dir}><body>{children}</body></html>;
}
