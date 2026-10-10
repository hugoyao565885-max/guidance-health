"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { browserClient } from "../../lib/supabase/client";
import { portalContent } from "../../lib/portal-content";
import type { Locale } from "../../lib/site";

export function SignOut({ locale }: { locale: Locale }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);
  const copy = portalContent[locale];
  return <div><button className="button button-light" disabled={busy} onClick={async () => {
    setBusy(true); setError(false);
    try {
      const { error } = await browserClient().auth.signOut();
      if (error) throw error;
      router.replace(`/${locale}/login/`); router.refresh();
    } catch { setError(true); setBusy(false); }
  }}><LogOut size={17} aria-hidden="true" />{busy ? copy.working : copy.logout}</button>{error ? <p role="alert">{copy.error}</p> : null}</div>;
}
