import Card from "@/components/ui/Card";
import type { Row } from "@/types/database";

type Record = Row<"records">;

export default function ProtocolIntervention({ record }: { record: Record }) {
  return (
    <Card title="Intervention">
      {record.action} {record.individual} ({record.type})
    </Card>
  );
}
