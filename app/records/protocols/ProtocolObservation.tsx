import Card from "@/components/ui/Card";
import type { Row } from "@/types/database";

type Record = Row<"records">;

export default function ProtocolObservation({ record }: { record: Record }) {
  return (
    <Card title="Observation">
      {record.type} of {record.individual}
    </Card>
  );
}
