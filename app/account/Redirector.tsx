"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

/**
 * Client side function for showing an alert with links to home and the previous page visited before logging in
 */
export default function Redirector() {
  const searchParams = useSearchParams();
  const next = searchParams.get("next");

  if (!next) return null;
  return (
    <div className="alert alert-success" role="alert">
      <h2 className="alert-heading h4">Logged in</h2>
      <div>
        <Link href="/" className="btn btn-sm btn-light me-2">
          Home
        </Link>
        {next !== "/" && (
          <Link href={next} className="btn btn-sm btn-light me-2">
            Return to {searchParams.get("next")}
          </Link>
        )}
      </div>
    </div>
  );
}
