import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { oncologyGuides, oncologyGuideTopics, type OncologyGuideTopic } from "../lib/oncology-guides";
import { patientGuides } from "../lib/patient-guides";
import { pagePath, type Locale } from "../lib/site";

export function OncologyGuideLinks({ locale, current }: { locale: Locale; current?: OncologyGuideTopic }) {
  const title = patientGuides[locale].eyebrow;
  return <nav className="guide-related" aria-label={title}>
    <h2>{title}</h2>
    <ul>{oncologyGuideTopics.filter((topic) => topic !== current).map((topic) => <li key={topic}>
      <Link href={pagePath(locale, `guides/${topic}`)}>{oncologyGuides[locale][topic].label}<ArrowUpRight size={18} aria-hidden="true" /></Link>
    </li>)}</ul>
  </nav>;
}
