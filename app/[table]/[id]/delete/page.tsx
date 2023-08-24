import { notFound } from "next/navigation";

import Header from "@/components/layout/Header";
import { getMetadatumByTable } from "@/app/(entities)/metadata";
import DeleteObjectForm from "@/components/forms/DeleteObjectForm";

/**
 * Generic delete view, handles a delete for any table/ID combo
 */
export default function Delete({
  params: { table, id },
}: {
  params: { table: string; id: string };
}) {
  const entityMetadatum = getMetadatumByTable(table);
  if (!entityMetadatum) return notFound();

  return (
    <main>
      <Header title={`Delete ${entityMetadatum.name}: ${id}`} />
      <DeleteObjectForm table={table} id={id} />
    </main>
  );
}
