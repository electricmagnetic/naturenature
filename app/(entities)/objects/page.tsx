import Header from "@/app/_components/layout/Header";

import { getObjects } from "./api/server";
import ObjectsList from "./ObjectsList";

export default async function Objects() {
  const objects = await getObjects();

  return (
    <main>
      <Header.Entity entity="object" actionButtons={[Header.Action.Create]} />
      <ObjectsList objects={objects} />
    </main>
  );
}
