"use client";

import Link from "next/link";

import Block from "@/components/ui/Block";
import Card from "@/components/ui/Card";
import type { CompleteRecord } from "../../types";

export const ProtocolMediaPage = ({ record }: { record: CompleteRecord }) => (
  <Card>
    <Link href={`/media/${record.media?.id}`}>{record.media?.caption}</Link>
  </Card>
);

export const ProtocolMediaBlock = ({ record }: { record: CompleteRecord }) => (
  <div className="col-md-4">
    <Block entity="record" id={record.id}>
      <Link href={`/media/${record.media?.id}`}>{record.media?.caption}</Link>
    </Block>
  </div>
);
