import metadata from "@/app/(entities)/metadata";
import Header from "@/components/layout/Header";
import ActionButton from "@/components/ui/ActionButton";

import { getIndividuals } from "./api";
import IndividualsList from "./IndividualsList";

const entityMetadata = metadata.individual;

export default async function Individuals() {
  const individuals = await getIndividuals();

  return (
    <main>
      <Header
        title={entityMetadata.pluralName}
        iconName={entityMetadata.iconName}
      >
        <ActionButton.Create entity="individual" />
      </Header>
      <IndividualsList individuals={individuals} />
    </main>
  );
}
