import { notFound } from "next/navigation";

import createServerSupabaseClient from "@/components/helpers/createServerSupabaseClient";
import uuidOrNotFound from "@/components/helpers/uuidOrNotFound";

export const getIndividuals = async () => {
  const supabase = createServerSupabaseClient();
  const { data: individuals, error } = await supabase
    .from("individuals")
    .select("*")
    .order("name");

  if (error) throw Error(error.message);
  if (!individuals) return notFound();

  return individuals;
};

export const getIndividual = async (id: string) => {
  uuidOrNotFound(id);

  const supabase = createServerSupabaseClient();

  const { data: individual, error } = await supabase
    .from("individuals")
    .select("*")
    .eq("id", id)
    .limit(1)
    .maybeSingle();

  if (error) throw Error(error.message);
  if (!individual) return notFound();

  return individual;
};
