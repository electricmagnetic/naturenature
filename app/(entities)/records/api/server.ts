import { notFound } from "next/navigation";

import createServerSupabaseClient from "@/components/helpers/createServerSupabaseClient";
import { uuidOrNotFound } from "@/components/helpers/uuid";

import type { CompleteRecord, RecordRelatedObjects } from "../types";

const RECORD_RELATED_OBJECTS =
  "event:events(*), individual:individuals(*), media:media(*), object:objects(*), person:people(*)";

export const getRecords = async () => {
  const supabase = createServerSupabaseClient();
  const { data: records, error } = await supabase.from("records").select("*");

  if (error) throw Error(error.message);
  if (!records) return notFound();

  return records;
};

export const getRecord = async (id: string) => {
  uuidOrNotFound(id);

  const supabase = createServerSupabaseClient();

  const { data: record, error } = await supabase
    .from("records")
    .select(`*, ${RECORD_RELATED_OBJECTS}`)
    .eq("id", id)
    .returns<CompleteRecord[]>()
    .limit(1)
    .maybeSingle();

  if (error) throw Error(error.message);
  if (!record) return notFound();

  return record;
};

export const getRecordsBy = async (column: string, id: string) => {
  uuidOrNotFound(id);

  const supabase = createServerSupabaseClient();

  const { data: record, error } = await supabase
    .from("records")
    .select(`*, ${RECORD_RELATED_OBJECTS}`)
    .eq(column, id)
    .returns<CompleteRecord[]>();

  if (error) throw Error(error.message);
  if (!record) return notFound();

  return record;
};

export const getRecordRelatedObjects = async (id: string) => {
  uuidOrNotFound(id);

  const supabase = createServerSupabaseClient();

  const { data: event, error } = await supabase
    .from("records")
    .select(`${RECORD_RELATED_OBJECTS}`)
    .eq("id", id)
    .returns<RecordRelatedObjects[]>()
    .limit(1)
    .maybeSingle();

  if (error) throw Error(error.message);
  if (!event) return notFound();

  return event;
};
