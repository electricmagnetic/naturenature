import { notFound } from "next/navigation";

import createServerSupabaseClient from "@/components/helpers/createServerSupabaseClient";

export const getMedia = async () => {
  const supabase = createServerSupabaseClient();
  const { data: media, error } = await supabase.from("media").select("*");

  if (error) throw Error(error.message);
  if (!media) return notFound();

  return media;
};

export const getMediaItem = async (id: string) => {
  const supabase = createServerSupabaseClient();

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
