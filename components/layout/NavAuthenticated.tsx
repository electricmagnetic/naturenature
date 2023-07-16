"use client";

import { PropsWithChildren } from "react";
import Link from "next/link";
import { Session } from "@supabase/auth-helpers-nextjs";

import Icon from "@/components/ui/Icon";

const NavbarLink = ({
  iconName,
  href,
  isDropdownItem = false,
  children,
  ...others
}: PropsWithChildren<{
  iconName: string;
  href: string;
  isDropdownItem?: boolean;
}>) => (
  <li className={isDropdownItem ? "" : "nav-item"}>
    <Link
      className={isDropdownItem ? "dropdown-item" : "nav-link"}
      href={href}
      {...others}
    >
      <Icon iconName={iconName} />
      {children}
    </Link>
  </li>
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
        <ul className="navbar-nav me-auto">
          <NavbarLink href="/events" iconName="calendar">
            Events
          </NavbarLink>
          <NavbarLink href="/records" iconName="database">
            Records
          </NavbarLink>
          <NavbarLink href="/individuals" iconName="bullseye">
            Individuals
          </NavbarLink>
          <NavbarLink href="/objects" iconName="box-seam">
            Objects
          </NavbarLink>
          <NavbarLink href="/places" iconName="geo-alt">
            Places
          </NavbarLink>
          <NavbarLink href="/people" iconName="people">
            People
          </NavbarLink>
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <Icon iconName="plus-circle" />
              Create
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              {/*<NavbarLink isDropdownItem href="/create/event" iconName="calendar">
                Event
              </NavbarLink>
              <NavbarLink isDropdownItem href="/create/record" iconName="database">
                Record
              </NavbarLink>
              <NavbarLink isDropdownItem href="/create/individual" iconName="bullseye">
                Individual
              </NavbarLink>
              <NavbarLink isDropdownItem href="/create/object" iconName="box-seam">
                Object
              </NavbarLink>
              <NavbarLink isDropdownItem href="/create/place" iconName="geo-alt">
                Place
              </NavbarLink>
              <NavbarLink isDropdownItem href="/create/person" iconName="people">
                Person
  </NavbarLink>*/}
            </ul>
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
