import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import type { Database } from "@/types/_supabase";
import type { LookupItem } from "@/types/database";

export const lookupPlaces = async (search?: string) => {
  const supabase = createClientComponentClient<Database>();

  const query = search
    ? supabase
        .from("places")
        .select("id, name")
        .textSearch("fts", `'${search}':*`)
        .returns<LookupItem[]>()
    : supabase
        .from("places")
        .select("id, name")
        .order("created_at")
        .limit(10)
        .returns<LookupItem[]>();

  const { data, error } = await query;
  if (error) throw Error(error.message);
  if (!data) return [];

  return data;
};

export const lookupPlace = async (id?: string) => {
  const supabase = createClientComponentClient<Database>();

  if (!id) return null;

  const { data, error } = await supabase
    .from("places")
    .select("id, name")
    .eq("id", id)
    .limit(1)
    .returns<LookupItem>()
    .single();

  if (error) throw Error(error.message);
  if (!data) return null;

  return data;
};
