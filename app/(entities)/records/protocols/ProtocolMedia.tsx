import Link from "next/link";

import Card from "@/components/ui/Card";
import type { CompleteRecord } from "@/types/recordTypes";

export default function ProtocolMedia({ record }: { record: CompleteRecord }) {
  return (
    <Card title="Media">
      <Link href={`/media/${record.media?.id}`}>{record.media?.caption}</Link>
    </Card>
  );
}
