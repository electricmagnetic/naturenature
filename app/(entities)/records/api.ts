import { cookies } from "next/headers";
import { notFound } from "next/navigation";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import type { Database } from "@/types/_supabase";
import type { CompleteRecord } from "@/types/recordTypes";

export const getRecords = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: records, error } = await supabase.from("records").select("*");

  if (error) throw Error(error.message);
  if (!records) return notFound();

  return records;
};

export const getRecord = async (id: string) => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: record, error } = await supabase
    .from("records")
    .select("*, event(*), individual(*), media(*), object(*), person(*)")
    .eq("id", id)
    .returns<CompleteRecord[]>()
    .limit(1)
    .single();

  if (error) throw Error(error.message);
  if (!record) return notFound();

  return record;
};

export const getRecordsByEvent = async (id: string) => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: record, error } = await supabase
    .from("records")
    .select("*, event(*), individual(*), media(*), object(*), person(*)")
    .eq("event", id)
    .returns<CompleteRecord[]>();

  if (error) throw Error(error.message);
  if (!record) return notFound();

  return record;
};
