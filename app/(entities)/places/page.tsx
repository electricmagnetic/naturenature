import metadata from "@/app/(entities)/metadata";
import Header from "@/components/layout/Header";

import PlacesList from "./PlacesList";

const entityMetadata = metadata.place;

export default function Places() {
  return (
    <main>
      <Header
        title={entityMetadata.pluralName}
        iconName={entityMetadata.iconName}
      />
      <PlacesList />
    </main>
  );
}
