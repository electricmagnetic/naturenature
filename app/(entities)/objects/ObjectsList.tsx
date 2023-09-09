import Link from "next/link";

import ActionButton from "@/components/ui/ActionButton";
import ButtonCollection from "@/components/ui/ButtonCollection";
import Lookup from "@/components/dictionary/Lookup";
import Table from "@/components/ui/Table";
import Section from "@/components/layout/Section";
import type { Object } from "./types";

export default function ObjectsList({ objects }: { objects: Object[] }) {
  return (
    <Section>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Heading>Class</Table.Heading>
            <Table.Heading>Type</Table.Heading>
            <Table.Heading>Name</Table.Heading>
            <Table.Heading>Actions</Table.Heading>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {objects.map((object) => (
            <Table.Row key={object.id}>
              <Table.Data>
                <Lookup>{object.class}</Lookup>
              </Table.Data>
              <Table.Data>
                <Lookup>{object.type}</Lookup>
              </Table.Data>
              <Table.Data>
                <Link href={`/objects/${object.id}`}>
                  {object.name || <em>Unnamed</em>}
                </Link>
              </Table.Data>
              <Table.Data>
                <ButtonCollection>
                  <ActionButton.View entity="object" id={object.id} />
                  <ActionButton.Edit entity="object" id={object.id} />
                  <ActionButton.Delete entity="object" id={object.id} />
                </ButtonCollection>
              </Table.Data>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Section>
  );
}
