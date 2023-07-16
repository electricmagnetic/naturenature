import Header from "@/components/layout/Header";
import { CreateActionButton } from "@/components/ui/ActionButton";

import { getIndividuals } from "./api";

import IndividualsList from "./IndividualsList";

export default async function Individuals() {
  const individuals = await getIndividuals();

  return (
    <main>
      <Header title="Individuals" iconName="bullseye">
        <CreateActionButton href="/individuals/create" />
      </Header>
      <IndividualsList individuals={individuals} />
    </main>
  );
}
