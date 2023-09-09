import Header from "@/components/layout/Header";

import { getRecord, getRecordRelatedObjects } from "../../api/server";
import RecordForm from "../../RecordForm";

export default async function EditRecord({
  params: { id },
}: {
  params: { id: string };
}) {
  const record = await getRecord(id);
  const recordRelatedObjects = await getRecordRelatedObjects(id);

  return (
    <main>
      <Header.Entity entity="record" action={Header.Action.Edit} id={id} />
      <RecordForm record={record} recordRelatedObjects={recordRelatedObjects} />
    </main>
  );
}
