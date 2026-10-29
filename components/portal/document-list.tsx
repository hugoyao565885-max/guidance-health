"use client";

import { Download, Trash2 } from "lucide-react";
import { portalContent } from "../../lib/portal-content";
import { documentCategories } from "../../lib/portal-validation";
import type { CaseDocument } from "../../lib/portal-types";
import { localeMeta, type Locale } from "../../lib/site";

export function DocumentList({ locale, documents, busy = false, onRemove }: { locale: Locale; documents: CaseDocument[]; busy?: boolean; onRemove?: (document: CaseDocument) => void }) {
  const copy = portalContent[locale];
  return <ul className="portal-document-list">{documents.map((document) => <li key={document.id}>
    <div><strong>{document.original_name}</strong><small>{copy.categories[documentCategories.indexOf(document.category as typeof documentCategories[number])]} · {(document.byte_size / 1024 / 1024).toFixed(1)} MB · <time dateTime={document.created_at}>{new Intl.DateTimeFormat(localeMeta[locale].htmlLang, { dateStyle: "medium", timeZone: "Asia/Singapore" }).format(new Date(document.created_at))}</time>{!document.uploaded ? ` · ${copy.draft}` : ""}</small></div>
    <div className="portal-file-actions">{document.uploaded ? <a className="icon-button" href={`/api/member/documents/${document.id}/`} title={copy.download} aria-label={`${copy.download}: ${document.original_name}`}><Download size={18} aria-hidden="true" /></a> : null}
      {onRemove ? <button type="button" className="icon-button" title={copy.remove} aria-label={`${copy.remove}: ${document.original_name}`} disabled={busy} onClick={() => onRemove(document)}><Trash2 size={18} aria-hidden="true" /></button> : null}</div>
  </li>)}</ul>;
}
