import { cookies } from "next/headers";
import { notFound } from "next/navigation";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import type { Database } from "@/types/_supabase";

export const getObjects = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: objects, error } = await supabase.from("objects").select("*");

  if (error) throw Error(error.message);
  if (!objects) return notFound();

  return objects;
};

export const getObject = async (id: string) => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: object, error } = await supabase
    .from("objects")
    .select("*")
    .eq("id", id)
    .limit(1)
    .single();

  if (error) throw Error(error.message);
  if (!object) return notFound();

  return object;
};
