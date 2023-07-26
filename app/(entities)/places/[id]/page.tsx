import Header from "@/components/layout/Header";

import { getPlace } from "../api";
import PlaceDetail from "../PlaceDetail";

export default async function Place({
  params: { id },
}: {
  params: { id: string };
}) {
  const place = await getPlace(id);

  return (
    <main>
      <Header.Entity
        entity="place"
        action={Header.Action.View}
        id={id}
        actionButtons={[Header.Action.Delete]}
      />
      <PlaceDetail place={place} />
    </main>
  );
}
