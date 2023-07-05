"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import type { Database } from "@/types/supabase";

type Individual = Database["public"]["Tables"]["individuals"]["Row"];

export default function Individuals() {
  const [individuals, setIndividuals] = useState<Individual[] | null>(null);
  const supabase = createClientComponentClient<Database>();

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("individuals").select("*");
      setIndividuals(data);
    };

    getData();
  }, [supabase]);

  return (
    <main>
      <h1>Individuals</h1>
      {individuals ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {individuals.map((individual) => (
              <tr key={individual.id}>
                <td>
                  <Link href={`/individuals/${individual.id}`}>
                    {individual.id}
                  </Link>
                </td>
                <td>{individual.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading individuals...</p>
      )}
    </main>
  );
}
