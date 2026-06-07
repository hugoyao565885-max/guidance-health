import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { contact, isLocale, localeMeta, locales, localePath, siteUrl, type Locale } from "../../lib/site";
import { content } from "../../lib/content";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const sections = ["treatments", "experts", "hospitals", "cases", "journey", "contact"] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  const locale = rawLocale;
  const copy = content[locale];
  const url = `${siteUrl}${localePath(locale)}`;

  return {
    title: copy.seo.title,
    description: copy.seo.description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(locales.map((item) => [localeMeta[item].htmlLang, `${siteUrl}${localePath(item)}`])),
        "x-default": `${siteUrl}/en/`,
      },
    },
    openGraph: {
      title: copy.seo.title,
      description: copy.seo.description,
      url,
      siteName: "Guidance Health",
      images: [{ url: `${siteUrl}/images/clifford-exterior.jpg`, width: 2200, height: 1466 }],
      locale: localeMeta[locale].htmlLang,
      type: "website",
    },
  };
}

function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

function CardGrid({ cards }: { cards: Array<{ title: string; text: string }> }) {
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

function CaseGrid({ cases }: { cases: Array<{ title: string; text: string; image?: string; imageAlt?: string }> }) {
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

function LanguageSwitcher({ locale }: { locale: Locale }) {
  return (
    <div className="language-switcher" aria-label="Language switcher">
      {locales.map((item) => (
        <Link className={item === locale ? "active" : ""} href={localePath(item)} hrefLang={localeMeta[item].htmlLang} key={item}>
          {localeMeta[item].nativeLabel}
        </Link>
      ))}
    </div>
  );
}

export default async function LocalePage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  const locale = rawLocale;
  const meta = localeMeta[locale];
  const copy = content[locale];

  return (
    <div className="site-body" lang={meta.htmlLang} dir={meta.dir}>
        <header className="site-header">
          <div className="container nav-wrap">
            <Link href={localePath(locale)} className="brand" aria-label="Guidance Health home">
              <span>Guidance Health</span>
              <small>{copy.hero.eyebrow}</small>
            </Link>
            <nav className="desktop-nav" aria-label="Primary navigation">
              <Link href={localePath(locale)}>{copy.nav.home}</Link>
              {sections.map((section) => (
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

        <main>
          <section className="hero">
            <Image
              className="hero-bg"
              src="/images/clifford-exterior.jpg"
              alt="Clifford Hospital in Guangzhou"
              fill
              sizes="100vw"
              priority
            />
            <div className="hero-overlay" />
            <div className="container hero-content">
              <div className="hero-copy">
                <p className="eyebrow">{copy.hero.eyebrow}</p>
                <h1>
                  {copy.hero.title}
                  <span>{copy.hero.highlight}</span>
                </h1>
                <p>{copy.hero.body}</p>
                <div className="cta-row">
                  <a href={`mailto:${contact.email}`} className="button button-dark">
                    {copy.hero.primary}
                  </a>
                  <Link href={`${localePath(locale)}journey/`} className="button button-light">
                    {copy.hero.secondary}
                  </Link>
                </div>
              </div>
              <div className="trust-panel">
                <LanguageSwitcher locale={locale} />
                {copy.hero.trust.map((item) => (
                  <article key={item.title}>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section light-band">
            <div className="container">
              <SectionHeader {...copy.sections.focus} />
              <CardGrid cards={copy.sections.focus.cards} />
            </div>
          </section>

          <section className="section" id="treatments">
            <div className="container">
              <SectionHeader {...copy.sections.treatments} />
              <CardGrid cards={copy.sections.treatments.cards} />
              <div className="note-card">{copy.sections.treatments.note}</div>
            </div>
          </section>

          <section className="section split-band" id="experts">
            <div className="container">
              <SectionHeader {...copy.sections.experts} />
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
            </div>
          </section>

          <section className="section" id="hospitals">
            <div className="container hospital-layout">
              <div>
                <SectionHeader {...copy.sections.hospitals} />
                <CardGrid cards={copy.sections.hospitals.cards} />
              </div>
              <div className="hospital-media">
                <Image src="/images/patient-room.jpg" alt="International patient room in Guangzhou" width={900} height={600} />
                <Image src="/images/clifford-campus.jpg" alt="Clifford Hospital campus" width={900} height={600} />
              </div>
            </div>
          </section>

          <section className="section light-band" id="cases">
            <div className="container">
              <SectionHeader {...copy.sections.cases} />
              <CaseGrid cases={copy.sections.cases.cards} />
              <div className="note-card">{copy.sections.cases.note}</div>
            </div>
          </section>

          <section className="section light-band" id="journey">
            <div className="container">
              <SectionHeader {...copy.sections.journey} />
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
                  {copy.sections.journey.documents.map((document) => (
                    <li key={document}>{document}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="section contact-section" id="contact">
            <div className="container contact-grid">
              <div>
                <p className="eyebrow">{copy.sections.contact.eyebrow}</p>
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
          </section>

          <section className="disclaimer">
            <div className="container">
              <h2>{copy.sections.disclaimer.title}</h2>
              <p>{copy.sections.disclaimer.body}</p>
            </div>
          </section>
        </main>
    </div>
  );
}
