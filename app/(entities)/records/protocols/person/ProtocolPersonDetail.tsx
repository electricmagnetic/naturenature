"use client";

import Link from "next/link";

import Block from "@/components/ui/Block";
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
  <div className="col-md-4">
    <Block entity="record" id={record.id}>
      <Link href={`/people/${record.person?.id}`}>{record.person?.name}</Link> (
      <Lookup>{record.type}</Lookup>)
    </Block>
  </div>
);
