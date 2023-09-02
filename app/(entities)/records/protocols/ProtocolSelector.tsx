import { useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import Lookup from "@/components/dictionary/Lookup";
import NavLink from "@/components/layout/NavLink";
import { protocolMetadata } from "./metadata";

export default function ProtocolSelector() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <>
      <ul className="nav flex-column nav-special">
        {Object.entries(protocolMetadata).map(([protocol, metadatum]) => (
          <NavLink
            key={protocol}
            href={`${pathname}?${createQueryString("protocol", protocol)}`}
            iconName={metadatum.iconName}
          >
            <strong>{metadatum.name}</strong>
            <br />
            <small>
              <Lookup description>{protocol}</Lookup>
            </small>
          </NavLink>
        ))}
      </ul>
    </>
  );
}
