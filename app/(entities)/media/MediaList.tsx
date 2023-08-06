import Table from "@/components/ui/Table";
import type { TableRow } from "@/types/database";

export default function MediaList({ media }: { media: TableRow<"media">[] }) {
  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Heading>ID</Table.Heading>
          <Table.Heading>Caption</Table.Heading>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {media.map((mediaItem) => (
          <Table.Row key={mediaItem.id}>
            <Table.Data>{mediaItem.id}</Table.Data>
            <Table.Data>{mediaItem.caption}</Table.Data>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
