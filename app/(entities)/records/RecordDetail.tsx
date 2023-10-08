import Link from "next/link";

import Section from "@/components/layout/Section";
import Properties from "@/components/ui/Properties";
import Lookup from "@/components/dictionary/Lookup";
import { isProtocol } from "./protocols/helpers";
import type { CompleteRecord } from "./types";

import ProtocolPage from "./protocols/ProtocolPage";

export default function RecordDetail({ record }: { record: CompleteRecord }) {
  const { protocol } = record;

  if (!isProtocol(protocol)) throw Error("Invalid protocol");

  return (
    <>
      <Section isPrimary>
        <Properties>
          <Properties.Item name="Linked Event">
            <Link href={`/events/${record.event_id}`}>Event</Link>
          </Properties.Item>
          <Properties.Item name="Protocol">
            <Lookup formatted>{protocol}</Lookup>
          </Properties.Item>
        </Properties>
      </Section>
      <Section>
        <ProtocolPage protocol={protocol} record={record} />
      </Section>
    </>
  );
}
