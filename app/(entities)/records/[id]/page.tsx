import Header from "@/components/layout/Header";

import { getRecord } from "../api";
import RecordDetail from "../RecordDetail";

export default async function Record({
  params: { id },
}: {
  params: { id: string };
}) {
  const record = await getRecord(id);

  return (
    <main>
      <Header.Entity
        entity="record"
        action={Header.Action.View}
        id={id}
        actionButtons={[Header.Action.Delete]}
      />
      <RecordDetail record={record} />
    </main>
  );
}
