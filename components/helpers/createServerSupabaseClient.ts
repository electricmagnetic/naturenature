import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import type { Database } from "@/types/_supabase";

/**
 * Caching the createServerSupabaseClient to prevent DYNAMIC_SERVER_USAGE problems
 */
export const createServerSupabaseClient = () => {
  const cookieStore = cookies();
  return createServerComponentClient<Database>({ cookies: () => cookieStore });
};

export default createServerSupabaseClient;
