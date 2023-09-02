import { notFound } from "next/navigation";

import createServerSupabaseClient from "@/components/helpers/createServerSupabaseClient";
import { uuidOrNotFound } from "@/components/helpers/uuid";

export const getPeople = async () => {
  const supabase = createServerSupabaseClient();
  const { data: people, error } = await supabase.from("people").select("*");

  if (error) throw Error(error.message);
  if (!people) return notFound();

  return people;
};

export const getPerson = async (id: string) => {
  uuidOrNotFound(id);

  const supabase = createServerSupabaseClient();

  const { data: person, error } = await supabase
    .from("people")
    .select("*")
    .eq("id", id)
    .limit(1)
    .maybeSingle();

  if (error) throw Error(error.message);
  if (!person) return notFound();

  return person;
};
