"use client";

import { useSearchParams } from "next/navigation";

import ActionButton from "@/components/ui/ActionButton";

/**
 * Client side function for showing an alert with links to home and the previous page visited before logging in
 */
export default function RedirectLink() {
  const searchParams = useSearchParams();
  const next = searchParams.get("next");

  if (!next || next === "/") return null;
  return (
    <ActionButton href={next} iconName="arrow-counterclockwise">
      Return to {searchParams.get("next")}
    </ActionButton>
  );
}
