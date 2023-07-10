import { FC } from "react";

import Message from "@/components/ui/Message";
import ProtocolGroup from "./ProtocolGroup";
import ProtocolIdentifier from "./ProtocolIdentifier";
import ProtocolIntervention from "./ProtocolIntervention";
import ProtocolMeasurement from "./ProtocolMeasurement";
import ProtocolObservation from "./ProtocolObservation";
import ProtocolPerson from "./ProtocolPerson";
import ProtocolSample from "./ProtocolSample";
import type { Row } from "@/types/database";

type Record = Row<"records">;
type ProtocolComponent = { [key: string]: FC<{ record: Record }> };

const protocolComponents: ProtocolComponent = {
  GROUP: ProtocolGroup,
  IDENTIFIER: ProtocolIdentifier,
  INTERVENTION: ProtocolIntervention,
  MEASUREMENT: ProtocolMeasurement,
  OBSERVATION: ProtocolObservation,
  PERSON: ProtocolPerson,
  SAMPLE: ProtocolSample,
};

export default function Protocol({
  record,
  className,
  ...others
}: {
  record: Record;
  className?: string;
}) {
  const { protocol } = record;

  if (!protocol) throw Error("Protocol missing from Record");

  const SpecificProtocol = protocolComponents[protocol];
  if (!SpecificProtocol) return <Message>Protocol parser not found</Message>;

  return (
    <div className={className}>
      <SpecificProtocol record={record} {...others} />
    </div>
  );
}
