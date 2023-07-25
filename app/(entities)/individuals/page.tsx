import Header from "@/components/layout/Header";
import ActionButton from "@/components/ui/ActionButton";

import { getIndividuals } from "./api";
import IndividualsList from "./IndividualsList";

export default async function Individuals() {
  const individuals = await getIndividuals();

  return (
    <main>
      <Header.Entity entity="individual">
        <ActionButton.Create entity="individual" />
      </Header.Entity>
      <IndividualsList individuals={individuals} />
    </main>
  );
}
