import Header from "@/components/layout/Header";
import Section from "@/components/layout/Section";

import Lookup from "@/components/dictionary/Lookup";
import NavLink from "@/components/layout/NavLink";
import { protocolMetadata } from "@/app/(entities)/records/protocols/metadata";

export default function CreateRecord() {
  return (
    <main>
      <Header.Entity entity="record" action={Header.Action.Create} />
      <Section title="Protocol">
        <ul className="nav flex-column nav-special">
          {Object.entries(protocolMetadata).map(([protocol, metadatum]) => (
            <NavLink
              key={protocol}
              href={`/records/new/${metadatum.routeId}`}
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
      </Section>
    </main>
  );
}
