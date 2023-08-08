import dynamic from "next/dynamic";

import Lookup from "@/components/dictionary/Lookup";
import GeoJSON from "@/components/geospatial/GeoJSON";
import Section from "@/components/layout/Section";
import Properties from "@/components/ui/Properties";
import type { Json } from "@/types/_supabase";
import type { Place } from "./types";

const Map = dynamic(() => import("@/components/geospatial/Map"), {
  ssr: false,
});

export default function PlaceDetail({ place }: { place: Place }) {
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
          <GeoJSON data={place.geometry as Json} />
        </Map>
      </Section>
    </>
  );
}
