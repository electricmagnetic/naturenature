import Header from "@/components/layout/Header";
import ActionButton from "@/components/ui/ActionButton";

import { getPlaces } from "./api";
import PlacesList from "./PlacesList";

export default async function Places() {
  const places = await getPlaces();

  return (
    <main>
      <Header.Entity entity="place">
        <ActionButton.Create entity="place" />
      </Header.Entity>
      <PlacesList places={places} />
    </main>
  );
}
