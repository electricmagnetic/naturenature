"use client";

import useSWR, { Fetcher } from "swr";

import type { TableRow } from "@/types/database";

type Dictionary = TableRow<"dictionary">[] | null;

// Key for use in localStorage
const DICTIONARY_KEY = "dictionary";

// Necessary for accessing Supabase REST API manually
const DICTIONARY_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/dictionary?select=*`;
const HEADERS = new Headers({
  apikey: `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
  authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
});

// localStorage helpers
const retrieveDictionary = async (): Promise<Dictionary> => {
  const data = window.localStorage.getItem(DICTIONARY_KEY);
  return data ? JSON.parse(data) : null;
};

const storeDictionary = (data: Dictionary) =>
  window.localStorage.setItem(DICTIONARY_KEY, JSON.stringify(data));

// SWR function to get dictionary from localStorage (if exists), otherwise fetch and store in localStorage
const fetcher: Fetcher<Dictionary> = async (url: string) => {
  const storedDictionary = await retrieveDictionary();
  if (storedDictionary) return storedDictionary;

  const result = await fetch(url, { headers: HEADERS });
  const data = await result.json();

  if (!result.ok) {
    // Catch 40x errors
    throw Error(`Error fetching dictionary (${data.message})`);
  }

  storeDictionary(data);
  return data;
};

/**
 * Provides a dictionary of terms (from the 'dictionary' table) used in dropdowns.
 * NB: By design, this data is assumed to be non-sensitive, and not subject to authentication.
 */
export default function useDictionary() {
  const { data: dictionary, error } = useSWR<Dictionary, Error>(
    DICTIONARY_URL,
    fetcher,
  );

  if (error) throw Error(error.message);
  if (!dictionary) return null;

  return dictionary;
}
