"use client";

import { useSearchParams } from "next/navigation";

import Section from "@/components/layout/Section";
import Lookup from "@/components/dictionary/Lookup";
import ProtocolForm from "./protocols/ProtocolForm";
import ProtocolSelector from "./protocols/ProtocolSelector";
import { isProtocol } from "./protocols/helpers";
import type { Record } from "./types";
import Properties from "@/components/ui/Properties";

export default function RecordForm({ record }: { record?: Record }) {
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
        <ProtocolForm protocol={protocol} record={record} />
      </>
    );
  }

  return <ProtocolSelector />;
}
