import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import Header from "@/components/layout/Header";
import Section from "@/components/layout/Section"
import Toolbar from "@/components/ui/Toolbar";
import type { Database } from "@/types/_supabase";

export default async function Individual({
  params: { id },
}: {
  params: { id: string };
}) {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: individual, error } = await supabase
    .from("individuals")
    .select("*, records(*)")
    .eq("id", id)
    .limit(1)
    .single();

  if (error) throw Error(error.message);
  if (!individual) return notFound();

  return (
    <main>
      <Header title={`Individual: ${individual.id}`}>
        <Toolbar>
          <Toolbar.Link
            href={`/individuals/${individual.id}/edit`}
            iconName="pencil-square"
          >
            Edit
          </Toolbar.Link>
          <Toolbar.Link
            href={`/individuals/${individual.id}/delete`}
            iconName="trash"
          >
            Delete
          </Toolbar.Link>
        </Toolbar>
      </Header>
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
