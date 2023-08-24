"use client";

import Section from "@/components/layout/Section";
import Lookup from "@/components/dictionary/Lookup";
import ProtocolForm from "./protocols/ProtocolForm";
import type { Record } from "./types";

export default function RecordForm({ record }: { record?: Record }) {
  return (
    <>
      <Section>
        <Lookup>{record?.protocol}</Lookup>
      </Section>
      <ProtocolForm record={record} />
    </>
  );
}
