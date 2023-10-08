"use client";

import Link from "next/link";

import Card from "@/components/ui/Card";
import type { CompleteRecord } from "../../types";

export const ProtocolMediaPage = ({ record }: { record: CompleteRecord }) => (
  <Card>
    <Link href={`/media/${record.media?.id}`}>{record.media?.caption}</Link>
  </Card>
);

export const ProtocolMediaBlock = ({ record }: { record: CompleteRecord }) => (
  <div>
    <Link href={`/media/${record.media?.id}`}>{record.media?.caption}</Link>
  </div>
);
