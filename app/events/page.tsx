"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import type { Database } from "@/types/supabase";

type Event = Database["public"]["Tables"]["events"]["Row"];

export default function Events() {
  const [events, setEvents] = useState<Event[] | null>(null);
  const supabase = createClientComponentClient<Database>();

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("events").select("*");
      setEvents(data);
    };

    getData();
  }, [supabase]);

  return (
    <main>
      <h1>Events</h1>
      {events ? (
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
      ) : (
        <p>Loading events...</p>
      )}
    </main>
  );
}
