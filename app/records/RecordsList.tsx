import { cookies } from "next/headers";
import Link from "next/link";
import { DateTime } from "luxon";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import type { Database } from "@/types/supabase";
import Table from "@/components/ui/Table";

export default async function RecordsList() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: records } = await supabase.from("records").select("*");

  if (!records) return <em>No records found</em>;

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Heading>ID</Table.Heading>
          <Table.Heading>Protocol</Table.Heading>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {records.map((record) => (
          <Table.Row key={record.id}>
            <Table.Data>
              <Link href={`/records/${record.id}`}>{record.id}</Link>
            </Table.Data>
            <Table.Data>{record.protocol}</Table.Data>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
