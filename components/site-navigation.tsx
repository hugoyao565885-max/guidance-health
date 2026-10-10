"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronDown, Globe2, Menu, UserRound, X } from "lucide-react";
import { useRef, type KeyboardEvent } from "react";
import { brand, localeMeta, localePath, locales, type Locale } from "../lib/site";
import { portalContent } from "../lib/portal-content";

type NavigationProps = {
  locale: Locale;
  section?: string;
  labels: { menu: string; languages: string; start: string };
  links: Array<{ label: string; section: string }>;
};

export function SiteNavigation({ locale, section = "", labels, links }: NavigationProps) {
  const languageMenu = useRef<HTMLDetailsElement>(null);
  const mobileMenu = useRef<HTMLDetailsElement>(null);
  const portal = portalContent[locale];
  const closeMenus = () => {
    if (languageMenu.current) languageMenu.current.open = false;
    if (mobileMenu.current) mobileMenu.current.open = false;
  };
  const handleEscape = (event: KeyboardEvent<HTMLDetailsElement>) => {
    if (event.key === "Escape") {
      event.currentTarget.open = false;
      event.currentTarget.querySelector("summary")?.focus();
    }
  };

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href={localePath(locale)} className="brand" onClick={closeMenus} aria-label={`${brand.name} home`}>
          <span>H&C<span className="brand-care"> Care</span></span>
          <small>{brand.legalName}</small>
        </Link>
        <nav className="desktop-nav" aria-label={labels.menu}>
          {links.map((link) => (
            <Link href={`${localePath(locale)}${link.section}/`} key={link.section} aria-current={section === link.section ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link className="icon-button header-login" href={`${localePath(locale)}login/`} onClick={closeMenus} title={portal.login} aria-label={portal.login}><UserRound size={20} aria-hidden="true" /></Link>
          <details className="language-menu" ref={languageMenu} onKeyDown={handleEscape}>
            <summary title={labels.languages} aria-label={labels.languages}>
              <Globe2 size={18} aria-hidden="true" /><span>{localeMeta[locale].nativeLabel}</span><ChevronDown size={14} aria-hidden="true" />
            </summary>
            <nav className="language-options" aria-label={labels.languages}>
              {locales.map((item) => (
                <Link href={`${localePath(item)}${section ? `${section}/` : ""}`} hrefLang={localeMeta[item].htmlLang} lang={localeMeta[item].htmlLang} key={item} onClick={closeMenus} aria-current={item === locale ? "true" : undefined}>
                  {localeMeta[item].nativeLabel}
                </Link>
              ))}
            </nav>
          </details>
          <Link className="button button-dark header-enquiry" href={`${localePath(locale)}register/`} onClick={closeMenus}>
            {portal.register}<ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <details className="mobile-menu" ref={mobileMenu} onKeyDown={handleEscape}>
            <summary title={labels.menu} aria-label={labels.menu}>
              <Menu className="menu-open-icon" size={22} aria-hidden="true" /><X className="menu-close-icon" size={22} aria-hidden="true" />
            </summary>
            <nav className="mobile-nav" aria-label={labels.menu}>
              {links.map((link) => (
                <Link href={`${localePath(locale)}${link.section}/`} key={link.section} onClick={closeMenus} aria-current={section === link.section ? "page" : undefined}>
                  {link.label}<ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              ))}
              <Link href={`${localePath(locale)}login/`} onClick={closeMenus}>{portal.login}<UserRound size={16} aria-hidden="true" /></Link>
              <Link className="button button-dark" href={`${localePath(locale)}register/`} onClick={closeMenus}>{portal.register}<ArrowUpRight size={16} aria-hidden="true" /></Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
