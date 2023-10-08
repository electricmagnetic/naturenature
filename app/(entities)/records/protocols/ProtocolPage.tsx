import { isProtocol } from "./helpers";

import type { Protocol } from "./metadata";
import type { CompleteRecord, ProtocolDetailComponents } from "../types";
import type { DisplayProps } from "./ProtocolBlock";

import { ProtocolCitizenPage } from "./citizen/ProtocolCitizenDetail";
import { ProtocolGroupPage } from "./group/ProtocolGroupDetail";
import { ProtocolIdentifierPage } from "./identifier/ProtocolIdentifierDetail";
import { ProtocolInterventionPage } from "./intervention/ProtocolInterventionDetail";
import { ProtocolMeasurementPage } from "./measurement/ProtocolMeasurementDetail";
import { ProtocolMediaPage } from "./media/ProtocolMediaDetail";
import { ProtocolObservationPage } from "./observation/ProtocolObservationDetail";
import { ProtocolPersonPage } from "./person/ProtocolPersonDetail";
import { ProtocolSamplePage } from "./sample/ProtocolSampleDetail";

const pageComponents: ProtocolDetailComponents = {
  CITIZEN: ProtocolCitizenPage,
  GROUP: ProtocolGroupPage,
  IDENTIFIER: ProtocolIdentifierPage,
  INTERVENTION: ProtocolInterventionPage,
  MEASUREMENT: ProtocolMeasurementPage,
  MEDIA: ProtocolMediaPage,
  OBSERVATION: ProtocolObservationPage,
  PERSON: ProtocolPersonPage,
  SAMPLE: ProtocolSamplePage,
};

export default function ProtocolPage({
  protocol,
  record,
  ...others
}: {
  protocol: Protocol | string;
  record: CompleteRecord;
  displayProps?: DisplayProps;
}) {
  if (!isProtocol(protocol)) throw Error("Invalid protocol");

  const ProtocolDetailComponent = pageComponents[protocol];
  return <ProtocolDetailComponent record={record} {...others} />;
}
