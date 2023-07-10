import Card from "@/components/ui/Card";
import type { Row } from "@/types/database";

type Record = Row<"records">;

export default function ProtocolIdentifier({ record }: { record: Record }) {
  return (
    <Card title="Identifier">
      {record.action} {record.object} to {record.individual}
    </Card>
  );
}
