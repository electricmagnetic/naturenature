import Link from "next/link";

import ActionButton from "@/components/ui/ActionButton";
import Table from "@/components/ui/Table";
import DateTime from "@/components/ui/DateTime";
import Lookup from "@/components/dictionary/Lookup";
import PublicPrivate from "@/components/ui/PublicPrivate";
import Section from "@/components/layout/Section";
import type { Event } from "./types";

export default function EventsList({ events }: { events: Event[] }) {
  return (
    <Section>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Heading>Date/Time</Table.Heading>
            <Table.Heading>Comments</Table.Heading>
            <Table.Heading>Source</Table.Heading>
            <Table.Heading>Visibility</Table.Heading>
            <Table.Heading>Actions</Table.Heading>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {events.map((event) => (
            <Table.Row key={event.id}>
              <Table.Data>
                <Link href={`/events/${event.id}`}>
                  <DateTime datetime={event.datetime} />
                </Link>
              </Table.Data>
              <Table.Data>{event.comments}</Table.Data>
              <Table.Data>
                <Lookup>{event.source}</Lookup>
              </Table.Data>
              <Table.Data>
                <PublicPrivate>{event.is_public}</PublicPrivate>
              </Table.Data>
              <Table.Data>
                <ActionButton.View entity="event" id={event.id} />
                <ActionButton.Edit entity="event" id={event.id} />
                <ActionButton.Delete entity="event" id={event.id} />
              </Table.Data>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Section>
  );
}
