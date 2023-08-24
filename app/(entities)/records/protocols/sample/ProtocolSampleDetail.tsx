"use client";

import Link from "next/link";

import Card from "@/components/ui/Card";
import Lookup from "@/components/dictionary/Lookup";
import type { CompleteRecord, ProtocolSampleData } from "../../types";

export default function ProtocolSample({ record }: { record: CompleteRecord }) {
  const data = record.data as ProtocolSampleData;

  return (
    <Card title="Sample">
      <div>
        <Lookup formatted>{record.action}</Lookup>{" "}
        {record.object && (
          <Link href={`/objects/${record.object.id}`}>
            <Lookup>{record.object.type}</Lookup>
          </Link>
        )}{" "}
        from{" "}
        {record.individual && (
          <Link href={`/individuals/${record.individual.id}`}>
            {record.individual?.name}
          </Link>
        )}
      </div>
      {data && (
        <div>
          {data.value} {data.units}
        </div>
      )}
    </Card>
  );
}
