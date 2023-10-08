import Header from "@/components/layout/Header";

import { getRecordsBy } from "@/app/(entities)/records/api/server";
import { getCompleteEvent } from "../api/server";
import EventDetail from "../EventDetail";

export default async function Event({
  params: { id },
}: {
  params: { id: string };
}) {
  const event = await getCompleteEvent(id);
  const records = await getRecordsBy("event_id", id);

  return (
    <main>
      <Header.Entity
        entity="event"
        action={Header.Action.View}
        id={id}
        actionButtons={[Header.Action.Edit, Header.Action.Delete]}
      />
      <EventDetail event={event} records={records} />
    </main>
  );
}
