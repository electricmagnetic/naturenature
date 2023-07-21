import { FC } from "react";

import Message from "@/components/ui/Message";
import ProtocolCitizen from "./ProtocolCitizen";
import ProtocolGroup from "./ProtocolGroup";
import ProtocolIdentifier from "./ProtocolIdentifier";
import ProtocolIntervention from "./ProtocolIntervention";
import ProtocolMeasurement from "./ProtocolMeasurement";
import ProtocolMedia from "./ProtocolMedia";
import ProtocolObservation from "./ProtocolObservation";
import ProtocolPerson from "./ProtocolPerson";
import ProtocolSample from "./ProtocolSample";

import type { CompleteRecord, ProtocolComponent } from "@/types/recordTypes";

const protocolComponents: ProtocolComponent = {
  CITIZEN: ProtocolCitizen,
  GROUP: ProtocolGroup,
  IDENTIFIER: ProtocolIdentifier,
  INTERVENTION: ProtocolIntervention,
  MEASUREMENT: ProtocolMeasurement,
  MEDIA: ProtocolMedia,
  OBSERVATION: ProtocolObservation,
  PERSON: ProtocolPerson,
  SAMPLE: ProtocolSample,
};

export default function Protocol({
  record,
  className,
  ...others
}: {
  record: CompleteRecord;
  className?: string;
}) {
  const { protocol } = record;

  const SpecificProtocol = protocolComponents[protocol];
  if (!SpecificProtocol) return <Message>Protocol parser not found</Message>;

  return (
    <div className={className}>
      <SpecificProtocol record={record} {...others} />
    </div>
  );
}
