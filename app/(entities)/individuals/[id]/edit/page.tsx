import metadata from "@/app/(entities)/metadata";
import Header from "@/components/layout/Header";
import { getIndividual } from "../../api";
import IndividualForm from "../../IndividualForm";

const entityMetadata = metadata.individual;

export default async function EditIndividual({
  params: { id },
}: {
  params: { id: string };
}) {
  const individual = await getIndividual(id);

  return (
    <main>
      <Header
        title={`Edit ${entityMetadata.name}: ${individual.id}`}
        iconName={entityMetadata.iconName}
      />
      <IndividualForm individual={individual} />
    </main>
  );
}
