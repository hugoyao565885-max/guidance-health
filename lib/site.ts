export const siteUrl = "https://guidance-health.vercel.app";

export const contact = {
  name: "Hugo Yao",
  email: "hugoyao565885@gmail.com",
  whatsapp: "+852 9581 3961",
  whatsappUrl: "https://wa.me/85295813961",
};

export const locales = ["en", "zh-hant", "ru", "ar", "id", "ms"] as const;
export type Locale = (typeof locales)[number];

export const localeMeta: Record<
  Locale,
  { label: string; nativeLabel: string; htmlLang: string; dir: "ltr" | "rtl" }
> = {
  en: { label: "English", nativeLabel: "English", htmlLang: "en", dir: "ltr" },
  "zh-hant": { label: "Traditional Chinese", nativeLabel: "繁體中文", htmlLang: "zh-Hant", dir: "ltr" },
  ru: { label: "Russian", nativeLabel: "Русский", htmlLang: "ru", dir: "ltr" },
  ar: { label: "Arabic", nativeLabel: "العربية", htmlLang: "ar", dir: "rtl" },
  id: { label: "Indonesian", nativeLabel: "Indonesia", htmlLang: "id", dir: "ltr" },
  ms: { label: "Malay", nativeLabel: "Melayu", htmlLang: "ms", dir: "ltr" },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localePath(locale: Locale) {
  return `/${locale}/`;
}

export function alternates(path = "") {
  return Object.fromEntries(locales.map((locale) => [localeMeta[locale].htmlLang, `${siteUrl}/${locale}${path}`]));
}
