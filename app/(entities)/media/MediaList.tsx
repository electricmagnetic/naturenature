import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import Message from "@/components/ui/Message";
import Table from "@/components/ui/Table";
import type { Database } from "@/types/_supabase";

export default async function MediasList() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: media, error } = await supabase.from("media").select("*");

  if (error) throw Error(error.message);
  if (!media) return <Message>No media found</Message>;

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Heading>ID</Table.Heading>
          <Table.Heading>Caption</Table.Heading>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {media.map((mediaItem) => (
          <Table.Row key={mediaItem.id}>
            <Table.Data>{mediaItem.id}</Table.Data>
            <Table.Data>{mediaItem.caption}</Table.Data>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
