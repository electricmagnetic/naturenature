import { PropsWithChildren } from "react";

import Card from "@/app/_components/ui/Card";
import DateTime from "@/app/_components/ui/DateTime";
import ActionButton from "@/app/_components/ui/ActionButton";
import ButtonCollection from "@/app/_components/ui/ButtonCollection";
import { isProtocol } from "./helpers";
import type { Protocol } from "./metadata";
import type { CompleteRecord, ProtocolDetailComponents } from "../types";

import { ProtocolCitizenBlock } from "./citizen/ProtocolCitizenDetail";
import { ProtocolGroupBlock } from "./group/ProtocolGroupDetail";
import { ProtocolIdentifierBlock } from "./identifier/ProtocolIdentifierDetail";
import { ProtocolInterventionBlock } from "./intervention/ProtocolInterventionDetail";
import { ProtocolMeasurementBlock } from "./measurement/ProtocolMeasurementDetail";
import { ProtocolMediaBlock } from "./media/ProtocolMediaDetail";
import { ProtocolObservationBlock } from "./observation/ProtocolObservationDetail";
import { ProtocolPersonBlock } from "./person/ProtocolPersonDetail";
import { ProtocolSampleBlock } from "./sample/ProtocolSampleDetail";

export type DisplayProps = {
  showEvent?: boolean;
  showIndividual?: boolean;
  showButtons?: boolean;
};

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

export default function ProtocolBlock({
  protocol,
  record,
  children,
  displayProps = {
    showEvent: false,
    showIndividual: true,
    showButtons: true,
  },
}: PropsWithChildren<{
  protocol: Protocol | string;
  record: CompleteRecord;
  displayProps?: DisplayProps;
}>) {
  if (!isProtocol(protocol)) throw Error("Invalid protocol");

  const ProtocolDetailComponent = blockComponents[protocol];

  const { showEvent, showIndividual, showButtons } = displayProps;

  return (
    <Card>
      <div className="row align-items-center justify-content-between">
        {showEvent && (
          <div className="col-md-2">
            <DateTime datetime={record.event.datetime} />
          </div>
        )}
        {showIndividual && (
          <div className="col-md-2">{record.individual?.name}</div>
        )}
        <div className="col-md">
          <ProtocolDetailComponent record={record} />
        </div>
        {showButtons && (
          <div className="col-md-2">
            <ButtonCollection>
              <ActionButton.View small entity="record" id={record.id} />
              <ActionButton.Edit small entity="record" id={record.id} />
              <ActionButton.Delete small entity="record" id={record.id} />
            </ButtonCollection>
          </div>
        )}
      </div>
    </Card>
  );
}
