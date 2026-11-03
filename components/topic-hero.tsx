import Image from "next/image";
import type { ReactNode } from "react";
import type { Locale } from "../lib/site";
import { topicImages } from "../lib/topic-images";

const illustrationLabels: Record<Locale, string> = {
  en: "AI illustration",
  "zh-hant": "AI 主題示意圖",
  ru: "Иллюстрация с ИИ",
  ar: "رسم بالذكاء الاصطناعي",
  id: "Ilustrasi AI",
  ms: "Ilustrasi AI",
};

export function TopicHero({ locale, section, children }: { locale: Locale; section: string; children: ReactNode }) {
  const image = topicImages[section];
  return <div className={image ? "container topic-hero-grid" : "container"}>
    <div>{children}</div>
    {image ? <figure className="topic-hero-image">
      <Image src={image.src} alt="" width={image.width} height={image.height} sizes="(max-width: 900px) 100vw, 40vw" priority />
      <figcaption>{illustrationLabels[locale]}</figcaption>
    </figure> : null}
  </div>;
}
