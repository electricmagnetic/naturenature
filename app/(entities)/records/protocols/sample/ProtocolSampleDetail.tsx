"use client";

import Link from "next/link";

import Block from "@/components/ui/Block";
import Card from "@/components/ui/Card";
import Lookup from "@/components/dictionary/Lookup";
import type { CompleteRecord } from "../../types";
import type { ProtocolSample } from "./schema";

export const ProtocolSamplePage = ({
  record,
}: {
  record: CompleteRecord & ProtocolSample;
}) => (
  <Card>
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
        <div>
          {record.data.value} <Lookup>{record.data.units}</Lookup>
        </div>
        {record.data.comments && <small>{record.data.comments}</small>}
      </div>
    )}
  </Card>
);

export const ProtocolSampleBlock = ({
  record,
}: {
  record: CompleteRecord & ProtocolSample;
}) => (
  <div className="col-md-4">
    <Block entity="record" id={record.id}>
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
          <div>
            {record.data.value} <Lookup>{record.data.units}</Lookup>
          </div>
          {record.data.comments && <small>{record.data.comments}</small>}
        </div>
      )}
    </Block>
  </div>
);
