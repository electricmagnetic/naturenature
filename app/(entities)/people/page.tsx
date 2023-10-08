import Header from "@/app/_components/layout/Header";

import { getPeople } from "./api/server";
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
