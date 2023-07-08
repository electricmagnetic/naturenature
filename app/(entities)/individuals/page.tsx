import Header from "@/components/layout/Header";
import Toolbar from "@/components/ui/Toolbar";

import IndividualsList from "./IndividualsList";

export default function Individuals() {
  return (
    <main>
      <Header title="Individuals" iconName="bullseye">
        <Toolbar.Link href="/individuals/create" iconName="plus-circle">
          Create
        </Toolbar.Link>
      </Header>
      <IndividualsList />
    </main>
  );
}
