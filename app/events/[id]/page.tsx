"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import Section from "@/app/components/layout/Section";
import type { Database } from "@/types/supabase";

type Event = Database["public"]["Tables"]["events"]["Row"];
type Record = Database["public"]["Tables"]["records"]["Row"];

export default function Event({ params: { id } }: { params: { id: string } }) {
  const [event, setEvent] = useState<
    (Event & { records: Record[] | null }) | null
  >(null);
  const supabase = createClientComponentClient<Database>();

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase
        .from("events")
        .select("*, records(*)")
        .eq("id", id)
        .limit(1)
        .single();

      setEvent(data);
    };

    getData();
  }, [supabase, id]);

  return (
    <>
      {event && (
        <main>
          <h1>Event: {id}</h1>
          <Section isPrimary>
            <dl className="row row-cols-4 g-2">
              <div>
                <dt>Email</dt>
                <dd>{event.datetime}</dd>
              </div>
            </dl>
          </Section>
          {event.records && (
            <Section title="Records">
              <ul>
                {event.records.map((record) => (
                  <li key={record.id}>{record.protocol}</li>
                ))}
              </ul>
            </Section>
          )}
        </main>
      )}
    </>
  );
}
