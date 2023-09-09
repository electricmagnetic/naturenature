import Link from "next/link";

import ActionButton from "@/components/ui/ActionButton";
import Table from "@/components/ui/Table";
import DateTime from "@/components/ui/DateTime";
import Lookup from "@/components/dictionary/Lookup";
import PublicPrivate from "@/components/ui/PublicPrivate";
import Section from "@/components/layout/Section";
import type { Event } from "./types";
import SelectButton from "@/components/ui/SelectButton";

export default function EventsList({
  events,
  isSelector,
}: {
  events: Event[];
  isSelector?: boolean;
}) {
  return (
    <Section>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Heading>Date/Time</Table.Heading>
            <Table.Heading>Comments</Table.Heading>
            <Table.Heading>Source</Table.Heading>
            <Table.Heading>Visibility</Table.Heading>
            <Table.Heading>Created</Table.Heading>
            <Table.Heading>Actions</Table.Heading>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {events.map((event) => (
            <Table.Row key={event.id}>
              {isSelector ? (
                <Table.Data>
                  <DateTime datetime={event.datetime} />
                </Table.Data>
              ) : (
                <Table.Data>
                  <Link href={`/events/${event.id}`}>
                    <DateTime datetime={event.datetime} />
                  </Link>
                </Table.Data>
              )}
              <Table.Data>{event.comments}</Table.Data>
              <Table.Data>
                <Lookup>{event.source}</Lookup>
              </Table.Data>
              <Table.Data>
                <PublicPrivate>{event.is_public}</PublicPrivate>
              </Table.Data>
              <Table.Data>
                <DateTime datetime={event.created_at} relative />
              </Table.Data>
              {isSelector ? (
                <Table.Data>
                  <SelectButton fieldName="event_id" value={event.id} />
                </Table.Data>
              ) : (
                <Table.Data>
                  <ActionButton.View entity="event" id={event.id} />
                  <ActionButton.Edit entity="event" id={event.id} />
                  <ActionButton.Delete entity="event" id={event.id} />
                </Table.Data>
              )}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Section>
  );
}
