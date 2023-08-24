"use client";

import Card from "@/components/ui/Card";
import Lookup from "@/components/dictionary/Lookup";
import type { CompleteRecord } from "../../types";

export default function ProtocolGroup({ record }: { record: CompleteRecord }) {
  return (
    <Card title="Group">
      <Lookup>{record.type}</Lookup>
    </Card>
  );
}
