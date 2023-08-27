import type { Protocol } from "./metadata";
import type { Record, ProtocolComponents } from "../types";

const ProtocolDummyForm = () => <span>Dummy Form</span>;

const protocolComponents: ProtocolComponents<{ record?: Record }> = {
  CITIZEN: ProtocolDummyForm,
  GROUP: ProtocolDummyForm,
  IDENTIFIER: ProtocolDummyForm,
  INTERVENTION: ProtocolDummyForm,
  MEASUREMENT: ProtocolDummyForm,
  MEDIA: ProtocolDummyForm,
  OBSERVATION: ProtocolDummyForm,
  PERSON: ProtocolDummyForm,
  SAMPLE: ProtocolDummyForm,
};

export default function ProtocolForm({
  protocol,
  record,
  ...others
}: {
  protocol: Protocol;
  record?: Record;
}) {
  const SpecificProtocolForm = protocolComponents[protocol];
  return <SpecificProtocolForm record={record} {...others} />;
}
