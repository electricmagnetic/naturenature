"use client";

import Link from "next/link";

import Card from "@/components/ui/Card";
import Lookup from "@/components/dictionary/Lookup";
import type { CompleteRecord } from "../../types";
import type { ProtocolMeasurement } from "./schema";

export default function ProtocolMeasurement({
  record,
}: {
  record: CompleteRecord & ProtocolMeasurement;
}) {
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
      {record.data && (
        <div>
          {record.data.value} {record.data.units}
        </div>
      )}
    </Card>
  );
}
