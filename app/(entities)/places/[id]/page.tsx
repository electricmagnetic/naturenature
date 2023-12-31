import Header from "@/app/_components/layout/Header";

import { getPlace } from "../api/server";
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
