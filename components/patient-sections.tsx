import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Mail, MessageCircle } from "lucide-react";
import { content, type SectionKey } from "../lib/content";
import { patientContent } from "../lib/patient-content";
import { brand, contact, localePath, type Locale } from "../lib/site";
import { SiteNavigation } from "./site-navigation";

export function SiteHeader({ locale, section }: { locale: Locale; section?: string }) {
  const copy = content[locale];
  const ui = patientContent[locale];
  const sections: SectionKey[] = ["oncology", "experts", "membership", "journey", "contact"];
  return <SiteNavigation locale={locale} section={section} labels={ui} links={sections.map((item) => ({ section: item, label: copy.nav[item] }))} />;
}

export function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return <div className="section-header"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{body}</p></div>;
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="text-link">{children}<ArrowRight size={17} aria-hidden="true" /></Link>;
}

export function ExpertProfiles({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  return (
    <div className={`expert-grid${compact ? " compact-experts" : ""}`}>
      {content[locale].sections.experts.people.map((person) => (
        <article className="expert-card" key={person.name}>
          <figure className="expert-portrait"><Image className={person.image === "/images/xie-guoming.png" ? "portrait-closeup" : undefined} src={person.image} alt={person.name} width={520} height={560} sizes={compact ? "(max-width: 600px) 102px, (max-width: 1100px) 30vw, 350px" : "(max-width: 600px) 90vw, 350px"} /></figure>
          <div><h3>{person.name}</h3><p className="role">{person.role}</p>{!compact ? <p>{person.text}</p> : null}</div>
        </article>
      ))}
    </div>
  );
}

export function ServicePlans({ locale }: { locale: Locale }) {
  const ui = patientContent[locale];
  return (
    <>
      <div className="membership-grid">
        {ui.services.plans.map((plan, index) => (
          <article className="membership-card" key={plan.name}>
            <span className="plan-number">0{index + 1}</span><h3>{plan.name}</h3><p>{plan.fit}</p>
            <ul>{plan.items.map((item) => <li key={item}><Check size={16} aria-hidden="true" /><span>{item}</span></li>)}</ul>
            <Link className="text-link" href={`${localePath(locale)}register/?service=${index}`}>{ui.services.quote}<ArrowUpRight size={17} aria-hidden="true" /></Link>
          </article>
        ))}
      </div>
      <p className="service-note">{ui.services.note}</p>
    </>
  );
}

export function Faq({ locale }: { locale: Locale }) {
  const ui = patientContent[locale];
  return (
    <div className="faq-list">
      {ui.faq.items.map((item) => (
        <details className="faq-item" key={item.title}>
          <summary>{item.title}<ChevronDown size={19} aria-hidden="true" /></summary><p>{item.text}</p>
        </details>
      ))}
    </div>
  );
}

export function ContactSection({ locale }: { locale: Locale }) {
  const ui = patientContent[locale];
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div><SectionHeading {...ui.contact} /><div className="cta-row"><Link href={`${localePath(locale)}register/`} className="button button-dark">{ui.start}<ArrowUpRight size={18} aria-hidden="true" /></Link><a href={contact.whatsappUrl} className="button button-light" target="_blank" rel="noopener noreferrer"><MessageCircle size={18} aria-hidden="true" />{ui.whatsapp}</a></div></div>
        <address className="contact-details">
          {contact.emails.map((email, index) => <div key={email}><span>{ui.contact.labels[index]}</span><a href={`mailto:${email}`}><Mail size={17} aria-hidden="true" />{email}</a></div>)}
          <a className="contact-phone" href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} aria-hidden="true" /><bdi>{contact.whatsapp}</bdi></a>
          <p>{ui.contact.note}</p>
        </address>
      </div>
    </section>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const ui = patientContent[locale];
  const links: SectionKey[] = ["mdt", "hospitals", "journey", "contact", "privacy", "terms"];
  return (
    <>
      <footer className="site-footer"><div className="container footer-grid"><div><strong>{brand.name}</strong><p>{locale === "zh-hant" ? brand.zhLegalName : brand.legalName}</p><p>{copy.sections.disclaimer.body}</p></div><nav aria-label={ui.menu}>{links.map((section) => <Link key={section} href={`${localePath(locale)}${section}/`}>{copy.nav[section]}</Link>)}</nav></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {brand.name}</span><a href={`mailto:${contact.email}`}>{contact.email}</a></div></footer>
      <div className="mobile-contact-bar"><Link href={`${localePath(locale)}register/`}><ArrowUpRight size={18} aria-hidden="true" />{ui.start}</Link><a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={19} aria-hidden="true" />{ui.whatsapp}</a></div>
    </>
  );
}
