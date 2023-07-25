import Header from "@/components/layout/Header";

import { getPeople } from "./api";
import PeopleList from "./PeopleList";

export default async function People() {
  const people = await getPeople();

  return (
    <main>
      <Header.Entity entity="person" actionButtons={[Header.Action.Create]} />
      <PeopleList people={people} />
    </main>
  );
}
