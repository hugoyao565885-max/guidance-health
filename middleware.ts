import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { portalEnabled, supabaseConfig } from "./lib/supabase/config";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({ request });
  response.headers.set("Cache-Control", "private, no-store, max-age=0");
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  response.headers.set("Referrer-Policy", "no-referrer");
  if (!portalEnabled()) return response;
  const { url, key } = supabaseConfig();
  const client = createServerClient(url, key, {
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll(values) {
        values.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        values.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
        response.headers.set("Cache-Control", "private, no-store, max-age=0");
        response.headers.set("X-Robots-Tag", "noindex, nofollow");
        response.headers.set("Referrer-Policy", "no-referrer");
      },
    },
  });
  await client.auth.getUser();
  return response;
}

export const config = {
  matcher: ["/:locale/register/:path*", "/:locale/login/:path*", "/:locale/forgot-password/:path*", "/:locale/reset-password/:path*", "/:locale/member/:path*", "/:locale/admin/:path*", "/:locale/mfa/:path*", "/auth/:path*", "/api/member/:path*"],
};
