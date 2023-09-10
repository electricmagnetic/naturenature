"use client";

import Link from "next/link";

import Block from "@/components/ui/Block";
import Card from "@/components/ui/Card";
import Lookup from "@/components/dictionary/Lookup";
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
  <div className="col-md-4">
    <Block entity="record" id={record.id}>
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
    </Block>
  </div>
);
