import Link from "next/link";

import Card from "@/components/ui/Card";
import type { CompleteRecord } from "@/types/recordTypes";

export default function ProtocolIntervention({
  record,
}: {
  record: CompleteRecord;
}) {
  return (
    <Card title="Intervention">
      {record.action}{" "}
      {record.individual && (
        <Link href={`/individuals/${record.individual.id}`}>
          {record.individual?.name}
        </Link>
      )}{" "}
      ({record.type})
    </Card>
  );
}
