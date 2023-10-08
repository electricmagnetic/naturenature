"use client";

import Card from "@/components/ui/Card";
import Lookup from "@/components/dictionary/Lookup";
import type { CompleteRecord } from "../../types";

export const ProtocolGroupPage = ({ record }: { record: CompleteRecord }) => (
  <Card>
    <Lookup>{record.type}</Lookup>
  </Card>
);

export const ProtocolGroupBlock = ({ record }: { record: CompleteRecord }) => (
  <div>
    <Lookup>{record.type}</Lookup>
  </div>
);
