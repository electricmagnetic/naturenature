import Card from "@/components/ui/Card";
import type { Database } from "@/types/supabase";

type Record = Database["public"]["Tables"]["records"]["Row"];

export default function ProtocolIntervention({ record }: { record: Record }) {
  return (
    <Card title="Intervention">
      {record.action} {record.individual} ({record.type})
    </Card>
  );
}
