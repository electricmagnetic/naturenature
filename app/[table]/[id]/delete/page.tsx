import { notFound } from "next/navigation";

import Header from "@/components/layout/Header";
import metadata from "@/app/(entities)/metadata";
import DeleteObjectForm from "@/components/forms/DeleteObjectForm";

/**
 * Generic delete view, handles a delete for any table/ID combo
 */
export default function Delete({
  params: { table, id },
}: {
  params: { table: string; id: string };
}) {
  const entityMetadata = Object.values(metadata).filter(
    (metadatum) => table === metadatum.table,
  )[0];
  if (!entityMetadata) return notFound();

  return (
    <main>
      <Header title={`Delete ${entityMetadata.name}: ${id}`} />
      <DeleteObjectForm table={table} id={id} />
    </main>
  );
}
