import Header from "@/components/layout/Header";

import { getIndividuals } from "./api/server";
import IndividualsList from "./IndividualsList";

export default async function Individuals() {
  const individuals = await getIndividuals();

  return (
    <main>
      <Header.Entity
        entity="individual"
        actionButtons={[Header.Action.Create]}
      />
      <IndividualsList individuals={individuals} />
    </main>
  );
}
