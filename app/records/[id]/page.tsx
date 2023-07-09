import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import Header from "@/components/layout/Header";
import Section from "@/components/layout/Section";
import type { Database } from "@/types/supabase";

export default async function Record({
  params: { id },
}: {
  params: { id: string };
}) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: record } = await supabase
    .from("records")
    .select("*")
    .eq("id", id)
    .limit(1)
    .single();

  if (!record) return notFound();

  return (
    <main>
      <Header title={`Record: ${record.id}`} />
      <Section isPrimary>
        <dl className="row row-cols-4 g-2">
          <div>
            <dt>Protocol</dt>
            <dd>{record.protocol}</dd>
          </div>
        </dl>
      </Section>
    </main>
  );
}