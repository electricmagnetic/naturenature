import dynamic from "next/dynamic";

import GeoJSON from "@/components/geospatial/GeoJSON";
import Header from "@/components/layout/Header";
import Section from "@/components/layout/Section";
import Lookup from "@/components/dictionary/Lookup";
import Properties from "@/components/ui/Properties";

import { getPlace } from "../api";

const Map = dynamic(() => import("@/components/geospatial/Map"), {
  ssr: false,
});

export default async function Place({
  params: { id },
}: {
  params: { id: string };
}) {
  const place = await getPlace(id);

  return (
    <main>
      <Header title={`Place: ${place.id}`} />
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
    </main>
  );
}
