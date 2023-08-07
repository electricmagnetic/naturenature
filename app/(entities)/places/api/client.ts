import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import type { Database } from "@/types/_supabase";

export const searchPlaces = async (search?: string) => {
  const supabase = createClientComponentClient<Database>();

  if (search)
    return await supabase
      .from("places")
      .select("id, name")
      .textSearch("fts", `'${search}':*`);
  return await supabase
    .from("places")
    .select("id, name")
    .order("created_at")
    .limit(10);
};
