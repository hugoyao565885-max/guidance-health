import { notFound, redirect } from "next/navigation";
import { MfaForm } from "../../../../components/portal/mfa-form";
import { isLocale } from "../../../../lib/site";
import { requireMember } from "../../../../lib/supabase/server";

export default async function MfaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { client } = await requireMember(locale);
  const { data, error } = await client.rpc("portal_admin_member");
  if (error || data !== true) notFound();
  const assurance = await client.auth.mfa.getAuthenticatorAssuranceLevel();
  if (assurance.data?.currentLevel === "aal2") redirect(`/${locale}/admin/`);
  return <MfaForm locale={locale} />;
}
