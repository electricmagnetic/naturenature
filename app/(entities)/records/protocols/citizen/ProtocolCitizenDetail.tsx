"use client";

import Link from "next/link";

import Card from "@/app/_components/ui/Card";
import Lookup from "@/app/_components/dictionary/Lookup";
import type { CompleteRecord } from "../../types";
import type { ProtocolCitizen } from "./schema";

export const ProtocolCitizenPage = ({
  record,
}: {
  record: CompleteRecord & ProtocolCitizen;
}) => (
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

export const ProtocolCitizenBlock = ({
  record,
}: {
  record: CompleteRecord & ProtocolCitizen;
}) => (
  <div className="row">
    <div className="col">
      <Lookup>{record.type}</Lookup>
    </div>
    {record.data && (
      <div className="col">
        <Lookup>{record.data.banded}</Lookup> {record.data.band_combo}{" "}
        <Lookup>{record.data.life_stage_guess}</Lookup>{" "}
        <Lookup>{record.data.sex_guess}</Lookup>
      </div>
    )}
  </div>
);
