import ProtocolCitizenDetail from "./citizen/ProtocolCitizenDetail";
import ProtocolGroupDetail from "./group/ProtocolGroupDetail";
import ProtocolIdentifierDetail from "./identifier/ProtocolIdentifierDetail";
import ProtocolInterventionDetail from "./intervention/ProtocolInterventionDetail";
import ProtocolMeasurementDetail from "./measurement/ProtocolMeasurementDetail";
import ProtocolMediaDetail from "./media/ProtocolMediaDetail";
import ProtocolObservationDetail from "./observation/ProtocolObservationDetail";
import ProtocolPersonDetail from "./person/ProtocolPersonDetail";
import ProtocolSampleDetail from "./sample/ProtocolSampleDetail";

import type { Protocol } from "./metadata";
import type { CompleteRecord, ProtocolComponents } from "../types";
import { isProtocol } from "./helpers";

const protocolComponents: ProtocolComponents<{ record: CompleteRecord }> = {
  CITIZEN: ProtocolCitizenDetail,
  GROUP: ProtocolGroupDetail,
  IDENTIFIER: ProtocolIdentifierDetail,
  INTERVENTION: ProtocolInterventionDetail,
  MEASUREMENT: ProtocolMeasurementDetail,
  MEDIA: ProtocolMediaDetail,
  OBSERVATION: ProtocolObservationDetail,
  PERSON: ProtocolPersonDetail,
  SAMPLE: ProtocolSampleDetail,
};

export default function ProtocolDetail({
  protocol,
  record,
  ...others
}: {
  protocol: Protocol | string;
  record: CompleteRecord;
}) {
  if (!isProtocol(protocol)) throw Error("Invalid protocol");

  const SpecificProtocol = protocolComponents[protocol];
  return <SpecificProtocol record={record} {...others} />;
}
