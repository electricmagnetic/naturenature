"use client";

import Link from "next/link";

import Card from "@/components/ui/Card";
import Lookup from "@/components/dictionary/Lookup";
import type { CompleteRecord, ProtocolMeasurementData } from "../../types";

export default function ProtocolMeasurement({
  record,
}: {
  record: CompleteRecord;
}) {
  const data = record.data as ProtocolMeasurementData;

  return (
    <Card title="Measurement">
      <div>
        <Lookup formatted>{record.action}</Lookup>{" "}
        <Lookup>{record.type}</Lookup> of{" "}
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
