import Header from "@/components/layout/Header";
import ActionButton from "@/components/ui/ActionButton";

import { getPeople } from "./api";
import PeopleList from "./PeopleList";

export default async function People() {
  const people = await getPeople();

  return (
    <main>
      <Header.Entity entity="person">
        <ActionButton.Create entity="person" />
      </Header.Entity>
      <PeopleList people={people} />
    </main>
  );
}
