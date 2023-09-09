import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import revalidate from "@/components/helpers/revalidate";
import type { Database } from "@/types/_supabase";
import type { LookupItem } from "@/types/database";
import type { ObjectDto } from "../types";

const IDENTIFIER_KEY = "OBJECT_IDENTIFIER";
const SAMPLE_KEY = "OBJECT_SAMPLE";

export const upsertObject = async (values: ObjectDto) => {
  const supabase = createClientComponentClient<Database>();

  const { status, data, error } = await supabase
    .from("objects")
    .upsert(values)
    .select()
    .maybeSingle();

  if (status === 201) await revalidate("/objects");

  return { status, data, error };
};

export const lookupIdentifiers = async (search?: string) => {
  const supabase = createClientComponentClient<Database>();

  const query = search
    ? supabase
        .from("objects")
        .select("id, name")
        .eq("class", IDENTIFIER_KEY)
        .textSearch("name", `'${search}':*`)
        .returns<LookupItem[]>()
    : supabase
        .from("objects")
        .select("id, name")
        .eq("class", IDENTIFIER_KEY)
        .order("created_at")
        .limit(10)
        .returns<LookupItem[]>();

  const { data, error } = await query;
  if (error) throw Error(error.message);
  if (!data) return [];

  return data;
};

export const lookupSamples = async (search?: string) => {
  const supabase = createClientComponentClient<Database>();

  const query = search
    ? supabase
        .from("objects")
        .select("id, name")
        .eq("class", SAMPLE_KEY)
        .textSearch("name", `'${search}':*`)
        .returns<LookupItem[]>()
    : supabase
        .from("objects")
        .select("id, name")
        .eq("class", SAMPLE_KEY)
        .order("created_at")
        .limit(10)
        .returns<LookupItem[]>();

  const { data, error } = await query;
  if (error) throw Error(error.message);
  if (!data) return [];

  return data;
};
