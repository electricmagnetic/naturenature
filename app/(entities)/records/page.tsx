import metadata from "@/app/(entities)/metadata";
import Header from "@/components/layout/Header";

import RecordsList from "./RecordsList";

const entityMetadata = metadata.record;

export default function Records() {
  return (
    <main>
      <Header
        title={entityMetadata.pluralName}
        iconName={entityMetadata.iconName}
      />
      <RecordsList />
    </main>
  );
}
