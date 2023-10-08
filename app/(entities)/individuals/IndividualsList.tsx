import Link from "next/link";

import ActionButton from "@/app/_components/ui/ActionButton";
import ButtonCollection from "@/app/_components/ui/ButtonCollection";
import Table from "@/app/_components/ui/Table";
import Section from "@/app/_components/layout/Section";
import type { Individual } from "./types";

export default function IndividualsList({
  individuals,
}: {
  individuals: Individual[];
}) {
  return (
    <Section>
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
                  {individual.name || <em>Unnamed</em>}
                </Link>
              </Table.Data>
              <Table.Data>
                <ButtonCollection>
                  <ActionButton.View entity="individual" id={individual.id} />
                  <ActionButton.Edit entity="individual" id={individual.id} />
                  <ActionButton.Delete entity="individual" id={individual.id} />
                </ButtonCollection>
              </Table.Data>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Section>
  );
}
