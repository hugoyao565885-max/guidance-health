"use client";

import { useRef, useState } from "react";
import { Upload } from "lucide-react";
import { browserClient } from "../../lib/supabase/client";
import { portalContent } from "../../lib/portal-content";
import { documentCategories, maxDocuments, validatedFileExtension } from "../../lib/portal-validation";
import type { CaseDocument } from "../../lib/portal-types";
import type { Locale } from "../../lib/site";
import { DocumentList } from "./document-list";

export function AdminDocuments({ locale, caseId, recipient, initialDocuments }: { locale: Locale; caseId: string; recipient: string; initialDocuments: CaseDocument[] }) {
  const copy = portalContent[locale];
  const fileInput = useRef<HTMLInputElement>(null);
  const inFlight = useRef(false);
  const [documents, setDocuments] = useState(initialDocuments);
  const [files, setFiles] = useState<File[]>([]);
  const [category, setCategory] = useState("other");
  const [confirmed, setConfirmed] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [failed, setFailed] = useState(false);

  async function upload() {
    if (inFlight.current || !files.length || !confirmed) return;
    inFlight.current = true; setBusy(true); setMessage(""); setFailed(false);
    try {
      const extensions = await Promise.all(files.map(validatedFileExtension));
      if (extensions.some((extension) => !extension) || documents.length + files.length > maxDocuments) {
        setMessage(copy.invalidFile); setFailed(true); return;
      }
      const client = browserClient();
      for (let index = 0; index < files.length; index++) {
        const file = files[index];
        setMessage(`${copy.upload} ${index + 1} / ${files.length}`);
        const { data: reserved, error: reserveError } = await client.rpc("admin_reserve_case_document", { p_case: caseId, p_name: file.name, p_category: category, p_mime: file.type, p_bytes: file.size });
        if (reserveError || !reserved) throw reserveError ?? new Error("Reservation failed");
        const document = (Array.isArray(reserved) ? reserved[0] : reserved) as CaseDocument;
        if (!document?.id || !document.object_path || document.case_id !== caseId || document.source !== "team") throw new Error("Invalid reservation");
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
      setMessage(copy.teamUploadSaved);
    } catch { setMessage(copy.error); setFailed(true); }
    finally {
      // Clear the selection even after a partial batch so a retry cannot duplicate published files.
      setFiles([]); setConfirmed(false); if (fileInput.current) fileInput.current.value = "";
      inFlight.current = false; setBusy(false);
    }
  }

  async function remove(document: CaseDocument) {
    if (inFlight.current || document.source !== "team" || !window.confirm(copy.confirmTeamRemove)) return;
    inFlight.current = true; setBusy(true); setMessage(""); setFailed(false);
    try {
      const client = browserClient();
      const { error: storageError } = await client.storage.from("patient-records").remove([document.object_path]);
      if (storageError) throw storageError;
      const { error } = await client.rpc("remove_case_document", { p_document: document.id });
      if (error) throw error;
      setDocuments((current) => current.filter((item) => item.id !== document.id)); setMessage(copy.saved);
    } catch { setMessage(copy.error); setFailed(true); }
    finally { inFlight.current = false; setBusy(false); }
  }

  return <>
    <h3>{copy.patientDocuments}</h3>
    <DocumentList locale={locale} documents={documents.filter((item) => item.source !== "team" && item.uploaded)} />
    <section className="portal-upload-section">
      <div className="portal-section-heading"><h3>{copy.teamDocuments}</h3><span>{documents.length} / {maxDocuments}</span></div>
      <p>{copy.teamUploadNotice}</p><p><strong>{copy.recipient}:</strong> <bdi>{recipient}</bdi></p><p>{copy.fileNote}</p>
      <div className="portal-upload-controls">
        <label>{copy.category}<select value={category} disabled={busy} onChange={(event) => setCategory(event.target.value)}>{documentCategories.map((item, index) => <option key={item} value={item}>{copy.categories[index]}</option>)}</select></label>
        <label>{copy.chooseFiles}<input ref={fileInput} type="file" accept="application/pdf,image/jpeg,image/png" multiple disabled={busy} onChange={(event) => { setFiles(Array.from(event.target.files ?? [])); setConfirmed(false); }} /></label>
        <label className="portal-checkbox"><input type="checkbox" checked={confirmed} disabled={busy} onChange={(event) => setConfirmed(event.target.checked)} /><span>{copy.confirmPatientShare}</span></label>
        <button className="button button-light" type="button" onClick={upload} disabled={busy || !confirmed || !files.length}><Upload size={17} aria-hidden="true" />{busy ? copy.working : copy.upload}</button>
      </div>
      {message ? <p className={`portal-notice${failed ? " portal-error" : ""}`} role={failed ? "alert" : "status"}>{message}</p> : null}
      <DocumentList locale={locale} documents={documents.filter((item) => item.source === "team")} busy={busy} onRemove={remove} />
    </section>
  </>;
}
