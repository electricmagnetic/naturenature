import Header from "@/components/layout/Header";

import { getPerson } from "../../api/queries";
import PersonForm from "../../PersonForm";

export default async function EditPerson({
  params: { id },
}: {
  params: { id: string };
}) {
  const person = await getPerson(id);

  return (
    <main>
      <Header.Entity entity="person" action={Header.Action.Edit} id={id} />
      <PersonForm person={person} />
    </main>
  );
}
