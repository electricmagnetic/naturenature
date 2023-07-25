import { cookies } from "next/headers";
import { notFound } from "next/navigation";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import type { Database } from "@/types/_supabase";

export const getMedia = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: media, error } = await supabase.from("media").select("*");

  if (error) throw Error(error.message);
  if (!media) return notFound();

  return media;
};

export const getMediaItem = async (id: string) => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: mediaItem, error } = await supabase
    .from("media")
    .select("*")
    .eq("id", id)
    .limit(1)
    .single();

  if (error) throw Error(error.message);
  if (!mediaItem) return notFound();

  return mediaItem;
};
