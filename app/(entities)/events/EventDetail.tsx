import dynamic from "next/dynamic";

import Lookup from "@/components/dictionary/Lookup";
import GeoJSON from "@/components/geospatial/GeoJSON";
import Section from "@/components/layout/Section";
import Header from "@/components/layout/Header";
import ActionButton from "@/components/ui/ActionButton";
import ButtonCollection from "@/components/ui/ButtonCollection";
import DateTime from "@/components/ui/DateTime";
import Message from "@/components/ui/Message";
import Properties from "@/components/ui/Properties";
import PublicPrivate from "@/components/ui/PublicPrivate";
import type { Json } from "@/types/_supabase";
import type { CompleteRecord } from "@/app/(entities)/records/types";
import type { CompleteEvent } from "./types";
import RecordBlocks from "../records/RecordBlocks";

const Map = dynamic(() => import("@/components/geospatial/Map"), {
  ssr: false,
});

export default function EventDetail({
  event,
  records,
}: {
  event: CompleteEvent;
  records: CompleteRecord[];
}) {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <Section title="Basic details">
            <Properties>
              <Properties.Item name="Date/Time">
                <DateTime datetime={event.datetime} />
              </Properties.Item>
            </Properties>
          </Section>
          <Section title="Metadata">
            <Properties>
              <Properties.Item name="Visibility">
                <PublicPrivate>{event.is_public}</PublicPrivate>
              </Properties.Item>
            </Properties>
            <Properties>
              <Properties.Item name="Status">
                <Lookup>{event.status}</Lookup>
              </Properties.Item>
              <Properties.Item name="Source">
                <Lookup>{event.source}</Lookup>
              </Properties.Item>
              <Properties.Item name="Reference">
                {event.reference}
              </Properties.Item>
            </Properties>
            <Properties>
              <Properties.Item name="Creation Date/Time">
                <DateTime datetime={event.created_at} />
              </Properties.Item>
            </Properties>
          </Section>
          <Section title="Comments">
            <small>{event.comments}</small>
          </Section>
        </div>
        <div className="col-md-6">
          <Section title="Location">
            <>
              {event.place && (
                <Map height={480}>
                  <GeoJSON data={event.place.geometry as Json} />
                </Map>
              )}
              {event.event_place_geometry && (
                <Map height={480}>
                  <GeoJSON data={event.event_place_geometry as Json} />
                </Map>
              )}
              {!event.place && !event.event_place_geometry && (
                <Message>No place associated with this event</Message>
              )}
            </>
          </Section>
        </div>
      </div>
      <section>
        <Header.Entity entity="record">
          <ButtonCollection>
            <ActionButton
              iconName="plus-circle"
              href={`/records/new?event_id=${event.id}`}
              label="Create Linked Record"
            />
          </ButtonCollection>
        </Header.Entity>
        {records && records.length > 0 ? (
          <RecordBlocks records={records} />
        ) : (
          <Section>
            <Message>No records associated with this event</Message>
          </Section>
        )}
      </section>
    </>
  );
}
