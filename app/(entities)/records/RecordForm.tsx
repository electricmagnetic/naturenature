"use client";

import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";

import Lookup from "@/components/dictionary/Lookup";
import Section from "@/components/layout/Section";
import Properties from "@/components/ui/Properties";

import ProtocolForm from "./protocols/ProtocolForm";
import ProtocolSelector from "./protocols/ProtocolSelector";
import { RecordFormSchema } from "./validations";

import type { Record, RecordRelatedObjects } from "./types";

const ALLOWED_KEYS = ["protocol", "event_id"];

const getAndCheckSearchParams = (searchParams: ReadonlyURLSearchParams) => {
  const allowedParams = Object.fromEntries(
    ALLOWED_KEYS.map((key) => [key, searchParams.get(key)]).filter(
      (searchParam) => !!searchParam[1],
    ),
  );
  try {
    return RecordFormSchema.partial().parse(allowedParams);
  } catch {
    throw Error("Invalid URL parameters");
  }
};

export default function RecordForm({
  record,
  recordRelatedObjects,
}: {
  record?: Record;
  recordRelatedObjects?: RecordRelatedObjects;
}) {
  // Enable setting of certain Record values via search params (in ALLOWED_KEYS)
  const searchParams = useSearchParams();
  const valuesFromParams = getAndCheckSearchParams(searchParams);

  const paramsAndRecord = Object.assign({}, valuesFromParams, record); // prefer values in record

  // If protocol not provided via the search params or the record, show form
  if (!paramsAndRecord.protocol) {
    return (
      <Section title="Select protocol">
        <ProtocolSelector />
      </Section>
    );
  }

  // An event_id must be provided
  if (!paramsAndRecord.event_id) {
    return <Section title="Select event">TODO</Section>;
  }

  return (
    <>
      <Section isPrimary>
        <Properties>
          <Properties.Item name="Protocol">
            <Lookup formatted>{paramsAndRecord.protocol}</Lookup>
          </Properties.Item>
        </Properties>
      </Section>
      <ProtocolForm
        protocol={paramsAndRecord.protocol}
        valuesFromParams={valuesFromParams}
        record={record}
        recordRelatedObjects={recordRelatedObjects}
      />
    </>
  );
}
