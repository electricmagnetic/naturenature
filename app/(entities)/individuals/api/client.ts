import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import revalidate from "@/components/helpers/revalidate";
import type { Database } from "@/types/_supabase";
import type { LookupItem } from "@/types/database";
import type { IndividualDto } from "../types";

export const upsertIndividual = async (values: IndividualDto) => {
  const supabase = createClientComponentClient<Database>();

  const { status, data, error } = await supabase
    .from("individuals")
    .upsert(values)
    .select()
    .maybeSingle();

  if (status === 201) await revalidate("/individuals");

  return { status, data, error };
};

export const lookupIndividuals = async (search?: string) => {
  const supabase = createClientComponentClient<Database>();

  const query = search
    ? supabase
        .from("individuals")
        .select("id, name")
        .textSearch("name", `'${search}':*`)
        .returns<LookupItem[]>()
    : supabase
        .from("individuals")
        .select("id, name")
        .order("created_at")
        .limit(10)
        .returns<LookupItem[]>();

  const { data, error } = await query;
  if (error) throw Error(error.message);
  if (!data) return [];

  return data;
};
