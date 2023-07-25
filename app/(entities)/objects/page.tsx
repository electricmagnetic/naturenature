import Header from "@/components/layout/Header";
import ActionButton from "@/components/ui/ActionButton";

import { getObjects } from "./api";
import ObjectsList from "./ObjectsList";

export default async function Objects() {
  const objects = await getObjects();

  return (
    <main>
      <Header.Entity entity="object">
        <ActionButton.Create entity="object" />
      </Header.Entity>
      <ObjectsList objects={objects} />
    </main>
  );
}
