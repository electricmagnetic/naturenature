import Link from "next/link";

import ActionButton from "@/app/_components/ui/ActionButton";
import ButtonCollection from "@/app/_components/ui/ButtonCollection";
import Lookup from "@/app/_components/dictionary/Lookup";
import Table from "@/app/_components/ui/Table";
import Section from "@/app/_components/layout/Section";
import type { Place } from "./types";

export default function PlacesList({
  places,
}: {
  places: Partial<Place>[]; // TODO
}) {
  return (
    <Section>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Heading>Name</Table.Heading>
            <Table.Heading>Type</Table.Heading>
            <Table.Heading>Actions</Table.Heading>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {places.map((place) => (
            <Table.Row key={place.id}>
              <Table.Data>
                <Link href={`/places/${place.id}`}>{place.name}</Link>
              </Table.Data>
              <Table.Data>
                <Lookup>{place.type}</Lookup>
              </Table.Data>
              <Table.Data>
                <ButtonCollection>
                  {place.id && (
                    <ActionButton.View entity="place" id={place.id} />
                  )}
                </ButtonCollection>
              </Table.Data>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Section>
  );
}
