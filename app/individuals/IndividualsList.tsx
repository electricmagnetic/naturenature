import { cookies } from "next/headers";
import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import type { Database } from "@/types/supabase";

export default async function Individuals() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: individuals } = await supabase
    .from("individuals")
    .select("*, records(count)");

  if (!individuals) return <em>No individuals found</em>;

  return (
    <table className="table">
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
  );
}
