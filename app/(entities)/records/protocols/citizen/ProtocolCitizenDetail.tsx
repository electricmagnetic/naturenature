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
    <Card>
      <Lookup>{record.type}</Lookup>
      {record.data && (
        <div>
          <p>
            <Lookup>{record.data.banded}</Lookup> {record.data.band_combo}
          </p>
          <p>
            <Lookup>{record.data.life_stage_guess}</Lookup>{" "}
            <Lookup>{record.data.sex_guess}</Lookup>
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
