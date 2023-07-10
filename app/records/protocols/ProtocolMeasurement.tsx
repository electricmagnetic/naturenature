import Card from "@/components/ui/Card";
import type { ProtocolMeasurementData } from "@/types/recordData";
import type { Row } from "@/types/database";

type Record = Row<"records">;

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
