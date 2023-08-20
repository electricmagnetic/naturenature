import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import revalidate from "@/components/helpers/revalidate";
import type { Database } from "@/types/_supabase";
import type { IndividualDto } from "../types";

export const upsertIndividual = async (values: IndividualDto) => {
  const supabase = createClientComponentClient<Database>();

  const { status, data, error } = await supabase
    .from("individuals")
    .upsert(values)
    .select()
    .single();

  if (status === 201) await revalidate("/individuals");

  return { status, data, error };
};
