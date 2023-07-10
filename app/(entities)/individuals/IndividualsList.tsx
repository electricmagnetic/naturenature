import { cookies } from "next/headers";
import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import Toolbar from "@/components/ui/Toolbar"; // TODO, technically not being used as a toolbar here
import Message from "@/components/ui/Message";
import Table from "@/components/ui/Table";
import type { Database } from "@/types/_supabase";

export default async function IndividualsList() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: individuals, error } = await supabase
    .from("individuals")
    .select("*, records(count)");

  if (error) throw Error(error.message);
  if (!individuals) return <Message>No individuals found</Message>;

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Heading>Name</Table.Heading>
          <Table.Heading>Actions</Table.Heading>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {individuals.map((individual) => (
          <Table.Row key={individual.id}>
            <Table.Data>
              <Link href={`/individuals/${individual.id}`}>
                {individual.name || individual.id}
              </Link>
            </Table.Data>
            <Table.Data>
              <Toolbar.Link
                href={`/individuals/${individual.id}`}
                iconName="eye"
              >
                View
              </Toolbar.Link>
              <Toolbar.Link
                href={`/individuals/${individual.id}/edit`}
                iconName="pencil-square"
              >
                Edit
              </Toolbar.Link>
              <Toolbar.Link
                href={`/individuals/${individual.id}/delete`}
                iconName="trash"
              >
                Delete
              </Toolbar.Link>
            </Table.Data>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
