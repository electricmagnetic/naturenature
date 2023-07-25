import Header from "@/components/layout/Header";
import ActionButton from "@/components/ui/ActionButton";

import { getEvents } from "./api";
import EventsList from "./EventsList";

export default async function Events() {
  const events = await getEvents();

  return (
    <main>
      <Header.Entity entity="event">
        <ActionButton.Create entity="event" />
      </Header.Entity>
      <EventsList events={events} />
    </main>
  );
}
