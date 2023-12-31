import Header from "@/app/_components/layout/Header";

import { getIndividual } from "../../api/server";
import IndividualForm from "../../IndividualForm";

export default async function EditIndividual({
  params: { id },
}: {
  params: { id: string };
}) {
  const individual = await getIndividual(id);

  return (
    <main>
      <Header.Entity entity="individual" action={Header.Action.Edit} id={id} />
      <IndividualForm individual={individual} />
    </main>
  );
}
