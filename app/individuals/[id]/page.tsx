import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import Section from "@/app/components/layout/Section";
import type { Database } from "@/types/supabase";

export default async function Individual({
  params: { id },
}: {
  params: { id: string };
}) {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: individual } = await supabase
    .from("individuals")
    .select("*, records(*)")
    .eq("id", id)
    .limit(1)
    .single();

  if (!individual) return notFound();

  return (
    <main>
      <h1>Individual: {id}</h1>
      <Section isPrimary>
        <dl className="row row-cols-4 g-2">
          <div>
            <dt>Name</dt>
            <dd>{individual.name}</dd>
          </div>
        </dl>
      </Section>
      {individual.records && (
        <Section title="Records">
          <ul>
            {individual.records.map((record) => (
              <li key={record.id}>{record.protocol}</li>
            ))}
          </ul>
        </Section>
      )}
    </main>
  );
}
