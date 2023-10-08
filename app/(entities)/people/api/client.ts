import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import revalidate from "@/app/_components/helpers/revalidate";
import type { Database } from "@/types/_supabase";
import type { LookupItem } from "@/types/database";
import type { PersonDto } from "../types";

export const upsertPerson = async (values: PersonDto) => {
  const supabase = createClientComponentClient<Database>();

  const { status, data, error } = await supabase
    .from("people")
    .upsert(values)
    .select()
    .maybeSingle();

  if (status === 201) await revalidate("/people");

  return { status, data, error };
};

export const lookupPeople = async (search?: string) => {
  const supabase = createClientComponentClient<Database>();

  const query = search
    ? supabase
        .from("people")
        .select("id, name")
        .textSearch("name", `'${search}':*`)
        .returns<LookupItem[]>()
    : supabase
        .from("people")
        .select("id, name")
        .order("created_at")
        .limit(10)
        .returns<LookupItem[]>();

  const { data, error } = await query;
  if (error) throw Error(error.message);
  if (!data) return [];

  return data;
};
