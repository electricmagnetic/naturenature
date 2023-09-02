import { notFound } from "next/navigation";

import createServerSupabaseClient from "@/components/helpers/createServerSupabaseClient";
import { uuidOrNotFound } from "@/components/helpers/uuid";

export const getObjects = async () => {
  const supabase = createServerSupabaseClient();
  const { data: objects, error } = await supabase.from("objects").select("*");

  if (error) throw Error(error.message);
  if (!objects) return notFound();

  return objects;
};

export const getObject = async (id: string) => {
  uuidOrNotFound(id);

  const supabase = createServerSupabaseClient();

  const { data: object, error } = await supabase
    .from("objects")
    .select("*")
    .eq("id", id)
    .limit(1)
    .maybeSingle();

  if (error) throw Error(error.message);
  if (!object) return notFound();

  return object;
};
