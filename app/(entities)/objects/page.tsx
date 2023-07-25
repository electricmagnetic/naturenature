import metadata from "@/app/(entities)/metadata";
import Header from "@/components/layout/Header";
import ActionButton from "@/components/ui/ActionButton";

import { getObjects } from "./api";
import ObjectsList from "./ObjectsList";

const entityMetadata = metadata.object;

export default async function Objects() {
  const objects = await getObjects();

  return (
    <main>
      <Header
        title={entityMetadata.pluralName}
        iconName={entityMetadata.iconName}
      >
        <ActionButton.Create entity="object" />
      </Header>
      <ObjectsList objects={objects} />
    </main>
  );
}
