import Card from "@/components/ui/Card";
import type { Database } from "@/types/supabase";

type Record = Database["public"]["Tables"]["records"]["Row"];

export default function ProtocolGroup({ record }: { record: Record }) {
  return <Card title="Group">{record.type}</Card>;
}
