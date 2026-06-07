import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { contact, isLocale, localeMeta, locales, localePath, siteUrl, type Locale } from "../../../lib/site";
import { content } from "../../../lib/content";

const sectionKeys = ["treatments", "experts", "hospitals", "cases", "journey", "contact"] as const;
type SectionKey = (typeof sectionKeys)[number];

type PageProps = {
  params: Promise<{ locale: string; section: string }>;
};

function isSection(value: string): value is SectionKey {
  return sectionKeys.includes(value as SectionKey);
}

export function generateStaticParams() {
  return locales.flatMap((locale) => sectionKeys.map((section) => ({ locale, section })));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale, section: rawSection } = await params;
  if (!isLocale(rawLocale) || !isSection(rawSection)) return {};
  const locale = rawLocale;
  const copy = content[locale];
  const section = copy.sections[rawSection];
  const url = `${siteUrl}${localePath(locale)}${rawSection}/`;

  return {
    title: `${section.title} | Guidance Health`,
    description: section.body,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(locales.map((item) => [localeMeta[item].htmlLang, `${siteUrl}${localePath(item)}${rawSection}/`])),
        "x-default": `${siteUrl}/en/${rawSection}/`,
      },
    },
  };
}

function Header({ locale }: { locale: Locale }) {
  const copy = content[locale];
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href={localePath(locale)} className="brand">
          <span>Guidance Health</span>
          <small>{copy.hero.eyebrow}</small>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href={localePath(locale)}>{copy.nav.home}</Link>
          {sectionKeys.map((section) => (
            <Link href={`${localePath(locale)}${section}/`} key={section}>
              {copy.nav[section]}
            </Link>
          ))}
        </nav>
        <Link className="button button-dark small" href={`${localePath(locale)}contact/`}>
          {copy.nav.contact}
        </Link>
      </div>
    </header>
  );
}

function SectionHero({ locale, section }: { locale: Locale; section: SectionKey }) {
  const copy = content[locale].sections[section];
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p>{copy.body}</p>
      </div>
    </section>
  );
}

function Cards({ cards }: { cards: Array<{ title: string; text: string }> }) {
  return (
    <div className="card-grid">
      {cards.map((card) => (
        <article className="info-card" key={card.title}>
          <h3>{card.title}</h3>
          <p>{card.text}</p>
        </article>
      ))}
    </div>
  );
}

function CaseCards({ cases }: { cases: Array<{ title: string; text: string; image?: string; imageAlt?: string }> }) {
  return (
    <div className="case-grid">
      {cases.map((item) => (
        <article className="case-card" key={item.title}>
          {item.image ? (
            <Image src={item.image} alt={item.imageAlt ?? item.title} width={760} height={460} />
          ) : (
            <div className="case-image-placeholder">
              <span>Case image pending</span>
            </div>
          )}
          <div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default async function SectionPage({ params }: PageProps) {
  const { locale: rawLocale, section: rawSection } = await params;
  if (!isLocale(rawLocale) || !isSection(rawSection)) notFound();

  const locale = rawLocale;
  const meta = localeMeta[locale];
  const copy = content[locale];

  return (
    <div className="site-body" lang={meta.htmlLang} dir={meta.dir}>
        <Header locale={locale} />
        <main>
          <SectionHero locale={locale} section={rawSection} />
          <section className="section">
            <div className="container">
              {rawSection === "treatments" ? (
                <>
                  <Cards cards={copy.sections.treatments.cards} />
                  <div className="note-card">{copy.sections.treatments.note}</div>
                </>
              ) : null}

              {rawSection === "experts" ? (
                <div className="expert-grid">
                  {copy.sections.experts.people.map((person) => (
                    <article className="expert-card" key={person.name}>
                      <Image src={person.image} alt={person.name} width={520} height={560} />
                      <div>
                        <h3>{person.name}</h3>
                        <p className="role">{person.role}</p>
                        <p>{person.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              ) : null}

              {rawSection === "hospitals" ? (
                <div className="hospital-layout">
                  <Cards cards={copy.sections.hospitals.cards} />
                  <div className="hospital-media">
                    <Image src="/images/patient-room.jpg" alt="International patient room in Guangzhou" width={900} height={600} />
                    <Image src="/images/clifford-campus.jpg" alt="Clifford Hospital campus" width={900} height={600} />
                  </div>
                </div>
              ) : null}

              {rawSection === "cases" ? (
                <>
                  <CaseCards cases={copy.sections.cases.cards} />
                  <div className="note-card">{copy.sections.cases.note}</div>
                </>
              ) : null}

              {rawSection === "journey" ? (
                <>
                  <div className="steps">
                    {copy.sections.journey.steps.map((step, index) => (
                      <article className="step-card" key={step.title}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                      </article>
                    ))}
                  </div>
                  <div className="documents">
                    <h3>{copy.sections.journey.documentsTitle}</h3>
                    <ul>
                      {copy.sections.journey.documents.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : null}

              {rawSection === "contact" ? (
                <div className="contact-grid section-contact-grid">
                  <div>
                    <h2>{copy.sections.contact.title}</h2>
                    <p>{copy.sections.contact.body}</p>
                    <div className="cta-row">
                      <a href={`mailto:${contact.email}`} className="button button-dark">
                        {copy.sections.contact.email}
                      </a>
                      <a href={contact.whatsappUrl} className="button button-light">
                        {copy.sections.contact.whatsapp}
                      </a>
                    </div>
                  </div>
                  <aside className="contact-card">
                    <strong>{contact.name}</strong>
                    <span>{contact.email}</span>
                    <span>{contact.whatsapp}</span>
                    <p>{copy.sections.contact.privacy}</p>
                  </aside>
                </div>
              ) : null}
            </div>
          </section>
        </main>
    </div>
  );
}
