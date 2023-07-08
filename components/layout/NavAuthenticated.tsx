"use client";

import { PropsWithChildren } from "react";
import Link from "next/link";
import { Session } from "@supabase/auth-helpers-nextjs";

import Icon from "@/components/ui/Icon";

const NavbarLink = ({
  iconName,
  href,
  children,
  ...others
}: PropsWithChildren<{ iconName: string; href: string }>) => (
  <Link className="nav-link" href={href} {...others}>
    <Icon iconName={iconName} />
    {children}
  </Link>
);

export default function NavAuthenticated({ session }: { session: Session }) {
  if (typeof window !== "undefined") {
    require("bootstrap");
  }

  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbar">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavbarLink href="/" iconName="house">
              Home
            </NavbarLink>
          </li>
          <li className="nav-item">
            <NavbarLink href="/events" iconName="calendar-check">
              Events
            </NavbarLink>
          </li>
          <li className="nav-item">
            <NavbarLink href="/records" iconName="database">
              Records
            </NavbarLink>
          </li>
          <li className="nav-item">
            <NavbarLink href="/individuals" iconName="star">
              Individuals
            </NavbarLink>
          </li>
          <li className="nav-item">
            <NavbarLink href="/account" iconName="person-circle">
              Account
            </NavbarLink>
          </li>
        </ul>
      </div>
    </>
  );
}
