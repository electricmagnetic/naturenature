import Card from "@/components/ui/Card";
import type { Row } from "@/types/database";

type Record = Row<"records">;

export default function ProtocolPerson({ record }: { record: Record }) {
  return (
    <Card title="Person">
      {record.person} ({record.type})
    </Card>
  );
}
