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
      <span>TODO</span>
      {/*<IndividualForm id={id} />*/}
    </main>
  );
}
