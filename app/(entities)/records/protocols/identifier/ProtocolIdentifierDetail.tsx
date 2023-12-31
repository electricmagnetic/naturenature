"use client";

import Link from "next/link";

import Card from "@/app/_components/ui/Card";
import Lookup from "@/app/_components/dictionary/Lookup";
import type { CompleteRecord } from "../../types";
import type { ProtocolIdentifier } from "./schema";

export const ProtocolIdentifierPage = ({
  record,
}: {
  record: CompleteRecord & ProtocolIdentifier;
}) => (
  <Card>
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

export const ProtocolIdentifierBlock = ({
  record,
}: {
  record: CompleteRecord & ProtocolIdentifier;
}) => (
  <div>
    <Lookup formatted>{record.action}</Lookup>{" "}
    {record.object && (
      <Link href={`/objects/${record.object.id}`}>
        <Lookup>{record.object.type}</Lookup>: {record.object.name}
      </Link>
    )}
  </div>
);
