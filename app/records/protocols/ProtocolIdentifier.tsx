import Link from "next/link";

import Card from "@/components/ui/Card";
import type { CompleteRecord } from "@/types/recordTypes";

export default function ProtocolIdentifier({
  record,
}: {
  record: CompleteRecord;
}) {
  return (
    <Card title="Identifier">
      {record.action} {record.object?.name} to{" "}
      {record.individual && (
        <Link href={`/individuals/${record.individual.id}`}>
          {record.individual?.name}
        </Link>
      )}
    </Card>
  );
}
