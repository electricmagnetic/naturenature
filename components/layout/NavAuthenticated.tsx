"use client";

import type { Session } from "@supabase/auth-helpers-nextjs";

import { entityMetadata } from "@/app/(entities)/metadata";
import Icon from "@/components/ui/Icon";
import NavLink from "./NavLink";

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
          {Object.entries(entityMetadata).map(([entity, metadatum]) => (
            <NavLink
              key={entity}
              href={`/${metadatum.table}`}
              iconName={metadatum.iconName}
            >
              {metadatum.pluralName}
            </NavLink>
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
              {Object.entries(entityMetadata).map(([entity, metadatum]) => (
                <NavLink
                  key={entity}
                  isDropdownItem
                  href={`/${metadatum.table}/new`}
                  iconName={metadatum.iconName}
                >
                  {metadatum.name}
                </NavLink>
              ))}
            </ul>
          </li>
          <NavLink href="/account" iconName="person-circle">
            Account
          </NavLink>
        </ul>
      </div>
    </>
  );
}
