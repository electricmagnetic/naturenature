"use client";

import Link from "next/link";

import Card from "@/components/ui/Card";
import Lookup from "@/components/dictionary/Lookup";
import type { CompleteRecord } from "@/types/recordTypes";

export default function ProtocolIdentifier({
  record,
}: {
  record: CompleteRecord;
}) {
  return (
    <Card title="Identifier">
      <Lookup formatted>{record.action}</Lookup> {record.object?.name} to{" "}
      {record.individual && (
        <Link href={`/individuals/${record.individual.id}`}>
          {record.individual?.name}
        </Link>
      )}
    </Card>
  );
}
