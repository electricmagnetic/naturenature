import Link from "next/link";
import Card from "@/components/ui/Card";
import type { CompleteRecord } from "@/types/recordTypes";

export default function ProtocolPerson({ record }: { record: CompleteRecord }) {
  return (
    <Card title="Person">
      <Link href={`/people/${record.person?.id}`}>{record.person?.name}</Link> (
      {record.type})
    </Card>
  );
}
