import { notFound } from "next/navigation";
import { AuthForm } from "../../../../components/portal/auth-form";
import { isLocale } from "../../../../lib/site";
import { requireMember } from "../../../../lib/supabase/server";

export default async function ResetPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  await requireMember(locale);
  return <AuthForm locale={locale} mode="reset-password" enabled />;
}
