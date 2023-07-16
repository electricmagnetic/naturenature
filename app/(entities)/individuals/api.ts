import { cookies } from "next/headers";
import { notFound } from "next/navigation";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import type { Database } from "@/types/_supabase";

export const getIndividuals = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: individuals, error } = await supabase
    .from("individuals")
    .select("*, records(count)");

  if (error) throw Error(error.message);
  if (!individuals) return notFound();

  return individuals;
};

export const getIndividual = async (id: string) => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: individual, error } = await supabase
    .from("individuals")
    .select("*")
    .eq("id", id)
    .limit(1)
    .single();

  if (error) throw Error(error.message);
  if (!individual) return notFound();

  return individual;
};
