"use client";

import type { SyntheticEvent } from "react";

import revalidate from "@/components/helpers/revalidate";

/**
 * Button (client side) for clearing local storage (forcing the front-end to redownload any stored data)
 */
export default function RevalidateCacheButton() {
  const handleOnClick = (e: SyntheticEvent) => {
    e.preventDefault();

    revalidate();
    alert("Cache revalidated");
  };

  return (
    <button className="btn btn-light" role="btn" onClick={handleOnClick}>
      Revalidate Cache
    </button>
  );
}
