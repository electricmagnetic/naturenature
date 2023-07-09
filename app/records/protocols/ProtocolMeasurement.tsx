import Card from "@/components/ui/Card";
import type { ProtocolMeasurementData } from "@/types/recordData";
import type { Database } from "@/types/supabase";

type Record = Database["public"]["Tables"]["records"]["Row"];

export default function ProtocolMeasurement({ record }: { record: Record }) {
  const data = record.data as ProtocolMeasurementData;

  return (
    <Card title="Measurement">
      <div>
        {record.action} {record.type} of {record.individual}
      </div>
      {data && (
        <div>
          {data.value} {data.units}
        </div>
      )}
    </Card>
  );
}
