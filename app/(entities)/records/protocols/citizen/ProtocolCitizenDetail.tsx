"use client";

import Link from "next/link";

import Card from "@/components/ui/Card";
import Lookup from "@/components/dictionary/Lookup";
import type { CompleteRecord } from "../../types";
import type { ProtocolCitizen } from "./schema";

export default function ProtocolCitizen({
  record,
}: {
  record: CompleteRecord & ProtocolCitizen;
}) {
  return (
    <Card title="Citizen">
      <Lookup>{record.type}</Lookup>
      {record.data && (
        <div>
          <p>
            {record.data.banded} {record.data.band_combo}
          </p>
          <p>
            {record.data.life_stage_guess} {record.data.sex_guess}
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
