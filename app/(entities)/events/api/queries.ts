import { notFound } from "next/navigation";

import createServerSupabaseClient from "@/components/helpers/createServerSupabaseClient";

import type { CompleteEvent } from "../types";

export const getEvents = async () => {
  const supabase = createServerSupabaseClient();
  const { data: events, error } = await supabase.from("events").select("*");

  if (error) throw Error(error.message);
  if (!events) return notFound();

  return events;
};

export const getEvent = async (id: string) => {
  const supabase = createServerSupabaseClient();

  const { data: event, error } = await supabase
    .from("events")
    .select("*, place(*)")
    .eq("id", id)
    .returns<CompleteEvent[]>()
    .limit(1)
    .single();

  if (error) throw Error(error.message);
  if (!event) return notFound();

  return event;
};
