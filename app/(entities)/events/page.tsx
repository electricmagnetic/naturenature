import Header from "@/components/layout/Header";

import { getEvents } from "./api/queries";
import EventsList from "./EventsList";

export default async function Events() {
  const events = await getEvents();

  return (
    <main>
      <Header.Entity entity="event" actionButtons={[Header.Action.Create]} />
      <EventsList events={events} />
    </main>
  );
}
