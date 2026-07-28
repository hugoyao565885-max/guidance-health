import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { brand, contact, isLocale, localeMeta, locales, localePath, siteUrl, type Locale } from "../../../lib/site";
import { content, footerSectionKeys, mainSectionKeys, sectionKeys, type SectionKey } from "../../../lib/content";

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
    title: `${section.title} | ${brand.name}`,
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

function LegalCards({ cards, note }: { cards: Array<{ title: string; text: string }>; note: string }) {
  return (
    <>
      <Cards cards={cards} />
      <div className="note-card">{note}</div>
    </>
  );
}

export default async function SectionPage({ params }: PageProps) {
  const { locale: rawLocale, section: rawSection } = await params;
  if (!isLocale(rawLocale) || !isSection(rawSection)) notFound();

  const locale = rawLocale;
  const section = rawSection;
  const meta = localeMeta[locale];
  const copy = content[locale];

  return (
    <div className="site-body" lang={meta.htmlLang} dir={meta.dir}>
      <Header locale={locale} />
      <main>
        <SectionHero locale={locale} section={section} />
        <section className="section">
          <div className="container">
            {section === "membership" ? (
              <>
                <MembershipPlans plans={copy.sections.membership.plans} />
                <MembershipModules
                  title={copy.sections.membership.modulesTitle}
                  modules={copy.sections.membership.modules}
                  note={copy.sections.membership.modulesNote}
                />
                <div className="note-card">{copy.sections.membership.note}</div>
              </>
            ) : null}

            {section === "oncology" ? (
              <>
                <Cards cards={copy.sections.oncology.cards} />
                <div className="note-card">{copy.sections.oncology.note}</div>
              </>
            ) : null}

            {section === "mdt" ? (
              <>
                <Cards cards={copy.sections.mdt.cards} />
                <Questions title={copy.sections.mdt.questionsTitle} questions={copy.sections.mdt.questions} />
                <div className="note-card">{copy.sections.mdt.note}</div>
              </>
            ) : null}

            {section === "experts" ? (
              <>
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
                <div className="note-card">{copy.sections.experts.note}</div>
              </>
            ) : null}

            {section === "hospitals" ? (
              <div className="hospital-layout">
                <div>
                  <Cards cards={copy.sections.hospitals.cards} />
                  <div className="note-card">{copy.sections.hospitals.note}</div>
                </div>
                <div className="hospital-media">
                  <Image src="/images/patient-room.jpg" alt="International patient room in Guangzhou" width={900} height={600} />
                  <Image src="/images/guangzhou-hospital-campus.jpg" alt="Hospital campus in Guangzhou" width={900} height={600} />
                </div>
              </div>
            ) : null}

            {section === "journey" ? (
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

            {section === "contact" ? (
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
                  {contact.emails.map((email) => (
                    <a key={email} href={`mailto:${email}`}>
                      {email}
                    </a>
                  ))}
                  <span>{contact.whatsapp}</span>
                  <p>{copy.sections.contact.privacy}</p>
                </aside>
              </div>
            ) : null}

            {section === "privacy" ? <LegalCards cards={copy.sections.privacy.cards} note={copy.sections.privacy.note} /> : null}
            {section === "terms" ? <LegalCards cards={copy.sections.terms.cards} note={copy.sections.terms.note} /> : null}
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </div>
  );
}
