import { cookies } from "next/headers";
import { notFound } from "next/navigation";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import type { Database } from "@/types/_supabase";

export const getPlaces = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: places, error } = await supabase
    .from("places")
    .select("*");

  if (error) throw Error(error.message);
  if (!places) return notFound();

  return places;
};

export const getPlace = async (id: string) => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: place, error } = await supabase
    .from("places")
    .select("*")
    .eq("id", id)
    .limit(1)
    .single();

  if (error) throw Error(error.message);
  if (!place) return notFound();

  return place;
};
