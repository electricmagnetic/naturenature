import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import revalidate from "@/components/helpers/revalidate";
import type { Database } from "@/types/_supabase";
import type { EventDto } from "../types";

export const upsertEvent = async (values: EventDto) => {
  const supabase = createClientComponentClient<Database>();

  const { status, data, error } = await supabase
    .from("events")
    .upsert(values)
    .select()
    .maybeSingle();

  if (status === 201) await revalidate("/events");

  return { status, data, error };
};
