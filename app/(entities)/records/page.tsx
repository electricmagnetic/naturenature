import metadata from "@/app/(entities)/metadata";
import Header from "@/components/layout/Header";
import ActionButton from "@/components/ui/ActionButton";

import { getRecords } from "./api";
import RecordsList from "./RecordsList";

const entityMetadata = metadata.record;

export default async function Records() {
  const records = await getRecords();

  return (
    <main>
      <Header
        title={entityMetadata.pluralName}
        iconName={entityMetadata.iconName}
      >
        <ActionButton.Create entity="record" />
      </Header>
      <RecordsList records={records} />
    </main>
  );
}
