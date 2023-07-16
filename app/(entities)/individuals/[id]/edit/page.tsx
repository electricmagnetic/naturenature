import Header from "@/components/layout/Header";
import { getIndividual } from "../../api";
import IndividualForm from "../../IndividualForm";

export default async function EditIndividual({
  params: { id },
}: {
  params: { id: string };
}) {
  const individual = await getIndividual(id);

  return (
    <main>
      <Header title={`Edit Individual: ${id}`} />
      <IndividualForm individual={individual} />
    </main>
  );
}
