"use client";

import { useSearchParams } from "next/navigation";

import Properties from "@/components/ui/Properties";
import Section from "@/components/layout/Section";
import Lookup from "@/components/dictionary/Lookup";
import ProtocolForm from "./protocols/ProtocolForm";
import ProtocolSelector from "./protocols/ProtocolSelector";
import { isProtocol } from "./protocols/helpers";
import type { Record, RecordRelatedObjects } from "./types";

export default function EventForm({
  record,
  recordRelatedObjects,
}: {
  record?: Record;
  recordRelatedObjects?: RecordRelatedObjects;
}) {
  const searchParams = useSearchParams();

  const protocol = record ? record.protocol : searchParams.get("protocol");

  if (protocol && isProtocol(protocol)) {
    return (
      <>
        <Section isPrimary>
          <Properties>
            <Properties.Item name="Protocol">
              <Lookup formatted>{protocol}</Lookup>
            </Properties.Item>
          </Properties>
        </Section>
        <ProtocolForm
          protocol={protocol}
          record={record}
          recordRelatedObjects={recordRelatedObjects}
        />
      </>
    );
  }

  return <ProtocolSelector />;
}
