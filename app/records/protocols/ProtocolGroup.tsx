import Card from "@/components/ui/Card";
import type { CompleteRecord } from "@/types/recordTypes";

export default function ProtocolGroup({ record }: { record: CompleteRecord }) {
  return <Card title="Group">{record.type}</Card>;
}
