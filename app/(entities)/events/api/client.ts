import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import revalidate from "@/components/helpers/revalidate";
import type { Database } from "@/types/_supabase";
import { InsertDto } from "@/types/database";

export const upsertEvent = async (entity: InsertDto<"events">) => {
  const supabase = createClientComponentClient<Database>();

  const { status, data, error } = await supabase
    .from("events")
    .upsert(entity)
    .select()
    .single();

  if (status === 201) await revalidate("/events");

  return { status, data, error };
};
