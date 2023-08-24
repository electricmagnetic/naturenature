import Header from "@/components/layout/Header";
import Section from "@/components/layout/Section";

import metadata from "@/app/(entities)/records/protocols/metadata";
import Lookup from "@/components/dictionary/Lookup";
import NavLink from "@/components/layout/NavLink";

export default function CreateRecord() {
  return (
    <main>
      <Header.Entity entity="record" action={Header.Action.Create} />
      <Section title="Protocol">
        <ul className="nav flex-column nav-special">
          {Object.keys(metadata).map((protocol) => (
            <NavLink
              key={protocol}
              href={`/records/new/${protocol}`}
              iconName={metadata[protocol].iconName}
            >
              <strong>{metadata[protocol].name}</strong>
              <br />
              <small>
                <Lookup description>{metadata[protocol].dictionaryId}</Lookup>
              </small>
            </NavLink>
          ))}
        </ul>
      </Section>
    </main>
  );
}
