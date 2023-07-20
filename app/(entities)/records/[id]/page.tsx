import Header from "@/components/layout/Header";
import Section from "@/components/layout/Section";
import Properties from "@/components/ui/Properties";
import Protocol from "../protocols/Protocol";

import { getRecord } from "../api";

export default async function Record({
  params: { id },
}: {
  params: { id: string };
}) {
  const record = await getRecord(id);

  return (
    <main>
      <Header title={`Record: ${record.id}`} />
      <Section isPrimary>
        <Properties>
          <Properties.Item name="Protocol">{record.protocol}</Properties.Item>
        </Properties>
      </Section>
      <Section>
        <Protocol record={record} />
      </Section>
    </main>
  );
}
