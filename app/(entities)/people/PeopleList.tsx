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
          <Table.Heading>ID</Table.Heading>
          <Table.Heading>Name</Table.Heading>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {people.map((person) => (
          <Table.Row key={person.id}>
            <Table.Data>{person.id}</Table.Data>
            <Table.Data>{person.name}</Table.Data>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
