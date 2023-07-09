import Card from "@/components/ui/Card";
import type { ProtocolSampleData } from "@/types/recordData";
import type { Database } from "@/types/supabase";

type Record = Database["public"]["Tables"]["records"]["Row"];

export default function ProtocolSample({ record }: { record: Record }) {
  const data = record.data as ProtocolSampleData;

  return (
    <Card title="Sample">
      <div>
        {record.action} ({record.sample}) for {record.individual}
      </div>
      {data && (
        <div>
          {data.value} {data.units}
        </div>
      )}
    </Card>
  );
}
