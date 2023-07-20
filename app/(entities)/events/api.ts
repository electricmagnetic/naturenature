import { cookies } from "next/headers";
import { notFound } from "next/navigation";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import type { Database } from "@/types/_supabase";
import type { CompleteEvent } from "@/types/eventTypes";

export const getEvents = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: events, error } = await supabase.from("events").select("*");

  if (error) throw Error(error.message);
  if (!events) return notFound();

  return events;
};

export const getEvent = async (id: string) => {
  const supabase = createServerComponentClient<Database>({ cookies });

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
