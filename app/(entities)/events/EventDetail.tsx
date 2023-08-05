import dynamic from "next/dynamic";

import Lookup from "@/components/dictionary/Lookup";
import GeoJSON from "@/components/geospatial/GeoJSON";
import Section from "@/components/layout/Section";
import Properties from "@/components/ui/Properties";
import PublicPrivate from "@/components/ui/PublicPrivate";
import DateTime from "@/components/ui/DateTime";
import Protocol from "@/app/(entities)/records/protocols/Protocol";

import type { Json } from "@/types/_supabase";
import type { CompleteRecord } from "@/app/(entities)/records/types";
import type { CompleteEvent } from "./types";

const Map = dynamic(() => import("@/components/geospatial/Map"), {
  ssr: false,
});

export default async function EventDetail({
  event,
  records,
}: {
  event: CompleteEvent;
  records: CompleteRecord[];
}) {
  return (
    <>
      <Section isPrimary>
        <Properties>
          <Properties.Item name="Date/Time">
            <DateTime datetime={event.datetime} />
          </Properties.Item>
          <Properties.Item name="Source">
            <Lookup>{event.source}</Lookup>
          </Properties.Item>
          <Properties.Item name="Comments">{event.comments}</Properties.Item>
          <Properties.Item name="Visibility">
            <PublicPrivate>{event.is_public}</PublicPrivate>
          </Properties.Item>
          <Properties.Item name="Reference">{event.reference}</Properties.Item>
        </Properties>
      </Section>
      {records && (
        <Section title="Records">
          <div className="row row-cols-md-3 g-3">
            {records.map((record) => (
              <Protocol record={record} className="col-md" key={record.id} />
            ))}
          </div>
        </Section>
      )}
      {event.place && (
        <Section title="Map (place)">
          <Map scrollWheelZoom={false}>
            <GeoJSON data={event.place.geometry as Json} />
          </Map>
        </Section>
      )}
      {event.event_place_geometry && (
        <Section title="Map (event place)">
          <Map scrollWheelZoom={false}>
            <GeoJSON data={event.event_place_geometry as Json} />
          </Map>
        </Section>
      )}
    </>
  );
}
