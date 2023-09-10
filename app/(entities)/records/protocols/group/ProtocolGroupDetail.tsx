"use client";

import Block from "@/components/ui/Block";
import Card from "@/components/ui/Card";
import Lookup from "@/components/dictionary/Lookup";
import type { CompleteRecord } from "../../types";

export const ProtocolGroupPage = ({ record }: { record: CompleteRecord }) => (
  <Card>
    <Lookup>{record.type}</Lookup>
  </Card>
);

export const ProtocolGroupBlock = ({ record }: { record: CompleteRecord }) => (
  <div className="col-md-4">
    <Block entity="record" id={record.id}>
      <Lookup>{record.type}</Lookup>
    </Block>
  </div>
);
