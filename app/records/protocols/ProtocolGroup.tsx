import Card from "@/components/ui/Card";
import type { Row } from "@/types/database";

type Record = Row<"records">;

export default function ProtocolGroup({ record }: { record: Record }) {
  return <Card title="Group">{record.type}</Card>;
}
