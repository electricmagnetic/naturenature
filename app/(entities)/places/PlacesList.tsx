import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import Message from "@/components/ui/Message";
import Table from "@/components/ui/Table";

import type { Database } from "@/types/_supabase";

export default async function PlacesList() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: places, error } = await supabase.from("places").select("*");

  if (error) throw Error(error.message);
  if (!places) return <Message>No places found</Message>;

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Heading>ID</Table.Heading>
          <Table.Heading>Type</Table.Heading>
          <Table.Heading>Name</Table.Heading>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {places.map((place) => (
          <Table.Row key={place.id}>
            <Table.Data>{place.id}</Table.Data>
            <Table.Data>{place.type}</Table.Data>
            <Table.Data>{place.name}</Table.Data>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
