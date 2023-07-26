"use client";

import Link from "next/link";

import Card from "@/components/ui/Card";
import Lookup from "@/components/dictionary/Lookup";
import type { CompleteRecord, ProtocolCitizenData } from "../types";
export default function ProtocolCitizen({
  record,
}: {
  record: CompleteRecord;
}) {
  const data = record.data as ProtocolCitizenData;

  return (
    <Card title="Citizen">
      <Lookup>{record.type}</Lookup>
      {data && (
        <div>
          <p>
            {data.banded} {data.band_combo}
          </p>
          <p>
            {data.life_stage_guess} {data.sex_guess}
          </p>
        </div>
      )}
      {record.individual && (
        <Link href={`/individuals/${record.individual.id}`}>
          {record.individual?.name}
        </Link>
      )}
    </Card>
  );
}
