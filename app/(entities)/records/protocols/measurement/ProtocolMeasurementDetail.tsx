"use client";

import Link from "next/link";

import Card from "@/app/_components/ui/Card";
import Lookup from "@/app/_components/dictionary/Lookup";
import type { CompleteRecord } from "../../types";
import type { ProtocolMeasurement } from "./schema";

export const ProtocolMeasurementPage = ({
  record,
}: {
  record: CompleteRecord & ProtocolMeasurement;
}) => (
  <Card>
    <div>
      <Lookup formatted>{record.action}</Lookup> <Lookup>{record.type}</Lookup>{" "}
      of{" "}
      {record.individual && (
        <Link href={`/individuals/${record.individual.id}`}>
          {record.individual?.name}
        </Link>
      )}
    </div>
    {record.data && (
      <div>
        {record.data.value} <Lookup>{record.data.units}</Lookup>
      </div>
    )}
  </Card>
);

export const ProtocolMeasurementBlock = ({
  record,
}: {
  record: CompleteRecord & ProtocolMeasurement;
}) => (
  <div className="row">
    <div className="col">
      <Lookup formatted>{record.action}</Lookup> <Lookup>{record.type}</Lookup>
    </div>
    {record.data && (
      <div className="col">
        {record.data.value} <Lookup>{record.data.units}</Lookup>
      </div>
    )}
  </div>
);
