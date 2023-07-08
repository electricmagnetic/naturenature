import Header from "@/components/layout/Header";
//import IndividualForm from "../../IndividualForm";

export default async function EditIndividual({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <main>
      <Header title={`Edit Individual: ${id}`} />
      {/*<IndividualForm id={id} />*/}
    </main>
  );
}
