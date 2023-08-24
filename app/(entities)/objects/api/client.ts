import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import revalidate from "@/components/helpers/revalidate";
import type { Database } from "@/types/_supabase";
import type { ObjectDto } from "../types";

export const upsertObject = async (values: ObjectDto) => {
  const supabase = createClientComponentClient<Database>();

  const { status, data, error } = await supabase
    .from("objects")
    .upsert(values)
    .select()
    .maybeSingle();

  if (status === 201) await revalidate("/objects");

  return { status, data, error };
};
