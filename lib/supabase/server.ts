import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { supabaseConfig, portalEnabled } from "./config";
import type { Locale } from "../site";

export async function serverClient() {
  const store = await cookies();
  const { url, key } = supabaseConfig();
  return createServerClient(url, key, {
    cookies: {
      getAll: () => store.getAll(),
      setAll(values) {
        try { values.forEach(({ name, value, options }) => store.set(name, value, options)); }
        catch { /* Middleware handles refresh cookies during server rendering. */ }
      },
    },
  });
}

export async function requireMember(locale: Locale) {
  if (!portalEnabled()) redirect(`/${locale}/login/`);
  const client = await serverClient();
  const { data, error } = await client.auth.getUser();
  if (error || !data.user?.email_confirmed_at) redirect(`/${locale}/login/`);
  return { client, user: data.user };
}
