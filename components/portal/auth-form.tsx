"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ArrowRight, Eye, EyeOff, Mail, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { browserClient } from "../../lib/supabase/client";
import { portalContent } from "../../lib/portal-content";
import type { Locale } from "../../lib/site";

export type AuthMode = "register" | "login" | "forgot-password" | "reset-password";

export function AuthForm({ locale, mode, enabled }: { locale: Locale; mode: AuthMode; enabled: boolean }) {
  const copy = portalContent[locale];
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [failed, setFailed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [complete, setComplete] = useState(false);
  const title = mode === "register" ? copy.register : mode === "login" ? copy.login : copy.reset;
  const hasPassword = mode !== "forgot-password";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!enabled || busy) return;
    const values = new FormData(event.currentTarget);
    const email = String(values.get("email") ?? "").trim();
    const password = String(values.get("password") ?? "");
    const confirmation = String(values.get("confirmPassword") ?? "");
    setMessage(""); setFailed(false);
    if ((mode === "register" || mode === "reset-password") && password !== confirmation) { setMessage(copy.mismatch); setFailed(true); return; }
    setBusy(true);
    try {
      const client = browserClient();
      const callback = `${window.location.origin}/auth/callback?next=/${locale}/${mode === "forgot-password" ? "reset-password" : "member"}/`;
      if (mode === "register") {
        const { error } = await client.auth.signUp({ email, password, options: { emailRedirectTo: callback, data: { account_consent_version: "2026-10-10" } } });
        if (error) throw error;
        setMessage(copy.checkEmail); setComplete(true);
      } else if (mode === "login") {
        const { error } = await client.auth.signInWithPassword({ email, password });
        if (error) throw error;
        router.replace(`/${locale}/member/`); router.refresh();
      } else if (mode === "forgot-password") {
        // The same result is shown whether or not an address exists.
        const { error } = await client.auth.resetPasswordForEmail(email, { redirectTo: callback });
        if (error) throw error;
        setMessage(copy.resetSent); setComplete(true);
      } else {
        const { error } = await client.auth.updateUser({ password });
        if (error) throw error;
        await client.auth.signOut({ scope: "global" });
        router.replace(`/${locale}/login/`); router.refresh();
      }
    } catch { setMessage(mode === "login" ? copy.invalidLogin : copy.error); setFailed(true); }
    finally { setBusy(false); }
  }

  return <div className="portal-auth-layout">
    <section className="portal-auth-copy"><p className="eyebrow">H&C Care</p><h1>{title}</h1><p>{copy.intro}</p><p className="portal-privacy-note"><ShieldCheck size={20} aria-hidden="true" />{copy.dataNotice}</p></section>
    <div className="portal-auth-panel">
      {!enabled ? <p className="portal-notice" role="status">{copy.unavailable}</p> : null}
      <form onSubmit={handleSubmit} className="portal-form">
        {mode !== "reset-password" ? <label>{copy.email}<input name="email" type="email" dir="ltr" autoComplete="email" maxLength={254} required disabled={busy || complete} /></label> : null}
        {hasPassword ? <label>{copy.password}<div className="password-field"><input name="password" type={showPassword ? "text" : "password"} dir="ltr" autoComplete={mode === "login" ? "current-password" : "new-password"} minLength={mode === "login" ? undefined : 12} maxLength={128} required disabled={busy || complete} /><button type="button" className="icon-button" title={copy.password} aria-label={copy.password} aria-pressed={showPassword} onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button></div>{mode !== "login" ? <small>{copy.passwordNote}</small> : null}</label> : null}
        {mode === "register" || mode === "reset-password" ? <label>{copy.confirmPassword}<input name="confirmPassword" type={showPassword ? "text" : "password"} dir="ltr" autoComplete="new-password" minLength={12} maxLength={128} required disabled={busy || complete} /></label> : null}
        {mode === "register" ? <><div className="portal-legal-links"><Link href={`/${locale}/privacy/`}>{copy.privacy}</Link><Link href={`/${locale}/terms/`}>{copy.terms}</Link></div><label className="portal-checkbox"><input name="consent" type="checkbox" required disabled={busy || complete} /><span>{copy.consent}</span></label></> : null}
        {message ? <p className={`portal-notice${failed ? " portal-error" : ""}`} role={failed ? "alert" : "status"}>{message}</p> : null}
        <button type="submit" className="button button-dark" disabled={!enabled || busy || complete}>{busy ? copy.working : title}<ArrowRight size={18} aria-hidden="true" /></button>
      </form>
      <nav className="portal-auth-links">
        {mode !== "login" ? <Link href={`/${locale}/login/`}>{copy.login}</Link> : <><Link href={`/${locale}/register/`}>{copy.register}</Link><Link href={`/${locale}/forgot-password/`}>{copy.forgot}</Link></>}
        <a href="mailto:support@hccareadvisory.com"><Mail size={16} aria-hidden="true" />support@hccareadvisory.com</a>
      </nav>
    </div>
  </div>;
}
