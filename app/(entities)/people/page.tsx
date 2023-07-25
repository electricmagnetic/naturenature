import metadata from "@/app/(entities)/metadata";
import Header from "@/components/layout/Header";
import ActionButton from "@/components/ui/ActionButton";

import { getPeople } from "./api";
import PeopleList from "./PeopleList";

const entityMetadata = metadata.person;

export default async function People() {
  const people = await getPeople();

  return (
    <main>
      <Header
        title={entityMetadata.pluralName}
        iconName={entityMetadata.iconName}
      >
        <ActionButton.Create entity="person" />
      </Header>
      <PeopleList people={people} />
    </main>
  );
}
