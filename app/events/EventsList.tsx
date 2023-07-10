import { cookies } from "next/headers";
import Link from "next/link";
import { DateTime } from "luxon";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import type { Database } from "@/types/_supabase";
import Table from "@/components/ui/Table";

export default async function EventsList() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: events, error } = await supabase
    .from("events")
    .select("*, records(count)")
    .order("datetime", { ascending: false });

  if (error) throw Error(error.message);
  if (!events) return <em>No events found</em>;

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Heading>Date/Time</Table.Heading>
          <Table.Heading>Comments</Table.Heading>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {events.map((event) => (
          <Table.Row key={event.id}>
            <Table.Data>
              <Link href={`/events/${event.id}`}>
                {DateTime.fromISO(event.datetime).toLocaleString(
                  DateTime.DATETIME_MED,
                )}
              </Link>
            </Table.Data>
            <Table.Data>{event.comments}</Table.Data>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
