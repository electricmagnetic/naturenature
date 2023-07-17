import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import Lookup from "@/components/dictionary/Lookup";
import Message from "@/components/ui/Message";
import Table from "@/components/ui/Table";
import type { Database } from "@/types/_supabase";

export default async function ObjectsList() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: objects, error } = await supabase.from("objects").select("*");

  if (error) throw Error(error.message);
  if (!objects) return <Message>No objects found</Message>;

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Heading>ID</Table.Heading>
          <Table.Heading>Class</Table.Heading>
          <Table.Heading>Type</Table.Heading>
          <Table.Heading>Name</Table.Heading>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {objects.map((object) => (
          <Table.Row key={object.id}>
            <Table.Data>{object.id}</Table.Data>
            <Table.Data>
              <Lookup>{object.class}</Lookup>
            </Table.Data>
            <Table.Data>
              <Lookup>{object.type}</Lookup>
            </Table.Data>
            <Table.Data>{object.name}</Table.Data>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
