import Link from "next/link";

import ActionButton from "@/components/ui/ActionButton";
import Table from "@/components/ui/Table";
import type { TableRow } from "@/types/database";

export default async function PeopleList({
  people,
}: {
  people: TableRow<"people">[];
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
        {people.map((person) => (
          <Table.Row key={person.id}>
            <Table.Data>
              <Link href={`/people/${person.id}`}>{person.name}</Link>
            </Table.Data>
            <Table.Data>
              <ActionButton.View entity="person" id={person.id} />
              <ActionButton.Edit entity="person" id={person.id} />
              <ActionButton.Delete entity="person" id={person.id} />
            </Table.Data>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
