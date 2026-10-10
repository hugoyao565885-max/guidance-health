export function supabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) throw new Error("Member portal configuration missing");
  return { url, key };
}

export function portalEnabled() {
  return process.env.NEXT_PUBLIC_MEMBER_PORTAL_ENABLED === "true";
}
