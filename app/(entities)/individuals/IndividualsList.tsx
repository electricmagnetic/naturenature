import Link from "next/link";

import Toolbar from "@/components/ui/Toolbar"; // TODO, technically not being used as a toolbar here
import Table from "@/components/ui/Table";
import type { Row } from "@/types/database";

export default async function IndividualsList({
  individuals,
}: {
  individuals: Row<"individuals">[];
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
              <Toolbar.Link
                href={`/individuals/${individual.id}`}
                iconName="eye"
              >
                View
              </Toolbar.Link>
              <Toolbar.Link
                href={`/individuals/${individual.id}/edit`}
                iconName="pencil-square"
              >
                Edit
              </Toolbar.Link>
              <Toolbar.Link
                href={`/individuals/${individual.id}/delete`}
                iconName="trash"
              >
                Delete
              </Toolbar.Link>
            </Table.Data>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
