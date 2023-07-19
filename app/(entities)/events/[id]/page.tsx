import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import Section from "@/components/layout/Section";
import Header from "@/components/layout/Header";
import DateTime from "@/components/ui/DateTime";
import Properties from "@/components/ui/Properties";
import Protocol from "@/app/(entities)/records/protocols/Protocol";
import type { Database } from "@/types/_supabase";
import type { CompleteRecord } from "@/types/recordTypes";

export default async function Event({
  params: { id },
}: {
  params: { id: string };
}) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: event, error: eventError } = await supabase
    .from("events")
    .select("*")
    .eq("id", id)
    .limit(1)
    .single();

  if (eventError) throw Error(eventError.message);

  const { data: records, error: recordsError } = await supabase
    .from("records")
    .select("*, event(*), individual(*), media(*), object(*), person(*)")
    .eq("event", id)
    .returns<CompleteRecord[]>();

  if (recordsError) throw Error(recordsError.message);

  if (!event) return notFound();

  return (
    <main>
      <Header title={`Event: ${event.id}`} />
      <Section isPrimary>
        <Properties>
          <Properties.Item name="Date/Time">
            <DateTime datetime={event.datetime} />
          </Properties.Item>
        </Properties>
      </Section>
      {records && (
        <Section title="Records">
          <div className="row row-cols-md-3 g-3">
            {records.map((record) => (
              <Protocol record={record} className="col-md" key={record.id} />
            ))}
          </div>
        </Section>
      )}
    </main>
  );
}
