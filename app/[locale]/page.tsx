import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { brand, contact, isLocale, localeMeta, locales, localePath, siteUrl, type Locale } from "../../lib/site";
import { content, footerSectionKeys, mainSectionKeys } from "../../lib/content";

type PageProps = {
  params: Promise<{ locale: string }>;
};

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
      siteName: brand.name,
      images: [{ url: `${siteUrl}/images/guangzhou-hospital-exterior.jpg`, width: 2200, height: 1466 }],
      locale: localeMeta[locale].htmlLang,
      type: "website",
    },
  };
}

function Header({ locale }: { locale: Locale }) {
  const copy = content[locale];

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href={localePath(locale)} className="brand" aria-label={`${brand.name} home`}>
          <span>{brand.name}</span>
          <small>{copy.hero.eyebrow}</small>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href={localePath(locale)}>{copy.nav.home}</Link>
          {mainSectionKeys.map((section) => (
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

function MembershipPlans({ plans }: { plans: Array<{ name: string; fit: string; items: string[] }> }) {
  return (
    <div className="membership-grid">
      {plans.map((plan) => (
        <article className="membership-card" key={plan.name}>
          <span>{plan.name}</span>
          <h3>{plan.fit}</h3>
          <ul>
            {plan.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function MembershipModules({ title, modules, note }: { title: string; modules: Array<{ title: string; text: string }>; note: string }) {
  return (
    <div className="membership-modules">
      <h3>{title}</h3>
      <div className="module-grid">
        {modules.map((item) => (
          <article className="module-card" key={item.title}>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
      <div className="note-card">{note}</div>
    </div>
  );
}

function ExpertGrid({ people }: { people: Array<{ name: string; role: string; text: string; image: string }> }) {
  return (
    <div className="expert-grid">
      {people.map((person) => (
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
  );
}

function Questions({ title, questions }: { title: string; questions: string[] }) {
  return (
    <div className="questions-panel">
      <h3>{title}</h3>
      <ul>
        {questions.map((question) => (
          <li key={question}>{question}</li>
        ))}
      </ul>
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

function Footer({ locale }: { locale: Locale }) {
  const copy = content[locale];

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <strong>{brand.name}</strong>
          <p>{brand.legalName}</p>
          <p>{copy.sections.disclaimer.body}</p>
        </div>
        <nav aria-label="Footer navigation">
          {footerSectionKeys.map((section) => (
            <Link href={`${localePath(locale)}${section}/`} key={section}>
              {copy.nav[section]}
            </Link>
          ))}
          <Link href={`${localePath(locale)}contact/`}>{copy.nav.contact}</Link>
        </nav>
      </div>
    </footer>
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
      <Header locale={locale} />

      <main>
        <section className="hero">
          <Image className="hero-bg" src="/images/guangzhou-hospital-exterior.jpg" alt="Hospital campus in Guangzhou" fill sizes="100vw" priority />
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
                <Link href={`${localePath(locale)}contact/`} className="button button-dark">
                  {copy.hero.primary}
                </Link>
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
            <SectionHeader {...copy.sections.pain} />
            <CardGrid cards={copy.sections.pain.cards} />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeader {...copy.sections.focus} />
            <CardGrid cards={copy.sections.focus.cards} />
          </div>
        </section>

        <section className="section" id="membership">
          <div className="container">
            <SectionHeader {...copy.sections.membership} />
            <MembershipPlans plans={copy.sections.membership.plans} />
            <MembershipModules
              title={copy.sections.membership.modulesTitle}
              modules={copy.sections.membership.modules}
              note={copy.sections.membership.modulesNote}
            />
            <div className="note-card">{copy.sections.membership.note}</div>
          </div>
        </section>

        <section className="section split-band" id="oncology">
          <div className="container">
            <SectionHeader {...copy.sections.oncology} />
            <CardGrid cards={copy.sections.oncology.cards} />
            <div className="note-card">{copy.sections.oncology.note}</div>
          </div>
        </section>

        <section className="section" id="mdt">
          <div className="container mdt-layout">
            <div>
              <SectionHeader {...copy.sections.mdt} />
              <CardGrid cards={copy.sections.mdt.cards} />
            </div>
            <Questions title={copy.sections.mdt.questionsTitle} questions={copy.sections.mdt.questions} />
          </div>
          <div className="container">
            <div className="note-card">{copy.sections.mdt.note}</div>
          </div>
        </section>

        <section className="section light-band" id="clinical-team">
          <div className="container">
            <SectionHeader {...copy.sections.clinicalTeam} />
            <CardGrid cards={copy.sections.clinicalTeam.cards} />
            <div className="note-card">{copy.sections.clinicalTeam.note}</div>
          </div>
        </section>

        <section className="section" id="experts">
          <div className="container">
            <SectionHeader {...copy.sections.experts} />
            <ExpertGrid people={copy.sections.experts.people} />
            <div className="note-card">{copy.sections.experts.note}</div>
          </div>
        </section>

        <section className="section" id="hospitals">
          <div className="container hospital-layout">
            <div>
              <SectionHeader {...copy.sections.hospitals} />
              <CardGrid cards={copy.sections.hospitals.cards} />
              <div className="note-card">{copy.sections.hospitals.note}</div>
            </div>
            <div className="hospital-media">
              <Image src="/images/patient-room.jpg" alt="International patient room in Guangzhou" width={900} height={600} />
              <Image src="/images/guangzhou-hospital-campus.jpg" alt="Hospital campus in Guangzhou" width={900} height={600} />
            </div>
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

        <section className="section" id="ethics">
          <div className="container">
            <SectionHeader {...copy.sections.ethics} />
            <CardGrid cards={copy.sections.ethics.cards} />
            <div className="note-card">{copy.sections.ethics.note}</div>
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
      </main>

      <Footer locale={locale} />
    </div>
  );
}
