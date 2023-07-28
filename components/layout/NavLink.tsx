"use client";

import { PropsWithChildren } from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Icon from "@/components/ui/Icon";

export default function NavLink({
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
}>) {
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
}
