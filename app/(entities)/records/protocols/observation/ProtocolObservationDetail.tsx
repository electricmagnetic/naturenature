"use client";

import Link from "next/link";

import Card from "@/app/_components/ui/Card";
import Lookup from "@/app/_components/dictionary/Lookup";
import type { CompleteRecord } from "../../types";

export const ProtocolObservationPage = ({
  record,
}: {
  record: CompleteRecord;
}) => (
  <Card>
    <Lookup>{record.type}</Lookup> of{" "}
    {record.individual && (
      <Link href={`/individuals/${record.individual.id}`}>
        {record.individual?.name}
      </Link>
    )}
  </Card>
);

export const ProtocolObservationBlock = ({
  record,
}: {
  record: CompleteRecord;
}) => (
  <div>
    <Lookup>{record.type}</Lookup>
  </div>
);
