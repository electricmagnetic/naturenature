import Header from "@/components/layout/Header";

import { getPlaces } from "./api";
import PlacesList from "./PlacesList";

export default async function Places() {
  const places = await getPlaces();

  return (
    <main>
      <Header.Entity entity="place" actionButtons={[Header.Action.Create]} />
      <PlacesList places={places} />
    </main>
  );
}
