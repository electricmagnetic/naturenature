"use client";

import { PropsWithChildren } from "react";

import useDictionary from "./useDictionary";
import clsx from "clsx";

/**
 * Looks up a given ID in the dictionary and returns its name as a string (by default), or a formatted span (option).
 */
export default function Lookup({
  formatted = false,
  children,
}: PropsWithChildren<{ formatted?: boolean }>) {
  const dictionary = useDictionary();

  if (typeof children !== "string") return null;

  const term = dictionary?.filter((term) => term.id === children)[0];

  if (!term)
    return <span className="text-body-secondary fst-italic">{children}</span>;
  if (formatted)
    return (
      <span
        className={clsx(
          term.class === "protocol" && "text-uppercase",
          term.class === "action" && "fw-bold",
        )}
      >
        {term.name}
      </span>
    );

  return term.name;
}
