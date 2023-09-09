import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import revalidate from "@/components/helpers/revalidate";
import type { Database } from "@/types/_supabase";
import type { RecordDto } from "../types";

export const upsertRecord = async (values: RecordDto) => {
  const supabase = createClientComponentClient<Database>();

  const { status, data, error } = await supabase
    .from("records")
    .upsert(values)
    .select()
    .maybeSingle();

  if (status === 201) await revalidate("/records");

  return { status, data, error };
};
