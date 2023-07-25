import Header from "@/components/layout/Header";
import ActionButton from "@/components/ui/ActionButton";

import { getRecords } from "./api";
import RecordsList from "./RecordsList";

export default async function Records() {
  const records = await getRecords();

  return (
    <main>
      <Header.Entity entity="record">
        <ActionButton.Create entity="record" />
      </Header.Entity>
      <RecordsList records={records} />
    </main>
  );
}
