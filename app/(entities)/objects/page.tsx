import metadata from "@/app/(entities)/metadata";
import Header from "@/components/layout/Header";
import { CreateActionButton } from "@/components/ui/ActionButton";

import ObjectsList from "./ObjectsList";

const entityMetadata = metadata.object;

export default function Objects() {
  return (
    <main>
      <Header
        title={entityMetadata.pluralName}
        iconName={entityMetadata.iconName}
      >
        <CreateActionButton href="/create/individual" />
      </Header>
      <ObjectsList />
    </main>
  );
}
