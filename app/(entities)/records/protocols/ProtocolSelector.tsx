import Lookup from "@/components/dictionary/Lookup";
import NavLink from "@/components/layout/NavLink";
import { protocolMetadata } from "./metadata";

export default function ProtocolSelector() {
  return (
    <>
      <ul className="nav flex-column nav-special">
        {Object.entries(protocolMetadata).map(([protocol, metadatum]) => (
          <NavLink
            key={protocol}
            href={`/records/new/?protocol=${protocol}`}
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
