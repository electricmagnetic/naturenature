import Link from "next/link";

import {
  ViewActionButton,
  EditActionButton,
  DeleteActionButton,
} from "@/components/ui/ActionButton";
import Table from "@/components/ui/Table";
import type { TableRow } from "@/types/database";

export default async function IndividualsList({
  individuals,
}: {
  individuals: TableRow<"individuals">[];
}) {
  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Heading>Name</Table.Heading>
          <Table.Heading>Actions</Table.Heading>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {individuals.map((individual) => (
          <Table.Row key={individual.id}>
            <Table.Data>
              <Link href={`/individuals/${individual.id}`}>
                {individual.name || individual.id}
              </Link>
            </Table.Data>
            <Table.Data>
              <ViewActionButton href={`/individuals/${individual.id}`} />
              <EditActionButton href={`/individuals/${individual.id}/edit`} />
              <DeleteActionButton
                href={`/individuals/${individual.id}/delete`}
              />
            </Table.Data>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
