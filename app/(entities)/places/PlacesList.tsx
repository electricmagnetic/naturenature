import Link from "next/link";

import Lookup from "@/components/dictionary/Lookup";
import Table from "@/components/ui/Table";
import type { ViewRow } from "@/types/database";

export default async function PlacesList({
  places,
}: {
  places: ViewRow<"places_with_geojson">[];
}) {
  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Heading>Name</Table.Heading>
          <Table.Heading>Type</Table.Heading>
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
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
