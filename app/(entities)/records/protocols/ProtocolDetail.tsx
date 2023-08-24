import Message from "@/components/ui/Message";
import ProtocolCitizenDetail from "./citizen/ProtocolCitizenDetail";
import ProtocolGroupDetail from "./group/ProtocolGroupDetail";
import ProtocolIdentifierDetail from "./identifier/ProtocolIdentifierDetail";
import ProtocolInterventionDetail from "./intervention/ProtocolInterventionDetail";
import ProtocolMeasurementDetail from "./measurement/ProtocolMeasurementDetail";
import ProtocolMediaDetail from "./media/ProtocolMediaDetail";
import ProtocolObservationDetail from "./observation/ProtocolObservationDetail";
import ProtocolPersonDetail from "./person/ProtocolPersonDetail";
import ProtocolSampleDetail from "./sample/ProtocolSampleDetail";

import type { CompleteRecord, ProtocolComponent } from "../types";

const protocolComponents: ProtocolComponent = {
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
  record,
  className,
  ...others
}: {
  record: CompleteRecord;
  className?: string;
}) {
  const { protocol } = record;

  const SpecificProtocol = protocolComponents[protocol];
  if (!SpecificProtocol)
    return <Message>Protocol detail view not found</Message>;

  return (
    <div className={className}>
      <SpecificProtocol record={record} {...others} />
    </div>
  );
}
