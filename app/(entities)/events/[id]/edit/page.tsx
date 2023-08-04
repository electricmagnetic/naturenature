import Header from "@/components/layout/Header";

import { getEvent } from "../../api/queries";
import EventForm from "../../EventForm";

export default async function EditEvent({
  params: { id },
}: {
  params: { id: string };
}) {
  const event = await getEvent(id);

  return (
    <main>
      <Header.Entity entity="event" action={Header.Action.Edit} id={id} />
      <EventForm event={event} />
    </main>
  );
}
