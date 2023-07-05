import { cookies } from "next/headers";
import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import type { Database } from "@/types/supabase";

export default async function EventsList() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: events } = await supabase.from("events").select("*");

  if (!events) return <em>No events found</em>;

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Date/Time</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event) => (
          <tr key={event.id}>
            <td>
              <Link href={`/events/${event.id}`}>{event.id}</Link>
            </td>
            <td>{event.datetime}</td>
            <td>{event.comments}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
