"use client";

import Link from "next/link";

import Card from "@/components/ui/Card";
import Lookup from "@/components/dictionary/Lookup";
import type { CompleteRecord } from "../../types";
import type { ProtocolPerson } from "./schema";

export const ProtocolPersonPage = ({
  record,
}: {
  record: CompleteRecord & ProtocolPerson;
}) => (
  <Card>
    <Link href={`/people/${record.person?.id}`}>{record.person?.name}</Link> (
    <Lookup>{record.type}</Lookup>)
  </Card>
);

export const ProtocolPersonBlock = ({
  record,
}: {
  record: CompleteRecord & ProtocolPerson;
}) => (
  <div>
    <Link href={`/people/${record.person?.id}`}>{record.person?.name}</Link> (
    <Lookup>{record.type}</Lookup>)
  </div>
);
