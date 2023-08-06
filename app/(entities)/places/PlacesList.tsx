import Link from "next/link";

import ActionButton from "@/components/ui/ActionButton";
import Lookup from "@/components/dictionary/Lookup";
import Table from "@/components/ui/Table";
import type { TableRow } from "@/types/database";

export default function PlacesList({
  places,
}: {
  places: TableRow<"places">[];
}) {
  return (
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
              <ActionButton.View entity="place" id={place.id} />
            </Table.Data>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
