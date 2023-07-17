"use client";

import type { SyntheticEvent } from "react";

/**
 * Button (client side) for clearing session storage (forcing the front-end to redownload any stored data)
 */
export default function ClearSessionStorageButton() {
  const handleOnClick = (e: SyntheticEvent) => {
    e.preventDefault();

    window.sessionStorage.clear();
    alert("Storage cleared");
  };

  return (
    <button className="btn btn-light" role="btn" onClick={handleOnClick}>
      Clear Storage
    </button>
  );
}
