import Header from "@/components/layout/Header";
import Toolbar from "@/components/ui/Toolbar";

import { getIndividuals } from "./api";

import IndividualsList from "./IndividualsList";

export default async function Individuals() {
  const individuals = await getIndividuals();

  return (
    <main>
      <Header title="Individuals" iconName="bullseye">
        <Toolbar.Link href="/individuals/create" iconName="plus-circle">
          Create
        </Toolbar.Link>
      </Header>
      <IndividualsList individuals={individuals} />
    </main>
  );
}
