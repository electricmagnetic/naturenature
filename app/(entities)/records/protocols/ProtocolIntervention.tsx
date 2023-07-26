"use client";

import Link from "next/link";

import Card from "@/components/ui/Card";
import Lookup from "@/components/dictionary/Lookup";
import type { CompleteRecord } from "../types";

export default function ProtocolIntervention({
  record,
}: {
  record: CompleteRecord;
}) {
  return (
    <Card title="Intervention">
      <Lookup formatted>{record.action}</Lookup>{" "}
      {record.individual && (
        <Link href={`/individuals/${record.individual.id}`}>
          {record.individual?.name}
        </Link>
      )}{" "}
      (<Lookup>{record.type}</Lookup>)
    </Card>
  );
}
