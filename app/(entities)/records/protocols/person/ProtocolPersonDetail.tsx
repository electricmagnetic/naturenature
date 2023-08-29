"use client";

import Link from "next/link";

import Card from "@/components/ui/Card";
import Lookup from "@/components/dictionary/Lookup";
import type { CompleteRecord } from "../../types";
import type { ProtocolPerson } from "./schema";

export default function ProtocolPerson({
  record,
}: {
  record: CompleteRecord & ProtocolPerson;
}) {
  return (
    <Card title="Person">
      <Link href={`/people/${record.person?.id}`}>{record.person?.name}</Link> (
      <Lookup>{record.type}</Lookup>)
    </Card>
  );
}
