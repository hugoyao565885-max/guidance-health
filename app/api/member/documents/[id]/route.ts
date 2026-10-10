import { NextResponse } from "next/server";
import { serverClient } from "../../../../../lib/supabase/server";
import { portalEnabled } from "../../../../../lib/supabase/config";
import { isUuid } from "../../../../../lib/portal-validation";

export const dynamic = "force-dynamic";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const headers = { "Cache-Control": "private, no-store", "Referrer-Policy": "no-referrer", "X-Robots-Tag": "noindex, nofollow" };
  if (!portalEnabled()) return new Response(null, { status: 503, headers });
  const { id } = await params;
  if (!isUuid(id)) return new Response(null, { status: 404, headers });
  const client = await serverClient();
  const { data: auth, error: authError } = await client.auth.getUser();
  if (authError || !auth.user?.email_confirmed_at) return new Response(null, { status: 401, headers });
  // RLS applies to both the metadata lookup and the signed download URL.
  const { data: document, error } = await client.from("case_documents").select("object_path,original_name").eq("id", id).eq("uploaded", true).maybeSingle();
  if (error || !document) return new Response(null, { status: 404, headers });
  const { error: auditError } = await client.rpc("audit_document_access", { p_document: id });
  if (auditError) return new Response(null, { status: 403, headers });
  const name = document.original_name.replace(/[\r\n\u0000-\u001f/\\]/g, "_");
  const { data, error: urlError } = await client.storage.from("patient-records").createSignedUrl(document.object_path, 60, { download: name });
  if (urlError || !data) return new Response(null, { status: 503, headers });
  const response = NextResponse.redirect(data.signedUrl);
  Object.entries(headers).forEach(([key, value]) => response.headers.set(key, value));
  return response;
}
