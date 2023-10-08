"use client";

import Link from "next/link";

import Card from "@/app/_components/ui/Card";
import Lookup from "@/app/_components/dictionary/Lookup";
import type { CompleteRecord } from "../../types";

export const ProtocolInterventionPage = ({
  record,
}: {
  record: CompleteRecord;
}) => (
  <Card>
    <Lookup formatted>{record.action}</Lookup>{" "}
    {record.individual && (
      <Link href={`/individuals/${record.individual.id}`}>
        {record.individual?.name}
      </Link>
    )}{" "}
    (<Lookup>{record.type}</Lookup>)
  </Card>
);

export const ProtocolInterventionBlock = ({
  record,
}: {
  record: CompleteRecord;
}) => (
  <div>
    <Lookup formatted>{record.action}</Lookup> <Lookup>{record.type}</Lookup>
  </div>
);
