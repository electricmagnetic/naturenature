import Header from "@/components/layout/Header";

import { getRecord } from "../api/server";
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
        actionButtons={[Header.Action.Edit, Header.Action.Delete]}
      />
      <RecordDetail record={record} />
    </main>
  );
}
