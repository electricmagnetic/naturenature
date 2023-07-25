import dynamic from "next/dynamic";

import Lookup from "@/components/dictionary/Lookup";
import GeoJSON from "@/components/geospatial/GeoJSON";
import Section from "@/components/layout/Section";
import Properties from "@/components/ui/Properties";
import DateTime from "@/components/ui/DateTime";
import Protocol from "@/app/(entities)/records/protocols/Protocol";

import type { CompleteEvent } from "@/types/eventTypes";
import type { CompleteRecord } from "@/types/recordTypes";

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
            {event.source ? (
              <Lookup>{event.source}</Lookup>
            ) : (
              <em>Unspecified</em>
            )}
          </Properties.Item>
          <Properties.Item name="Comments">{event.comments}</Properties.Item>
          <Properties.Item name="Visibility">
            {event.is_public ? (
              <span className="badge text-bg-warning">Public</span>
            ) : (
              <span className="badge text-bg-dark">Private</span>
            )}
          </Properties.Item>
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
            <GeoJSON data={event.place.as_geojson} />
          </Map>
        </Section>
      )}
      {event.event_place_as_geojson && (
        <Section title="Map (event place)">
          <Map scrollWheelZoom={false}>
            <GeoJSON data={event.event_place_as_geojson} />
          </Map>
        </Section>
      )}
    </>
  );
}
