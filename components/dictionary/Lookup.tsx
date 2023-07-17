"use client";

import { PropsWithChildren } from "react";

import useDictionary from "./useDictionary";
import clsx from "clsx";

/**
 * Looks up a given ID in the dictionary and returns its name as a string (by default), or a formatted span (option).
 */
export default function Lookup({
  formatted,
  children,
}: PropsWithChildren<{ formatted?: boolean }>) {
  const dictionary = useDictionary();

  if (typeof children !== "string") return null;

  const term = dictionary?.filter((term) => term.id === children)[0];

  if (!term) return null;
  if (formatted)
    return (
      <span
        className={clsx(
          term.class === "protocol" && "text-uppercase",
          term.class === "action" && "fst-italic",
        )}
      >
        {term.name}
      </span>
    );

  return term.name;
}
