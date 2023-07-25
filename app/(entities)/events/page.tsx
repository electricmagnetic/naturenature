import metadata from "@/app/(entities)/metadata";
import Header from "@/components/layout/Header";
import ActionButton from "@/components/ui/ActionButton";

import { getEvents } from "./api";
import EventsList from "./EventsList";

const entityMetadata = metadata.event;

export default async function Events() {
  const events = await getEvents();

  return (
    <main>
      <Header
        title={entityMetadata.pluralName}
        iconName={entityMetadata.iconName}
      >
        <ActionButton.Create entity="event" />
      </Header>
      <EventsList events={events} />
    </main>
  );
}
