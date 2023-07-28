import { notFound } from "next/navigation";

import createServerSupabaseClient from "@/components/helpers/createServerSupabaseClient";

export const getObjects = async () => {
  const supabase = createServerSupabaseClient();
  const { data: objects, error } = await supabase.from("objects").select("*");

  if (error) throw Error(error.message);
  if (!objects) return notFound();

  return objects;
};

export const getObject = async (id: string) => {
  const supabase = createServerSupabaseClient();

  const { data: object, error } = await supabase
    .from("objects")
    .select("*")
    .eq("id", id)
    .limit(1)
    .single();

  if (error) throw Error(error.message);
  if (!object) return notFound();

  return object;
};
