import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import Header from "@/components/layout/Header";
import Section from "@/components/layout/Section";
import Properties from "@/components/ui/Properties";
import Protocol from "../protocols/Protocol";
import type { Database } from "@/types/_supabase";
import type { CompleteRecord } from "@/types/recordTypes";

export default async function Record({
  params: { id },
}: {
  params: { id: string };
}) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: record } = await supabase
    .from("records")
    .select("*, event(*), individual(*), media(*), object(*), person(*)")
    .eq("id", id)
    .returns<CompleteRecord[]>()
    .limit(1)
    .single();

  if (!record) return notFound();

  return (
    <main>
      <Header title={`Record: ${record.id}`} />
      <Section isPrimary>
        <Properties>
          <Properties.Item name="Protocol">{record.protocol}</Properties.Item>
        </Properties>
      </Section>
      <Section>
        <Protocol record={record} />
      </Section>
    </main>
  );
}
