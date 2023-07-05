"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

/**
 * Client side function for showing an alert with links to home and the previous page visited before logging in
 */
export default function RedirectButton() {
  const searchParams = useSearchParams();
  const next = searchParams.get("next");

  if (!next || next === "/") return null;
  return (
    <Link href={next} className="btn btn-sm btn-light me-2">
      Return to {searchParams.get("next")}
    </Link>
  );
}
