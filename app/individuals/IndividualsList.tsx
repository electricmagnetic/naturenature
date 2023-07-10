import { cookies } from "next/headers";
import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Table from "@/components/ui/Table";

import type { Database } from "@/types/_supabase";

export default async function IndividualsList() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: individuals } = await supabase
    .from("individuals")
    .select("*, records(count)");

  if (!individuals) return <em>No individuals found</em>;

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Heading>ID</Table.Heading>
          <Table.Heading>Name</Table.Heading>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {individuals.map((individual) => (
          <Table.Row key={individual.id}>
            <Table.Data>
              <Link href={`/individuals/${individual.id}`}>
                {individual.id}
              </Link>
            </Table.Data>
            <Table.Data>{individual.name}</Table.Data>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
