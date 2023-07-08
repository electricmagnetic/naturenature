"use client";

import { useSearchParams } from "next/navigation";

import Toolbar from "@/components/ui/Toolbar";

/**
 * Client side function for showing an alert with links to home and the previous page visited before logging in
 */
export default function RedirectLink() {
  const searchParams = useSearchParams();
  const next = searchParams.get("next");

  if (!next || next === "/") return null;
  return (
    <Toolbar.Link href={next} iconName="arrow-counterclockwise">
      Return to {searchParams.get("next")}
    </Toolbar.Link>
  );
}
