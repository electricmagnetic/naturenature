import Accordion from "@/components/ui/Accordion";
import Icon from "@/components/ui/Icon";
import { Protocol, protocolMetadata } from "./protocols/metadata";
import ProtocolBlock from "./protocols/ProtocolBlock";
import type { Entries } from "@/types/generics";
import type { CompleteRecord } from "./types";
import type { DisplayProps } from "./protocols/ProtocolBlock";

type RecordsByProtocol = {
  [key in Protocol]: CompleteRecord[];
};

export default function RecordBlocks({
  records,
  displayProps,
}: {
  records: CompleteRecord[];
  displayProps?: DisplayProps;
}) {
  const recordsByProtocol = Object.fromEntries(
    Object.keys(protocolMetadata).map((key) => [
      key as Protocol,
      records.filter((record) => record.protocol === key),
    ]),
  ) as RecordsByProtocol;

  return (
    <Accordion>
      {(Object.entries(recordsByProtocol) as Entries<RecordsByProtocol>).map(
        ([key, recordByProtocol]) =>
          recordByProtocol.length > 0 && (
            <Accordion.Item key={key}>
              <Accordion.Header id={key}>
                <Icon iconName={protocolMetadata[key].iconName} />
                {protocolMetadata[key].name}{" "}
              </Accordion.Header>
              <Accordion.Body id={key}>
                <div className="row g-2">
                  {recordByProtocol.map((record) => (
                    <ProtocolBlock
                      protocol={record.protocol}
                      record={record}
                      key={record.id}
                      displayProps={displayProps}
                    />
                  ))}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          ),
      )}
    </Accordion>
  );
}
