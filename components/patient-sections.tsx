import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Mail, MessageCircle } from "lucide-react";
import { content, type SectionKey } from "../lib/content";
import { patientContent } from "../lib/patient-content";
import { serviceCombinationTotal, formatServiceAmount, servicePrices, serviceExchangeRate, serviceCnyPerUsd } from "../lib/service-pricing";
import { brand, contact, pagePath, social, type Locale } from "../lib/site";
import { patientGuides } from "../lib/patient-guides";
import { educationUi } from "../lib/education";
import { SiteNavigation } from "./site-navigation";

export function SiteHeader({ locale, section }: { locale: Locale; section?: string }) {
  const copy = content[locale];
  const ui = patientContent[locale];
  const sections: SectionKey[] = ["about", "oncology", "experts", "membership", "journey", "contact"];
  const links = sections.map((item) => ({ section: item as string, label: copy.nav[item] }));
  links.splice(4, 0, { section: "education", label: educationUi[locale].nav });
  return <SiteNavigation locale={locale} section={section} labels={ui} links={links} />;
}

export function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return <div className="section-header"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{body}</p></div>;
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="text-link">{children}<ArrowRight size={17} aria-hidden="true" /></Link>;
}

export function ExpertProfiles({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const people = content[locale].sections.experts.people;
  return (
    <div className={`expert-grid${compact ? " compact-experts" : ""}`}>
      {(compact ? people.slice(0, 3) : people).map((person) => (
        <article className="expert-card" key={person.name}>
          <figure className="expert-portrait"><Image className={person.image === "/images/xie-guoming.png" ? "portrait-closeup" : undefined} src={person.image} alt={person.name} width={520} height={560} sizes={compact ? "(max-width: 600px) 102px, (max-width: 1100px) 30vw, 350px" : "(max-width: 600px) 90vw, (max-width: 1100px) 44vw, 160px"} /></figure>
          <div>
            <h3>{person.name}</h3>
            <p className="role">{person.role}</p>
            {!compact ? <>
              {person.affiliation ? <p className="expert-affiliation">{person.affiliation}</p> : null}
              <p>{person.text}</p>
            </> : null}
          </div>
        </article>
      ))}
    </div>
  );
}

function ServiceAmount({ amount, locale }: { amount: number; locale: Locale }) {
  return <span className="service-amount"><span>{servicePrices.currency}</span><bdi>{formatServiceAmount(amount, locale)}</bdi></span>;
}

export function ServicePlans({ locale, detailed = false }: { locale: Locale; detailed?: boolean }) {
  const ui = patientContent[locale];
  const pricing = ui.services.pricing;
  return (
    <>
      <div className="membership-grid">
        {ui.services.plans.map((plan, index) => (
          <article className="membership-card" key={plan.name}>
            <span className="plan-number">0{index + 1}</span><h3>{plan.name}</h3><p>{plan.fit}</p>
            <div className="stage-pricing">
              {plan.stage === "duringStay" ? <dl>{(["fiveSeat", "business"] as const).map((vehicle, vehicleIndex) => <div key={vehicle}><dt>{pricing.vehicles[vehicleIndex]}</dt><dd><ServiceAmount amount={servicePrices.duringStay[vehicle]} locale={locale} /></dd></div>)}</dl> : <ServiceAmount amount={servicePrices[plan.stage]} locale={locale} />}
              <p className="price-unit">{ui.services.exchange.label} · {pricing.unit}</p>
            </div>
            <ul>{plan.items.map((item) => <li key={item}><Check size={16} aria-hidden="true" /><span>{item}</span></li>)}</ul>
            <Link className="text-link" href={`${pagePath(locale, "register")}?service=${index}`}>{ui.services.quote}<ArrowUpRight size={17} aria-hidden="true" /></Link>
          </article>
        ))}
      </div>
      <p className="service-note">
        {ui.services.exchange.note}<br />
        <bdi dir="ltr"><time dateTime={serviceExchangeRate.asOf}>{serviceExchangeRate.asOf}</time> · 1 USD ≈ {serviceCnyPerUsd.toFixed(5)} CNY</bdi>
        {" · "}<a href={serviceExchangeRate.sourceUrl} target="_blank" rel="noopener noreferrer">{ui.services.exchange.source}</a>
      </p>
      <section className="admission-pricing" aria-labelledby={`${locale}-pricing-title`}>
        <h2 id={`${locale}-pricing-title`}>{pricing.title}</h2><p>{pricing.body}</p>
        <table className="pricing-table">
          <caption>{pricing.unit} · {ui.services.exchange.label}</caption>
          <thead><tr><th scope="col">{pricing.combinationLabel}</th>{pricing.vehicles.map((vehicle) => <th scope="col" key={vehicle}>{vehicle}</th>)}</tr></thead>
          <tbody>{[true, false].map((includePreArrival) => <tr key={String(includePreArrival)}><th scope="row">{includePreArrival ? pricing.allStagesLabel : pricing.inChinaAfterLabel}<small>{includePreArrival ? pricing.allStagesNote : pricing.inChinaAfterNote}</small></th>{(["fiveSeat", "business"] as const).map((vehicle) => <td key={vehicle}><ServiceAmount amount={serviceCombinationTotal(vehicle, includePreArrival)} locale={locale} /></td>)}</tr>)}</tbody>
        </table>
      </section>
      <p className="service-note">{ui.services.note}</p>
      {detailed ? <>
        <section className="package-details"><h2>{ui.services.conditionsTitle}</h2><dl className="package-conditions">{ui.services.conditions.map((item) => <div key={item.title}><dt>{item.title}</dt><dd>{item.text}</dd></div>)}</dl></section>
        <section className="package-details"><h2>{ui.services.scopeTitle}</h2><dl className="package-conditions">{[ui.services.included, ui.services.excluded].map((item) => <div key={item.title}><dt>{item.title}</dt><dd>{item.text}</dd></div>)}</dl></section>
      </> : null}
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

function FacebookLink() {
  if (!social.facebookUrl) return null;
  // Facebook brand mark from Simple Icons (CC0); Lucide has no brand icons.
  return <a className="social-profile-link" href={social.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label={`${brand.name} Facebook`}>
    <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" /></svg>
    <bdi>Facebook</bdi><ArrowUpRight size={17} aria-hidden="true" />
  </a>;
}

export function ContactSection({ locale }: { locale: Locale }) {
  const ui = patientContent[locale];
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div><SectionHeading {...ui.contact} /><div className="cta-row"><Link href={pagePath(locale, "register")} className="button button-dark">{ui.start}<ArrowUpRight size={18} aria-hidden="true" /></Link><a href={contact.whatsappUrl} className="button button-light" target="_blank" rel="noopener noreferrer"><MessageCircle size={18} aria-hidden="true" />{ui.whatsapp}</a></div></div>
        <address className="contact-details">
          {contact.emails.map((email, index) => <div key={email}><span>{ui.contact.labels[index]}</span><a href={`mailto:${email}`}><Mail size={17} aria-hidden="true" />{email}</a></div>)}
          <a className="contact-phone" href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} aria-hidden="true" /><bdi>{contact.whatsapp}</bdi></a>
          <FacebookLink />
          {social.instagramUrl ? <a href={social.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label={`${brand.name} Instagram`}>Instagram<ArrowUpRight size={17} aria-hidden="true" /></a> : null}
          <p>{ui.contact.note}</p>
        </address>
      </div>
    </section>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const ui = patientContent[locale];
  const links: SectionKey[] = ["about", "research", "mdt", "hospitals", "journey", "contact", "privacy", "terms"];
  return (
    <>
      <footer className="site-footer"><div className="container footer-grid"><div><Link className="footer-brand" href={pagePath(locale)}><Image src="/brand/hccare-logo.webp" alt={brand.legalName} width={1280} height={405} sizes="(max-width: 400px) 248px, 296px" /></Link><p>{locale === "zh-hant" ? brand.zhLegalName : brand.legalName}</p><p>{copy.sections.disclaimer.body}</p></div><nav aria-label={ui.menu}>{links.map((section) => <Link key={section} href={pagePath(locale, section)}>{copy.nav[section]}</Link>)}<Link href={pagePath(locale, "records")}>{patientGuides[locale].recordsLink}</Link><FacebookLink />{social.instagramUrl ? <a href={social.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label={`${brand.name} Instagram`}>Instagram ↗</a> : null}</nav></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {brand.name}</span><a href={`mailto:${contact.email}`}>{contact.email}</a></div></footer>
      <div className="mobile-contact-bar"><Link href={pagePath(locale, "register")}><ArrowUpRight size={18} aria-hidden="true" />{ui.start}</Link><a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={19} aria-hidden="true" />{ui.whatsapp}</a></div>
    </>
  );
}
