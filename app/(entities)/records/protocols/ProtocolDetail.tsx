import {
  ProtocolCitizenBlock,
  ProtocolCitizenPage,
} from "./citizen/ProtocolCitizenDetail";
import {
  ProtocolGroupBlock,
  ProtocolGroupPage,
} from "./group/ProtocolGroupDetail";
import {
  ProtocolIdentifierBlock,
  ProtocolIdentifierPage,
} from "./identifier/ProtocolIdentifierDetail";
import {
  ProtocolInterventionBlock,
  ProtocolInterventionPage,
} from "./intervention/ProtocolInterventionDetail";
import {
  ProtocolMeasurementBlock,
  ProtocolMeasurementPage,
} from "./measurement/ProtocolMeasurementDetail";
import {
  ProtocolMediaBlock,
  ProtocolMediaPage,
} from "./media/ProtocolMediaDetail";
import {
  ProtocolObservationBlock,
  ProtocolObservationPage,
} from "./observation/ProtocolObservationDetail";
import {
  ProtocolPersonBlock,
  ProtocolPersonPage,
} from "./person/ProtocolPersonDetail";
import {
  ProtocolSampleBlock,
  ProtocolSamplePage,
} from "./sample/ProtocolSampleDetail";

import { isProtocol } from "./helpers";

import type { Protocol } from "./metadata";
import type { CompleteRecord, ProtocolComponents } from "../types";

type ProtocolDetailComponents = ProtocolComponents<{ record: CompleteRecord }>;

const blockComponents: ProtocolDetailComponents = {
  CITIZEN: ProtocolCitizenBlock,
  GROUP: ProtocolGroupBlock,
  IDENTIFIER: ProtocolIdentifierBlock,
  INTERVENTION: ProtocolInterventionBlock,
  MEASUREMENT: ProtocolMeasurementBlock,
  MEDIA: ProtocolMediaBlock,
  OBSERVATION: ProtocolObservationBlock,
  PERSON: ProtocolPersonBlock,
  SAMPLE: ProtocolSampleBlock,
};

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

export default function ProtocolDetail({
  protocol,
  record,
  asBlock,
  ...others
}: {
  protocol: Protocol | string;
  record: CompleteRecord;
  asBlock?: boolean;
}) {
  if (!isProtocol(protocol)) throw Error("Invalid protocol");

  const ProtocolDetailComponent = asBlock
    ? blockComponents[protocol]
    : pageComponents[protocol];
  return <ProtocolDetailComponent record={record} {...others} />;
}
