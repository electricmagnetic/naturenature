import Section from "@/components/layout/Section";
import Properties from "@/components/ui/Properties";
import type { CompleteRecord } from "./types";

import ProtocolDetail from "./protocols/ProtocolDetail";
import Lookup from "@/components/dictionary/Lookup";

export default function RecordDetail({ record }: { record: CompleteRecord }) {
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
        <ProtocolDetail record={record} />
      </Section>
    </>
  );
}
