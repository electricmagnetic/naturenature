import { usePathname, useSearchParams } from "next/navigation";

import Lookup from "@/components/dictionary/Lookup";
import NavLink from "@/components/layout/NavLink";
import { protocolMetadata } from "./metadata";
import createQueryString from "@/components/helpers/createQueryString";

export default function ProtocolSelector() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <>
      <ul className="nav flex-column nav-special">
        {Object.entries(protocolMetadata).map(([protocol, metadatum]) => (
          <NavLink
            key={protocol}
            href={`${pathname}?${createQueryString(
              "protocol",
              protocol,
              searchParams,
            )}`}
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
