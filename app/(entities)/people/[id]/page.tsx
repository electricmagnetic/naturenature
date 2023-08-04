import Header from "@/components/layout/Header";

import { getPerson } from "../api/queries";
import PersonDetail from "../PersonDetail";

export default async function Person({
  params: { id },
}: {
  params: { id: string };
}) {
  const person = await getPerson(id);

  return (
    <main>
      <Header.Entity
        entity="person"
        action={Header.Action.View}
        id={id}
        actionButtons={[Header.Action.Edit, Header.Action.Delete]}
      />
      <PersonDetail person={person} />
    </main>
  );
}
