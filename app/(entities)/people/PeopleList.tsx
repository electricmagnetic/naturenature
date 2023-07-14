import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import Message from "@/components/ui/Message";
import Table from "@/components/ui/Table";
import type { Database } from "@/types/_supabase";

export default async function PeopleList() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: people, error } = await supabase.from("people").select("*");

  if (error) throw Error(error.message);
  if (!people) return <Message>No people found</Message>;

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Heading>ID</Table.Heading>
          <Table.Heading>Name</Table.Heading>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {people.map((person) => (
          <Table.Row key={person.id}>
            <Table.Data>{person.id}</Table.Data>
            <Table.Data>{person.name}</Table.Data>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
