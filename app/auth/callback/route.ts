import { NextResponse, type NextRequest } from "next/server";
import { isLocale, siteUrl } from "../../../lib/site";
import { serverClient } from "../../../lib/supabase/server";
import { portalEnabled } from "../../../lib/supabase/config";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const next = request.nextUrl.searchParams.get("next") ?? "/en/member/";
  const parts = next.split("/");
  const locale = isLocale(parts[1]) ? parts[1] : "en";
  const target = parts[2] === "reset-password" ? `/${locale}/reset-password/` : `/${locale}/member/`;
  const origin = process.env.NODE_ENV === "development" ? request.nextUrl.origin : siteUrl;
  let success = false;
  if (portalEnabled()) {
    const client = await serverClient();
    const code = request.nextUrl.searchParams.get("code");
    const hash = request.nextUrl.searchParams.get("token_hash");
    const type = request.nextUrl.searchParams.get("type");
    if (code) success = !(await client.auth.exchangeCodeForSession(code)).error;
    else if (hash && (type === "email" || type === "recovery")) success = !(await client.auth.verifyOtp({ token_hash: hash, type })).error;
  }
  const response = NextResponse.redirect(`${origin}${success ? target : `/${locale}/login/?error=verification`}`);
  response.headers.set("Cache-Control", "private, no-store");
  response.headers.set("Referrer-Policy", "no-referrer");
  return response;
}
