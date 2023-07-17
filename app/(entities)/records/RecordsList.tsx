import { cookies } from "next/headers";
import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import Lookup from "@/components/dictionary/Lookup";
import Message from "@/components/ui/Message";
import Table from "@/components/ui/Table";
import type { Database } from "@/types/_supabase";

export default async function RecordsList() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: records, error } = await supabase
    .from("records")
    .select("*, event");

  if (error) throw Error(error.message);
  if (!records) return <Message>No records found</Message>;

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Heading>ID</Table.Heading>
          <Table.Heading>Protocol</Table.Heading>
          <Table.Heading>Type</Table.Heading>
          <Table.Heading>Event</Table.Heading>
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
              <Link href={`/events/${record.event}`}>
                Event: {record.event}
              </Link>
            </Table.Data>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
