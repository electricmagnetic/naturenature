import Card from "@/components/ui/Card";
import type { Database } from "@/types/supabase";

type Record = Database["public"]["Tables"]["records"]["Row"];

export default function ProtocolObservation({ record }: { record: Record }) {
  return (
    <Card title="Observation">
      {record.type} of {record.individual}
    </Card>
  );
}
