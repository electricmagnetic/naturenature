import metadata from "@/app/(entities)/metadata";
import Header from "@/components/layout/Header";
import Toolbar from "@/components/ui/Toolbar";
import ActionButton from "@/components/ui/ActionButton";

import { getIndividual } from "../api";
import IndividualDetail from "../IndividualDetail";

const entityMetadata = metadata.individual;

export default async function Individual({
  params: { id },
}: {
  params: { id: string };
}) {
  const individual = await getIndividual(id);

  return (
    <main>
      <Header
        title={`${entityMetadata.name}: ${individual.id}`}
        iconName={entityMetadata.iconName}
      >
        <Toolbar>
          <ActionButton.Edit table="individuals" id={individual.id} />
          <ActionButton.Delete table="individuals" id={individual.id} />
        </Toolbar>
      </Header>
      <IndividualDetail individual={individual} />
    </main>
  );
}
