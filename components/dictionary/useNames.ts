"use client";

import useSWR, { Fetcher } from "swr";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import type { ViewRow } from "@/types/database";

type Names = ViewRow<"names">[] | null;

// SWR function to fetch names
const fetcher: Fetcher<Names> = async () => {
  const supabase = createClientComponentClient();
  const { data, error } = await supabase.from("names").select("*");

  if (error) throw Error(error.message);

  return data;
};

/**
 * Provides key/value matches for IDs and names.
 * NB: Users must have the RLS rights for the tables referenced by the view.
 */
export default function useNames() {
  const { data: names, error } = useSWR<Names, Error>(fetcher);

  if (error) throw Error(error.message);
  if (!names) return null;

  return names;
}
