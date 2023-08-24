import { notFound } from "next/navigation";

import createServerSupabaseClient from "@/components/helpers/createServerSupabaseClient";

import type { CompleteEvent, EventRelatedObjects } from "../types";
import uuidOrNotFound from "@/components/helpers/uuidOrNotFound";

export const getEvents = async () => {
  const supabase = createServerSupabaseClient();
  const { data: events, error } = await supabase.from("events").select("*");

  if (error) throw Error(error.message);
  if (!events) return notFound();

  return events;
};

export const getEvent = async (id: string) => {
  uuidOrNotFound(id);

  const supabase = createServerSupabaseClient();

  const { data: event, error } = await supabase
    .from("events")
    .select("*")
    .eq("id", id)
    .limit(1)
    .maybeSingle();

  if (error) throw Error(error.message);
  if (!event) return notFound();

  return event;
};

export const getCompleteEvent = async (id: string) => {
  uuidOrNotFound(id);

  const supabase = createServerSupabaseClient();

  const { data: event, error } = await supabase
    .from("events")
    .select("*, place:places(*)")
    .eq("id", id)
    .returns<CompleteEvent[]>()
    .limit(1)
    .maybeSingle();

  if (error) throw Error(error.message);
  if (!event) return notFound();

  return event;
};

export const getEventRelatedObjects = async (id: string) => {
  uuidOrNotFound(id);

  const supabase = createServerSupabaseClient();

  const { data: event, error } = await supabase
    .from("events")
    .select("place:places(*)")
    .eq("id", id)
    .returns<EventRelatedObjects[]>()
    .limit(1)
    .maybeSingle();

  if (error) throw Error(error.message);
  if (!event) return notFound();

  return event;
};
