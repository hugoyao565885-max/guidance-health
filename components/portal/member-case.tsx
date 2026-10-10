"use client";

import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import { Download, Send, Save, Trash2, Upload } from "lucide-react";
import { browserClient } from "../../lib/supabase/client";
import { portalContent, caseStatusLabel } from "../../lib/portal-content";
import { documentCategories, maxDocuments, validatedFileExtension } from "../../lib/portal-validation";
import type { MemberProfile, PatientCase, CaseDocument } from "../../lib/portal-types";
import { locales, localeMeta, type Locale } from "../../lib/site";

export function MemberCase({ locale, profile, initialCase, initialDocuments, checklist }: { locale: Locale; profile: MemberProfile; initialCase: PatientCase | null; initialDocuments: CaseDocument[]; checklist: string[] }) {
  const copy = portalContent[locale];
  const form = useRef<HTMLFormElement>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const [patientCase, setPatientCase] = useState(initialCase);
  const [documents, setDocuments] = useState(initialDocuments);
  const [category, setCategory] = useState<string>("other");
  const [files, setFiles] = useState<File[]>([]);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [progress, setProgress] = useState("");

  async function saveCase() {
    if (!form.current?.reportValidity()) return null;
    const data = new FormData(form.current);
    if (data.get("healthConsent") !== "on") return null;
    const client = browserClient();
    const { error: profileError } = await client.rpc("save_member_profile", { p_name: data.get("display_name"), p_country: data.get("country"), p_locale: data.get("preferred_locale") });
    if (profileError) throw profileError;
    const values = { relationship: String(data.get("relationship")), diagnosis: String(data.get("diagnosis") ?? ""), treatment_history: String(data.get("treatment_history") ?? ""), medications: String(data.get("medications") ?? ""), symptoms: String(data.get("symptoms") ?? "") };
    const { data: id, error: caseError } = await client.rpc("save_patient_case", { p_relationship: values.relationship, p_diagnosis: values.diagnosis, p_history: values.treatment_history, p_medications: values.medications, p_symptoms: values.symptoms, p_consent: true });
    if (caseError || !id) throw caseError ?? new Error("Case not saved");
    setPatientCase({ ...values, id, user_id: profile.id, consent_version: "2026-10-10", status: patientCase?.status ?? "draft", updated_at: new Date().toISOString() });
    return String(id);
  }

  async function perform(action: () => Promise<void>) {
    if (busy) return;
    setBusy(true); setMessage(""); setError(false);
    try { await action(); }
    catch { setMessage(copy.error); setError(true); }
    finally { setBusy(false); setProgress(""); }
  }

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await perform(async () => { if (await saveCase()) setMessage(copy.saved); });
  }

  async function uploadFiles() {
    await perform(async () => {
      if (!files.length) return;
      const extensions = await Promise.all(files.map(validatedFileExtension));
      if (extensions.some((extension) => !extension) || documents.length + files.length > maxDocuments) { setMessage(copy.invalidFile); setError(true); return; }
      const caseId = await saveCase();
      if (!caseId) return;
      const client = browserClient();
      for (let index = 0; index < files.length; index++) {
        const file = files[index];
        setProgress(`${copy.upload} ${index + 1} / ${files.length}`);
        const { data: reserved, error: reserveError } = await client.rpc("reserve_case_document", { p_case: caseId, p_name: file.name, p_category: category, p_mime: file.type, p_bytes: file.size });
        if (reserveError || !reserved) throw reserveError ?? new Error("Upload reservation failed");
        const document = (Array.isArray(reserved) ? reserved[0] : reserved) as CaseDocument;
        if (!document?.id || !document.object_path) throw new Error("Invalid document reservation");
        setDocuments((current) => [...current, document]);
        const { error: uploadError } = await client.storage.from("patient-records").upload(document.object_path, file, { contentType: file.type, upsert: false, cacheControl: "0" });
        if (uploadError) {
          const { error: cleanupError } = await client.rpc("remove_case_document", { p_document: document.id });
          if (!cleanupError) setDocuments((current) => current.filter((item) => item.id !== document.id));
          throw uploadError;
        }
        const { error: finishError } = await client.rpc("finish_case_document", { p_document: document.id });
        if (finishError) throw finishError;
        setDocuments((current) => current.map((item) => item.id === document.id ? { ...item, uploaded: true } : item));
      }
      setFiles([]); if (fileInput.current) fileInput.current.value = "";
      setMessage(copy.saved);
    });
  }

  async function removeDocument(document: CaseDocument) {
    if (!window.confirm(copy.confirmRemove)) return;
    await perform(async () => {
      const client = browserClient();
      const { error: storageError } = await client.storage.from("patient-records").remove([document.object_path]);
      if (storageError) throw storageError;
      const { error: metadataError } = await client.rpc("remove_case_document", { p_document: document.id });
      if (metadataError) throw metadataError;
      setDocuments((current) => current.filter((item) => item.id !== document.id)); setMessage(copy.saved);
    });
  }

  return <div className="portal-case-layout">
    <div>
      <form className="portal-form" ref={form} onSubmit={save}>
        <fieldset disabled={busy}>
          <div className="portal-fields"><label>{copy.name}<input name="display_name" defaultValue={profile.display_name} maxLength={100} required /></label><label>{copy.country}<input name="country" defaultValue={profile.country} maxLength={100} /></label><label>{copy.language}<select name="preferred_locale" defaultValue={profile.preferred_locale || locale}>{locales.map((item) => <option key={item} value={item}>{localeMeta[item].nativeLabel}</option>)}</select></label><label>{copy.relationship}<select name="relationship" defaultValue={initialCase?.relationship ?? "patient"}><option value="patient">{copy.patient}</option><option value="representative">{copy.representative}</option></select></label></div>
          <label>{copy.diagnosis}<input name="diagnosis" defaultValue={initialCase?.diagnosis} maxLength={500} /></label>
          <label>{copy.history}<textarea name="treatment_history" defaultValue={initialCase?.treatment_history} rows={4} maxLength={10000} /></label>
          <label>{copy.medication}<textarea name="medications" defaultValue={initialCase?.medications} rows={3} maxLength={5000} /></label>
          <label>{copy.symptoms}<textarea name="symptoms" defaultValue={initialCase?.symptoms} rows={3} maxLength={5000} /></label>
          <p className="portal-privacy-note">{copy.dataNotice} <Link href={`/${locale}/privacy/`}>{copy.privacy}</Link></p>
          <label className="portal-checkbox"><input name="healthConsent" type="checkbox" required defaultChecked={initialCase?.consent_version === "2026-10-10"} /><span>{copy.healthConsent}</span></label>
          <button type="submit" className="button button-light"><Save size={17} aria-hidden="true" />{copy.save}</button>
        </fieldset>
      </form>
      <section className="portal-upload-section"><div className="portal-section-heading"><h2>{copy.uploads}</h2><span>{documents.length} / {maxDocuments}</span></div>
        <p>{copy.fileNote}</p>
        <div className="portal-upload-controls"><label>{copy.category}<select value={category} onChange={(event) => setCategory(event.target.value)} disabled={busy}>{documentCategories.map((item, index) => <option key={item} value={item}>{copy.categories[index]}</option>)}</select></label><label>{copy.chooseFiles}<input ref={fileInput} type="file" accept="application/pdf,image/jpeg,image/png" multiple disabled={busy} onChange={(event) => setFiles(Array.from(event.target.files ?? []))} /></label><button type="button" className="button button-light" onClick={uploadFiles} disabled={busy || !files.length}><Upload size={17} aria-hidden="true" />{copy.upload}</button></div>
        <ul className="portal-document-list">{documents.map((document) => <li key={document.id}><div><strong>{document.original_name}</strong><small>{copy.categories[documentCategories.indexOf(document.category as typeof documentCategories[number])]} · {(document.byte_size / 1024 / 1024).toFixed(1)} MB{!document.uploaded ? ` · ${copy.draft}` : ""}</small></div><div className="portal-file-actions">{document.uploaded ? <a className="icon-button" href={`/api/member/documents/${document.id}/`} title={copy.download} aria-label={`${copy.download}: ${document.original_name}`}><Download size={18} /></a> : null}<button type="button" className="icon-button" title={copy.remove} aria-label={`${copy.remove}: ${document.original_name}`} disabled={busy} onClick={() => removeDocument(document)}><Trash2 size={18} /></button></div></li>)}</ul>
      </section>
      {message || progress ? <p className={`portal-notice${error ? " portal-error" : ""}`} role={error ? "alert" : "status"}>{progress || message}</p> : null}
      <div className="portal-submit-row"><span className="portal-status">{caseStatusLabel(patientCase?.status ?? "draft", locale)}</span><button type="button" className="button button-dark" disabled={busy} onClick={() => perform(async () => {
        const id = await saveCase(); if (!id) return;
        const { error: submitError } = await browserClient().rpc("submit_patient_case", { p_case: id });
        if (submitError) throw submitError;
        setPatientCase((current) => current ? { ...current, status: "submitted" } : current); setMessage(copy.submitted);
      })}><Send size={17} aria-hidden="true" />{busy ? copy.working : copy.submit}</button></div>
    </div>
    <aside className="portal-checklist"><h2>{copy.checklist}</h2><p>{copy.optional}</p><ul>{checklist.map((item) => <li key={item}>{item}</li>)}</ul></aside>
  </div>;
}
