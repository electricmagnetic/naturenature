import Table from "@/app/_components/ui/Table";
import Section from "@/app/_components/layout/Section";
import { Media } from "./types";

export default function MediaList({ media }: { media: Media[] }) {
  return (
    <Section>
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
    </Section>
  );
}
