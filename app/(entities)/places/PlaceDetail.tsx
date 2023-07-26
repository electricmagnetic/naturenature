import dynamic from "next/dynamic";

import Lookup from "@/components/dictionary/Lookup";
import GeoJSON from "@/components/geospatial/GeoJSON";
import Section from "@/components/layout/Section";
import Properties from "@/components/ui/Properties";
import type { TableRow } from "@/types/database";

const Map = dynamic(() => import("@/components/geospatial/Map"), {
  ssr: false,
});

export default async function PlaceDetail({
  place,
}: {
  place: TableRow<"places">;
}) {
  return (
    <>
      <Section isPrimary>
        <Properties>
          <Properties.Item name="Name">{place.name}</Properties.Item>
          <Properties.Item name="Type">
            <Lookup>{place.type}</Lookup>
          </Properties.Item>
        </Properties>
      </Section>
      <Section title="Map">
        <Map>
          <GeoJSON data={place.as_geojson} />
        </Map>
      </Section>
    </>
  );
}
