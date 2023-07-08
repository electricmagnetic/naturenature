import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import Header from "@/components/layout/Header";
import Section from "@/components/layout/Section";
import type { Database } from "@/types/supabase";

export default async function Event({
  params: { id },
}: {
  params: { id: string };
}) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: event } = await supabase
    .from("events")
    .select("*, records(*)")
    .eq("id", id)
    .limit(1)
    .single();

  if (!event) return notFound();

  return (
    <main>
      <Header title={`Event: ${event.id}`} />
      <Section isPrimary>
        <dl className="row row-cols-4 g-2">
          <div>
            <dt>Date/Time</dt>
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
  );
}
