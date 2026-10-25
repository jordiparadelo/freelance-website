import { createClient } from "@supabase/supabase-js";

const REVALIDATE_SECONDS = 86400;

/**
 * Server-only Supabase client. The publishable key stays out of the browser
 * because every read happens in a Server Component.
 */
export function getSupabase() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    throw new Error("SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY are required");
  }

  return createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
    global: {
      fetch: (input, init) =>
        fetch(input, {
          ...init,
          next: { revalidate: REVALIDATE_SECONDS },
        }),
    },
  });
}
