import Link from "next/link";
import { notFound } from "next/navigation";
import { MemberCase } from "../../../../components/portal/member-case";
import { SignOut } from "../../../../components/portal/sign-out";
import { portalContent } from "../../../../lib/portal-content";
import { content } from "../../../../lib/content";
import { isLocale } from "../../../../lib/site";
import { requireMember } from "../../../../lib/supabase/server";
import type { MemberProfile, PatientCase, CaseDocument } from "../../../../lib/portal-types";

export default async function MemberPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { client, user } = await requireMember(locale);
  const copy = portalContent[locale];
  const profile = await client.from("member_profiles").select("*").eq("id", user.id).single();
  const patientCase = await client.from("patient_cases").select("*").eq("user_id", user.id).maybeSingle();
  const documents = await client.from("case_documents").select("*").eq("user_id", user.id).order("created_at");
  const admin = await client.rpc("portal_admin_member");
  return <><div className="portal-page-heading"><div><p className="eyebrow">H&C Care</p><h1>{copy.account}</h1><p>{copy.caseIntro}</p><bdi>{user.email}</bdi></div><div className="portal-heading-actions">{admin.data === true ? <Link href={`/${locale}/admin/`}>{copy.admin}</Link> : null}<SignOut locale={locale} /></div></div>{profile.error || patientCase.error || documents.error ? <p className="portal-notice portal-error" role="alert">{copy.error}</p> : <MemberCase locale={locale} profile={profile.data as MemberProfile} initialCase={patientCase.data as PatientCase | null} initialDocuments={(documents.data ?? []) as CaseDocument[]} checklist={content[locale].sections.register.documents} />}</>;
}
