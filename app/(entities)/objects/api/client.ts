import type { FieldValues } from "react-hook-form";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import revalidate from "@/components/helpers/revalidate";
import type { Database } from "@/types/_supabase";

export const upsertObject = async (values: FieldValues) => {
  const supabase = createClientComponentClient<Database>();

  const { status, data, error } = await supabase
    .from("objects")
    .upsert(values)
    .select()
    .single();

  if (status === 201) await revalidate("/objects");

  return { status, data, error };
};
