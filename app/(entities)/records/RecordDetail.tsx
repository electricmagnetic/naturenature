import Section from "@/components/layout/Section";
import Properties from "@/components/ui/Properties";
import type { CompleteRecord } from "@/types/recordTypes";

import Protocol from "./protocols/Protocol";
import Lookup from "@/components/dictionary/Lookup";

export default async function RecordDetail({
  record,
}: {
  record: CompleteRecord;
}) {
  return (
    <>
      <Section isPrimary>
        <Properties>
          <Properties.Item name="Protocol">
            <Lookup formatted>{record.protocol}</Lookup>
          </Properties.Item>
        </Properties>
      </Section>
      <Section>
        <Protocol record={record} />
      </Section>
    </>
  );
}