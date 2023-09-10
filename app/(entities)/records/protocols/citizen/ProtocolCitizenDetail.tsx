"use client";

import Link from "next/link";

import Block from "@/components/ui/Block";
import Card from "@/components/ui/Card";
import Lookup from "@/components/dictionary/Lookup";
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
  <div className="col-md-4">
    <Block entity="record" id={record.id}>
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
    </Block>
  </div>
);
