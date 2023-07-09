import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import Header from "@/components/layout/Header";
import Section from "@/components/layout/Section";
import type { Database } from "@/types/supabase";
import Protocol from "@/app/records/protocols/Protocol";

export default async function Event({
  params: { id },
}: {
  params: { id: string };
}) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: event, error } = await supabase
    .from("events")
    .select("*, records(*)")
    .eq("id", id)
    .limit(1)
    .single();

  if (error) throw Error(error.message);
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
          <div className="row row-cols-3 g-3">
            {event.records.map((record) => (
              <Protocol record={record} className="col" key={record.id} />
            ))}
          </div>
        </Section>
      )}
    </main>
  );
}
