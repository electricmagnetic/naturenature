"use client";

import Link from "next/link";

import Block from "@/components/ui/Block";
import Card from "@/components/ui/Card";
import Lookup from "@/components/dictionary/Lookup";
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
  <div className="col-md-4">
    <Block entity="record" id={record.id}>
      <Lookup formatted>{record.action}</Lookup>{" "}
      {record.individual && (
        <Link href={`/individuals/${record.individual.id}`}>
          {record.individual?.name}
        </Link>
      )}{" "}
      (<Lookup>{record.type}</Lookup>)
    </Block>
  </div>
);
