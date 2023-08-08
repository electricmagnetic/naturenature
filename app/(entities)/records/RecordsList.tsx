import Link from "next/link";

import ActionButton from "@/components/ui/ActionButton";
import Lookup from "@/components/dictionary/Lookup";
import Table from "@/components/ui/Table";
import Section from "@/components/layout/Section";
import type { Record } from "./types";

export default function RecordsList({ records }: { records: Record[] }) {
  return (
    <Section>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Heading>ID</Table.Heading>
            <Table.Heading>Protocol</Table.Heading>
            <Table.Heading>Type</Table.Heading>
            <Table.Heading>Event</Table.Heading>
            <Table.Heading>Individual</Table.Heading>
            <Table.Heading>Actions</Table.Heading>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {records.map((record) => (
            <Table.Row key={record.id}>
              <Table.Data>
                <Link href={`/records/${record.id}`}>{record.id}</Link>
              </Table.Data>
              <Table.Data>
                <Lookup formatted>{record.protocol}</Lookup>
              </Table.Data>
              <Table.Data>
                <Lookup>{record.type}</Lookup>
              </Table.Data>
              <Table.Data>
                <Link href={`/events/${record.event_id}`}>
                  Event: {record.event_id}
                </Link>
              </Table.Data>
              <Table.Data>
                {record.individual_id && (
                  <Link href={`/individuals/${record.individual_id}`}>
                    Individual: {record.individual_id}
                  </Link>
                )}
              </Table.Data>
              <Table.Data>
                <ActionButton.View entity="record" id={record.id} />
              </Table.Data>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Section>
  );
}
