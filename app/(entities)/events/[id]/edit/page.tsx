import Header from "@/app/_components/layout/Header";

import { getEvent, getEventRelatedObjects } from "../../api/server";
import EventForm from "../../EventForm";

export default async function EditEvent({
  params: { id },
}: {
  params: { id: string };
}) {
  const event = await getEvent(id);
  const eventRelatedObjects = await getEventRelatedObjects(id);

  return (
    <main>
      <Header.Entity entity="event" action={Header.Action.Edit} id={id} />
      <EventForm event={event} eventRelatedObjects={eventRelatedObjects} />
    </main>
  );
}
