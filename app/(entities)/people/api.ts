import { cookies } from "next/headers";
import { notFound } from "next/navigation";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import type { Database } from "@/types/_supabase";

export const getPeople = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: people, error } = await supabase.from("people").select("*");

  if (error) throw Error(error.message);
  if (!people) return notFound();

  return people;
};

export const getPerson = async (id: string) => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: person, error } = await supabase
    .from("people")
    .select("*")
    .eq("id", id)
    .limit(1)
    .single();

  if (error) throw Error(error.message);
  if (!person) return notFound();

  return person;
};
