"use client";
import Link from "next/link";

import { Session } from "@supabase/auth-helpers-nextjs";

export default function AuthenticatedNav({ session }: { session: Session }) {
  if (typeof window !== "undefined") {
    require("bootstrap");
  }

  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" href="/">
              <i className="bi-house me-2" style={{ width: "1em" }}></i>Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/events">
              <i
                className="bi-calendar-check me-2"
                style={{ width: "1em" }}
              ></i>
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/individuals">
              <i className="bi-star me-2" style={{ width: "1em" }}></i>
              Individuals
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/account">
              <i className="bi-person-circle me-2" style={{ width: "1em" }}></i>
              Account
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
