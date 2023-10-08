import Header from "@/app/_components/layout/Header";

import { getPerson } from "../../api/server";
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
