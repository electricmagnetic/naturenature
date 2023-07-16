import metadata from "@/app/(entities)/metadata";
import Header from "@/components/layout/Header";
import { CreateActionButton } from "@/components/ui/ActionButton";

import PlacesList from "./PlacesList";

const entityMetadata = metadata.place;

export default function Places() {
  return (
    <main>
      <Header
        title={entityMetadata.pluralName}
        iconName={entityMetadata.iconName}
      >
        <CreateActionButton href="/create/individual" />
      </Header>
      <PlacesList />
    </main>
  );
}
