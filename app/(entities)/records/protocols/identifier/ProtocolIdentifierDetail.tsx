"use client";

import Link from "next/link";

import Card from "@/components/ui/Card";
import Lookup from "@/components/dictionary/Lookup";
import type { CompleteRecord } from "../../types";
import type { ProtocolIdentifier } from "./schema";

export default function ProtocolIdentifier({
  record,
}: {
  record: CompleteRecord & ProtocolIdentifier;
}) {
  return (
    <Card title="Identifier">
      <Lookup formatted>{record.action}</Lookup>{" "}
      {record.object && (
        <Link href={`/objects/${record.object.id}`}>
          <Lookup>{record.object.type}</Lookup>: {record.object.name}
        </Link>
      )}{" "}
      to{" "}
      {record.individual && (
        <Link href={`/individuals/${record.individual.id}`}>
          {record.individual.name}
        </Link>
      )}
    </Card>
  );
}
