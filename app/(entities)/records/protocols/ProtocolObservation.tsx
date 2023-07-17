"use client";

import Link from "next/link";

import Card from "@/components/ui/Card";
import Lookup from "@/components/dictionary/Lookup";
import type { CompleteRecord } from "@/types/recordTypes";

export default function ProtocolObservation({
  record,
}: {
  record: CompleteRecord;
}) {
  return (
    <Card title="Observation">
      <Lookup>{record.type}</Lookup> of{" "}
      {record.individual && (
        <Link href={`/individuals/${record.individual.id}`}>
          {record.individual?.name}
        </Link>
      )}
    </Card>
  );
}
