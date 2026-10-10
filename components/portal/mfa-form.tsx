"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck } from "lucide-react";
import { browserClient } from "../../lib/supabase/client";
import { portalContent } from "../../lib/portal-content";
import type { Locale } from "../../lib/site";

export function MfaForm({ locale }: { locale: Locale }) {
  const copy = portalContent[locale];
  const router = useRouter();
  const [factor, setFactor] = useState("");
  const [qr, setQr] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);

  async function prepare() {
    setBusy(true); setError(false);
    try {
      const client = browserClient();
      const { data, error: listError } = await client.auth.mfa.listFactors();
      if (listError) throw listError;
      const existing = data.totp.find((item) => item.status === "verified");
      if (existing) setFactor(existing.id);
      else {
        const { data: enrolled, error: enrollError } = await client.auth.mfa.enroll({ factorType: "totp", friendlyName: "H&C Care admin", issuer: "H&C Care" });
        if (enrollError) throw enrollError;
        setFactor(enrolled.id); setQr(enrolled.totp.qr_code);
      }
    } catch { setError(true); }
    finally { setBusy(false); }
  }

  async function verify(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setError(false);
    const code = String(new FormData(event.currentTarget).get("code"));
    try {
      const { error: verifyError } = await browserClient().auth.mfa.challengeAndVerify({ factorId: factor, code });
      if (verifyError) throw verifyError;
      router.replace(`/${locale}/admin/`); router.refresh();
    } catch { setError(true); }
    finally { setBusy(false); }
  }

  return <section className="portal-mfa"><h1>{copy.mfa}</h1><p>{copy.mfaIntro}</p>{!factor ? <button className="button button-dark" disabled={busy} onClick={prepare}><ShieldCheck size={18} aria-hidden="true" />{busy ? copy.working : copy.enroll}</button> : <form className="portal-form" onSubmit={verify}>{qr ? <img src={qr} width={220} height={220} alt={copy.enroll} className="portal-mfa-qr" /> : null}<label>{copy.code}<input name="code" type="text" dir="ltr" inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]{6}" minLength={6} maxLength={6} required disabled={busy} /></label><button className="button button-dark" disabled={busy}><ShieldCheck size={18} aria-hidden="true" />{busy ? copy.working : copy.verify}</button></form>}{error ? <p className="portal-notice portal-error" role="alert">{copy.error}</p> : null}</section>;
}
