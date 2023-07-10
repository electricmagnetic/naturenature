import Card from "@/components/ui/Card";
import type { ProtocolSampleData } from "@/types/recordData";
import type { Row } from "@/types/database";

type Record = Row<"records">;

export default function ProtocolSample({ record }: { record: Record }) {
  const data = record.data as ProtocolSampleData;

  return (
    <Card title="Sample">
      <div>
        {record.action} ({record.object}) for {record.individual}
      </div>
      {data && (
        <div>
          {data.value} {data.units}
        </div>
      )}
    </Card>
  );
}
