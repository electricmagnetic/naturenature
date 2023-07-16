import Header from "@/components/layout/Header";
import DeleteObjectForm from "@/components/forms/DeleteObjectForm";

export default async function DeleteIndividual({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <main>
      <Header title={`Delete Individual: ${id}`} />
      <DeleteObjectForm from="individuals" id={id} />
    </main>
  );
}
