"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import Section from "@/app/components/layout/Section";
import type { Database } from "@/types/supabase";

type Individual = Database["public"]["Tables"]["individuals"]["Row"];
type Record = Database["public"]["Tables"]["records"]["Row"];

export default function Individual({
  params: { id },
}: {
  params: { id: string };
}) {
  const [individual, setIndividual] = useState<
    (Individual & { records: Record[] | null }) | null
  >(null);
  const supabase = createClientComponentClient<Database>();

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase
        .from("individuals")
        .select("*, records(*)")
        .eq("id", id)
        .limit(1)
        .single();

      setIndividual(data);
    };

    getData();
  }, [supabase, id]);

  return (
    <>
      {individual && (
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
      )}
    </>
  );
}
