import { notFound } from "next/navigation";

import createServerSupabaseClient from "@/components/helpers/createServerSupabaseClient";
import { uuidOrNotFound } from "@/components/helpers/uuid";

export const getPlaces = async () => {
  const supabase = createServerSupabaseClient();
  const { data: places, error } = await supabase
    .from("places")
    .select("id, name, type");

  if (error) throw Error(error.message);
  if (!places) return notFound();

  return places;
};

export const getPlace = async (id: string) => {
  uuidOrNotFound(id);

  const supabase = createServerSupabaseClient();

  const { data: place, error } = await supabase
    .from("places")
    .select("*")
    .eq("id", id)
    .limit(1)
    .maybeSingle();

  if (error) throw Error(error.message);
  if (!place) return notFound();

  return place;
};
