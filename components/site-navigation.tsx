"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, Globe2, Menu, UserRound, X } from "lucide-react";
import { useRef, type KeyboardEvent } from "react";
import { brand, localeMeta, pagePath, locales, type Locale } from "../lib/site";
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
        <Link href={pagePath(locale)} className="brand" onClick={closeMenus} aria-label={`${brand.name} home`}>
          <Image className="brand-logo" src="/brand/hccare-logo.webp" alt={brand.legalName} width={1280} height={405} sizes="(max-width: 400px) 128px, (max-width: 600px) 150px, 224px" priority />
        </Link>
        <nav className="desktop-nav" aria-label={labels.menu}>
          {links.map((link) => (
            <Link href={pagePath(locale, link.section)} key={link.section} aria-current={section === link.section ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link className="icon-button header-login" href={pagePath(locale, "login")} onClick={closeMenus} title={portal.login} aria-label={portal.login}><UserRound size={20} aria-hidden="true" /></Link>
          <details className="language-menu" ref={languageMenu} onKeyDown={handleEscape}>
            <summary title={labels.languages} aria-label={labels.languages}>
              <Globe2 size={18} aria-hidden="true" /><span>{localeMeta[locale].nativeLabel}</span><ChevronDown size={14} aria-hidden="true" />
            </summary>
            <nav className="language-options" aria-label={labels.languages}>
              {locales.map((item) => (
                <Link href={pagePath(item, section)} hrefLang={localeMeta[item].htmlLang} lang={localeMeta[item].htmlLang} key={item} onClick={closeMenus} aria-current={item === locale ? "true" : undefined}>
                  {localeMeta[item].nativeLabel}
                </Link>
              ))}
            </nav>
          </details>
          <Link className="button button-dark header-enquiry" href={pagePath(locale, "register")} onClick={closeMenus}>
            {portal.register}<ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <details className="mobile-menu" ref={mobileMenu} onKeyDown={handleEscape}>
            <summary title={labels.menu} aria-label={labels.menu}>
              <Menu className="menu-open-icon" size={22} aria-hidden="true" /><X className="menu-close-icon" size={22} aria-hidden="true" />
            </summary>
            <nav className="mobile-nav" aria-label={labels.menu}>
              {links.map((link) => (
                <Link href={pagePath(locale, link.section)} key={link.section} onClick={closeMenus} aria-current={section === link.section ? "page" : undefined}>
                  {link.label}<ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              ))}
              <Link href={pagePath(locale, "login")} onClick={closeMenus}>{portal.login}<UserRound size={16} aria-hidden="true" /></Link>
              <Link className="button button-dark" href={pagePath(locale, "register")} onClick={closeMenus}>{portal.register}<ArrowUpRight size={16} aria-hidden="true" /></Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
