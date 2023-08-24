import Message from "@/components/ui/Message";

import type { Record, ProtocolComponent } from "../types";

const protocolComponents: ProtocolComponent = {};

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

    const SpecificProtocol = protocolComponents[protocol];
    if (!SpecificProtocol)
      return <Message>Protocol form view not found</Message>;

    return (
      <div className={className}>
        <SpecificProtocol record={record} {...others} />
      </div>
    );
  }

  return <span>TODO CREATE PROTOCOL</span>;
}
