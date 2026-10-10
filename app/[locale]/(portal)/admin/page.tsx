import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AdminPanel } from "../../../../components/portal/admin-panel";
import { SignOut } from "../../../../components/portal/sign-out";
import { portalContent } from "../../../../lib/portal-content";
import { isLocale } from "../../../../lib/site";
import { isUuid } from "../../../../lib/portal-validation";
import { requireMember } from "../../../../lib/supabase/server";
import type { MemberProfile, PatientCase, CaseDocument } from "../../../../lib/portal-types";

export default async function AdminPage({ params, searchParams }: { params: Promise<{ locale: string }>; searchParams: Promise<{ case?: string; page?: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { client } = await requireMember(locale);
  const admin = await client.rpc("portal_admin_member");
  if (admin.error || admin.data !== true) notFound();
  const assurance = await client.auth.mfa.getAuthenticatorAssuranceLevel();
  if (assurance.error || assurance.data?.currentLevel !== "aal2") redirect(`/${locale}/mfa/`);
  const query = await searchParams;
  const page = Math.max(0, Math.min(10000, Number.parseInt(query.page ?? "0", 10) || 0));
  const membersResult = await client.from("member_profiles").select("*").order("created_at", { ascending: false }).range(page * 50, page * 50 + 49);
  const members = (membersResult.data ?? []) as MemberProfile[];
  const casesResult = members.length ? await client.from("patient_cases").select("id,user_id,status").in("user_id", members.map((item) => item.id)) : { data: [], error: null };
  const cases = (casesResult.data ?? []) as Array<Pick<PatientCase, "id" | "user_id" | "status">>;
  const selectedId = query.case && isUuid(query.case) ? query.case : cases[0]?.id;
  const selected = cases.find((item) => item.id === selectedId);
  const selectedResult = selected ? await client.from("patient_cases").select("*").eq("id", selected.id).maybeSingle() : { data: null, error: null };
  if (selectedResult.error) throw new Error("Case unavailable");
  const selectedCase = selectedResult.data as PatientCase | null;
  const documentsResult = selectedCase ? await client.from("case_documents").select("*").eq("case_id", selectedCase.id).order("created_at") : { data: [], error: null };
  const copy = portalContent[locale];
  return <><div className="portal-page-heading"><h1>{copy.admin}</h1><SignOut locale={locale} /></div>{membersResult.error || casesResult.error || documentsResult.error ? <p className="portal-notice portal-error" role="alert">{copy.error}</p> : <><AdminPanel key={selectedId} locale={locale} members={members} cases={cases} documents={(documentsResult.data ?? []) as CaseDocument[]} selectedCase={selectedCase} page={page} /><nav className="portal-pagination">{page > 0 ? <Link className="icon-button" href={`/${locale}/admin/?page=${page - 1}`} aria-label={`${copy.member} ${page}`}><ArrowLeft size={18} /></Link> : null}<span>{page + 1}</span>{members.length === 50 ? <Link className="icon-button" href={`/${locale}/admin/?page=${page + 1}`} aria-label={`${copy.member} ${page + 2}`}><ArrowRight size={18} /></Link> : null}</nav></>}</>;
}
