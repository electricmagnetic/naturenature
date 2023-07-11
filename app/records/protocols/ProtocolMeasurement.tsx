import Link from "next/link";

import Card from "@/components/ui/Card";
import type {
  CompleteRecord,
  ProtocolMeasurementData,
} from "@/types/recordTypes";

export default function ProtocolMeasurement({
  record,
}: {
  record: CompleteRecord;
}) {
  const data = record.data as ProtocolMeasurementData;

  return (
    <Card title="Measurement">
      <div>
        {record.action} {record.type} of{" "}
        {record.individual && (
          <Link href={`/individuals/${record.individual.id}`}>
            {record.individual?.name}
          </Link>
        )}
      </div>
      {data && (
        <div>
          {data.value} {data.units}
        </div>
      )}
    </Card>
  );
}
