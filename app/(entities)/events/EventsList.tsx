import Link from "next/link";

import ActionButton from "@/app/_components/ui/ActionButton";
import SelectButton from "@/app/_components/ui/SelectButton";
import ButtonCollection from "@/app/_components/ui/ButtonCollection";
import Table from "@/app/_components/ui/Table";
import DateTime from "@/app/_components/ui/DateTime";
import Lookup from "@/app/_components/dictionary/Lookup";
import PublicPrivate from "@/app/_components/ui/PublicPrivate";
import Section from "@/app/_components/layout/Section";
import type { Event } from "./types";

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
                  <ButtonCollection>
                    <ActionButton.View entity="event" id={event.id} />
                    <ActionButton.Edit entity="event" id={event.id} />
                    <ActionButton.Delete entity="event" id={event.id} />
                  </ButtonCollection>
                </Table.Data>
              )}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Section>
  );
}
