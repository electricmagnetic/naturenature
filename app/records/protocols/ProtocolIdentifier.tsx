import Card from "@/components/ui/Card";
import type { Database } from "@/types/supabase";

type Record = Database["public"]["Tables"]["records"]["Row"];

export default function ProtocolIdentifier({ record }: { record: Record }) {
  return (
    <Card title="Identifier">
      {record.action} {record.identifier} to {record.individual}
    </Card>
  );
}
