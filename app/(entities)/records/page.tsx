import Header from "@/components/layout/Header";

import { getRecords } from "./api/server";
import RecordsList from "./RecordsList";

export default async function Records() {
  const records = await getRecords();

  return (
    <main>
      <Header.Entity entity="record" actionButtons={[Header.Action.Create]} />
      <RecordsList records={records} />
    </main>
  );
}
