import Message from "@/components/ui/Message";

import type { Protocol } from "./metadata";
import type { Record, ProtocolComponents } from "../types";

const ProtocolDummyForm = () => <span>Dummy Form</span>;

const protocolComponents: ProtocolComponents<Record> = {
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
  record,
  className,
  ...others
}: {
  record?: Record;
  className?: string;
}) {
  if (record) {
    const { protocol } = record;

    const SpecificProtocol = protocolComponents[protocol as Protocol];

    return (
      <div className={className}>
        <SpecificProtocol record={record} {...others} />
      </div>
    );
  }

  return <span>TODO CREATE PROTOCOL</span>;
}
