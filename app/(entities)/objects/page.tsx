import Header from "@/components/layout/Header";

import { getObjects } from "./api/queries";
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
