import Link from "next/link";

import ActionButton from "@/app/_components/ui/ActionButton";
import ButtonCollection from "@/app/_components/ui/ButtonCollection";
import Lookup from "@/app/_components/dictionary/Lookup";
import Table from "@/app/_components/ui/Table";
import Section from "@/app/_components/layout/Section";
import type { Record } from "./types";

export default function RecordsList({ records }: { records: Record[] }) {
  return (
    <Section>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Heading>Protocol (Action)</Table.Heading>
            <Table.Heading>Action</Table.Heading>
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
                <Link href={`/records/${record.id}`}>
                  <Lookup formatted>{record.protocol}</Lookup>
                </Link>
              </Table.Data>
              <Table.Data>
                <Lookup>{record.action}</Lookup>
              </Table.Data>
              <Table.Data>
                <Lookup>{record.type}</Lookup>
              </Table.Data>
              <Table.Data>
                <Link href={`/events/${record.event_id}`}>
                  {record.event_id}
                </Link>
              </Table.Data>
              <Table.Data>
                {record.individual_id && (
                  <Link href={`/individuals/${record.individual_id}`}>
                    {record.individual_id}
                  </Link>
                )}
              </Table.Data>
              <Table.Data>
                <ButtonCollection>
                  <ActionButton.View entity="record" id={record.id} />
                  <ActionButton.Edit entity="record" id={record.id} />
                  <ActionButton.Delete entity="record" id={record.id} />
                </ButtonCollection>
              </Table.Data>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Section>
  );
}
