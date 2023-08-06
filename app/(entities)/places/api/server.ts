import { notFound } from "next/navigation";

import createServerSupabaseClient from "@/components/helpers/createServerSupabaseClient";

export const getPlaces = async () => {
  const supabase = createServerSupabaseClient();
  const { data: places, error } = await supabase.from("places").select("*");

  if (error) throw Error(error.message);
  if (!places) return notFound();

  return places;
};

export const getPlace = async (id: string) => {
  const supabase = createServerSupabaseClient();

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