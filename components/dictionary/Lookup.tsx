"use client";

import { PropsWithChildren } from "react";
import clsx from "clsx";

import useDictionary from "./useDictionary";

/**
 * Looks up a given ID in the dictionary and returns its name as a string (by default), or a formatted span (option).
 */
export default function Lookup({
  formatted = false,
  description = false,
  children,
}: PropsWithChildren<{ formatted?: boolean; description?: boolean }>) {
  const dictionary = useDictionary();

  if (typeof children !== "string") return null;

  const term = dictionary?.filter((term) => term.id === children)[0];

  if (!term)
    return <span className="text-body-secondary fst-italic">{children}</span>;
  if (description) return term.description;
  if (formatted)
    return (
      <span
        className={clsx(
          term.class === "protocol" && "fw-semibold",
          term.class === "action" && "fw-bold",
        )}
      >
        {term.name}
      </span>
    );

  return term.name;
}
