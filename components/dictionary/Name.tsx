"use client";

import { PropsWithChildren } from "react";

import useNames from "./useNames";

/**
 * Looks up a given ID in the list of names and returns its name as a string.
 */
export default function Name({ children }: PropsWithChildren) {
  const names = useNames();
  console.log(names);

  if (typeof children !== "string") return null;

  const name = names?.filter((name) => name.id === children)[0];

  if (!name)
    return <span className="text-body-secondary fst-italic">{children}</span>;

  return name.name;
}
