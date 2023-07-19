import metadata from "@/app/(entities)/metadata";
import Header from "@/components/layout/Header";
import { CreateActionButton } from "@/components/ui/ActionButton";

import { getPlaces } from "./api";
import PlacesList from "./PlacesList";

const entityMetadata = metadata.place;

export default async function Places() {
  const places = await getPlaces();

  return (
    <main>
      <Header
        title={entityMetadata.pluralName}
        iconName={entityMetadata.iconName}
      >
        <CreateActionButton href="/create/place" />
      </Header>
      <PlacesList places={places} />
    </main>
  );
}
