import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import revalidate from "@/components/helpers/revalidate";
import type { Database } from "@/types/_supabase";
import type { PersonDto } from "../types";

export const upsertPerson = async (values: PersonDto) => {
  const supabase = createClientComponentClient<Database>();

  const { status, data, error } = await supabase
    .from("people")
    .upsert(values)
    .select()
    .single();

  if (status === 201) await revalidate("/people");

  return { status, data, error };
};
