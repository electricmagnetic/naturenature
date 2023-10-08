"use client";

import { useSearchParams } from "next/navigation";

import ActionButton from "@/components/ui/ActionButton";

/**
 * Button (client side) for showing an alert with links to home and the previous page visited before logging in
 */
export default function RedirectLinkButton() {
  const searchParams = useSearchParams();
  const next = searchParams.get("next");

  if (!next || next === "/") return null;
  return (
    <ActionButton
      href={next}
      iconName="arrow-counterclockwise"
      label={`Return to ${searchParams.get("next")}`}
    />
  );
}
