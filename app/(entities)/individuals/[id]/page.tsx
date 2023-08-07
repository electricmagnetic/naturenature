import Header from "@/components/layout/Header";

import { getIndividual } from "../api/server";
import IndividualDetail from "../IndividualDetail";

export default async function Individual({
  params: { id },
}: {
  params: { id: string };
}) {
  const individual = await getIndividual(id);

  return (
    <main>
      <Header.Entity
        entity="individual"
        action={Header.Action.View}
        id={id}
        actionButtons={[Header.Action.Edit, Header.Action.Delete]}
      />
      <IndividualDetail individual={individual} />
    </main>
  );
}
