import Lookup from "@/components/dictionary/Lookup";
import Table from "@/components/ui/Table";
import type { TableRow } from "@/types/database";

export default async function ObjectsList({
  objects,
}: {
  objects: TableRow<"objects">[];
}) {
  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Heading>ID</Table.Heading>
          <Table.Heading>Class</Table.Heading>
          <Table.Heading>Type</Table.Heading>
          <Table.Heading>Name</Table.Heading>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {objects.map((object) => (
          <Table.Row key={object.id}>
            <Table.Data>{object.id}</Table.Data>
            <Table.Data>
              <Lookup>{object.class}</Lookup>
            </Table.Data>
            <Table.Data>
              <Lookup>{object.type}</Lookup>
            </Table.Data>
            <Table.Data>{object.name}</Table.Data>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
