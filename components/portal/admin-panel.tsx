"use client";

import Link from "next/link";
import { useState } from "react";
import { Download, Search, Save } from "lucide-react";
import { useRouter } from "next/navigation";
import { portalContent, caseStatusLabel } from "../../lib/portal-content";
import { browserClient } from "../../lib/supabase/client";
import { documentCategories } from "../../lib/portal-validation";
import type { MemberProfile, PatientCase, CaseDocument } from "../../lib/portal-types";
import type { Locale } from "../../lib/site";

export function AdminPanel({ locale, members, cases, documents, selectedCase, page }: { locale: Locale; members: MemberProfile[]; cases: Array<Pick<PatientCase, "id" | "user_id" | "status">>; documents: CaseDocument[]; selectedCase: PatientCase | null; page: number }) {
  const copy = portalContent[locale];
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState(selectedCase?.status === "draft" ? "submitted" : selectedCase?.status ?? "submitted");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const filtered = members.filter((item) => `${item.display_name} ${item.email}`.toLowerCase().includes(search.toLowerCase()));
  const selectedMember = members.find((item) => item.id === selectedCase?.user_id);

  return <div className="portal-admin-layout"><section className="portal-member-list"><label className="portal-search"><Search size={18} aria-hidden="true" /><input type="search" aria-label={copy.search} placeholder={copy.search} value={search} onChange={(event) => setSearch(event.target.value)} maxLength={254} /></label><ul>{filtered.map((member) => {
    const memberCase = cases.find((item) => item.user_id === member.id);
    return <li key={member.id}><strong>{member.display_name || copy.member}</strong><bdi>{member.email}</bdi><small>{member.country}</small>{memberCase ? <Link href={`/${locale}/admin/?case=${memberCase.id}&page=${page}`} aria-current={selectedCase?.id === memberCase.id ? "true" : undefined}>{caseStatusLabel(memberCase.status, locale)}</Link> : <span>{copy.noCases}</span>}</li>;
  })}</ul>{!filtered.length ? <p>{copy.noCases}</p> : null}</section>
    <section className="portal-admin-case">{selectedCase ? <><h2>{selectedMember?.display_name || copy.account}</h2><dl className="portal-case-details">{[[copy.diagnosis, selectedCase.diagnosis], [copy.history, selectedCase.treatment_history], [copy.medication, selectedCase.medications], [copy.symptoms, selectedCase.symptoms]].map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value || "—"}</dd></div>)}</dl><div className="portal-status-controls"><label>{copy.status}<select value={status} onChange={(event) => setStatus(event.target.value)} disabled={busy}>{["submitted", "reviewing", "needs_info", "closed"].map((item) => <option key={item} value={item}>{caseStatusLabel(item, locale)}</option>)}</select></label><button className="button button-light" disabled={busy} onClick={async () => {
      setBusy(true); setMessage("");
      try { const { error } = await browserClient().rpc("admin_update_case", { p_case: selectedCase.id, p_status: status }); if (error) throw error; setMessage(copy.saved); router.refresh(); }
      catch { setMessage(copy.error); } finally { setBusy(false); }
    }}><Save size={17} aria-hidden="true" />{busy ? copy.working : copy.update}</button></div>{message ? <p className="portal-notice" role="status">{message}</p> : null}<h3>{copy.documents}</h3><ul className="portal-document-list">{documents.filter((item) => item.uploaded).map((document) => <li key={document.id}><div><strong>{document.original_name}</strong><small>{copy.categories[documentCategories.indexOf(document.category as typeof documentCategories[number])]}</small></div><a className="icon-button" href={`/api/member/documents/${document.id}/`} title={copy.download} aria-label={`${copy.download}: ${document.original_name}`}><Download size={18} /></a></li>)}</ul></> : <p>{copy.noCases}</p>}</section>
  </div>;
}
