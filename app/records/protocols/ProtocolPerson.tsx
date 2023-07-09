import Card from "@/components/ui/Card";
import type { Database } from "@/types/supabase";

type Record = Database["public"]["Tables"]["records"]["Row"];

export default function ProtocolPerson({ record }: { record: Record }) {
  return (
    <Card title="Person">
      {record.person} ({record.type})
    </Card>
  );
}
