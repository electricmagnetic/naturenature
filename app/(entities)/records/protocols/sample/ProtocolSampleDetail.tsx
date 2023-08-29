"use client";

import Link from "next/link";

import Card from "@/components/ui/Card";
import Lookup from "@/components/dictionary/Lookup";
import type { CompleteRecord } from "../../types";
import type { ProtocolSample } from "./schema";

export default function ProtocolSample({
  record,
}: {
  record: CompleteRecord & ProtocolSample;
}) {
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
      {record.data && (
        <div>
          {record.data.value} {record.data.units}
        </div>
      )}
    </Card>
  );
}
