import { notFound, redirect } from "next/navigation";
import { AuthForm, type AuthMode } from "./auth-form";
import { isLocale } from "../../lib/site";
import { portalEnabled } from "../../lib/supabase/config";
import { serverClient } from "../../lib/supabase/server";

export async function AuthPage({ params, mode }: { params: Promise<{ locale: string }>; mode: AuthMode }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const enabled = portalEnabled();
  if (enabled && (mode === "login" || mode === "register")) {
    const client = await serverClient();
    const { data } = await client.auth.getUser();
    if (data.user?.email_confirmed_at) redirect(`/${locale}/member/`);
  }
  return <AuthForm locale={locale} mode={mode} enabled={enabled} />;
}
