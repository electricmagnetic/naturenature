"use client";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import type { Row } from "@/types/database";
import type { Database } from "@/types/_supabase";

const STORED_DICTIONARY_KEY = "dictionary";
type Dictionary = Row<"dictionary">[] | null;

/**
 * Provides a dictionary of terms (from the 'dictionary' table) used in dropdowns.
 * NB: By design, this data is assumed to be non-sensitive, and not subject to authentication.
 */
export default function useDictionary() {
  const [dictionary, setDictionary] = useState<Dictionary>(null);

  // Get dictionary from sessionStorage (if exists) otherwise return null
  const retrieveDictionary = (): Dictionary => {
    const data = window.sessionStorage.getItem(STORED_DICTIONARY_KEY);
    return data ? JSON.parse(data) : null;
  };

  // Store dictionary in sessionStorage
  const storeDictionary = (data: Dictionary) =>
    window.sessionStorage.setItem(STORED_DICTIONARY_KEY, JSON.stringify(data));

  // Fetch dictionary from API and update 'dictionary' (state)
  const fetchDictionary = async () => {
    const supabase = createClientComponentClient<Database>();
    const { data, error } = await supabase.from("dictionary").select("*");

    if (error) throw Error(error.message);
    if (!data) return notFound();

    setDictionary(data);
  };

  // Saves 'dictionary' (state)
  useEffect(() => {
    if (dictionary) storeDictionary(dictionary);
  }, [dictionary]);

  // Retrieve dictionary from storage (if exists), otherwise fetch it
  useEffect(() => {
    const storedDictionary = retrieveDictionary();

    if (!storedDictionary) fetchDictionary();
    else setDictionary(storedDictionary);
  }, [setDictionary]);

  return dictionary;
}
