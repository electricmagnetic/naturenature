"use client";

import type { SyntheticEvent } from "react";

/**
 * Button (client side) for clearing local storage (forcing the front-end to redownload any stored data)
 */
export default function ClearLocalStorageButton() {
  const handleOnClick = (e: SyntheticEvent) => {
    e.preventDefault();

    window.localStorage.clear();
    alert("Storage cleared");
  };

  return (
    <button className="btn btn-light" role="btn" onClick={handleOnClick}>
      Clear Storage
    </button>
  );
}
