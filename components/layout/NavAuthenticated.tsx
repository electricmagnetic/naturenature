"use client";

import { PropsWithChildren } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Session } from "@supabase/auth-helpers-nextjs";

import metadata from "@/app/(entities)/metadata";
import Icon from "@/components/ui/Icon";

const NavbarLink = ({
  iconName,
  href,
  isDropdownItem = false,
  exact = false,
  children,
  ...others
}: PropsWithChildren<{
  iconName: string;
  href: string;
  isDropdownItem?: boolean;
  exact?: boolean;
}>) => {
  const pathname = usePathname();
  const isActive = exact ? !!(pathname === href) : !!pathname.startsWith(href);

  return (
    <li className={isDropdownItem ? "" : "nav-item"}>
      <Link
        className={clsx(
          isDropdownItem ? "dropdown-item" : "nav-link",
          isActive && "active",
        )}
        href={href}
        aria-current={isActive && "page"}
        {...others}
      >
        <Icon iconName={iconName} />
        {children}
      </Link>
    </li>
  );
};

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
          {Object.keys(metadata).map((entity) => (
            <NavbarLink
              key={entity}
              href={metadata[entity].baseLink}
              iconName={metadata[entity].iconName}
            >
              {metadata[entity].pluralName}
            </NavbarLink>
          ))}
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
              {Object.keys(metadata).map((entity) => (
                <NavbarLink
                  key={entity}
                  isDropdownItem
                  href={`/create/${entity}`}
                  iconName={metadata[entity].iconName}
                >
                  {metadata[entity].name}
                </NavbarLink>
              ))}
            </ul>
          </li>
          <NavbarLink href="/account" iconName="person-circle">
            Account
          </NavbarLink>
        </ul>
      </div>
    </>
  );
}
