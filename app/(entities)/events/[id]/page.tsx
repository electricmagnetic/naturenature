import metadata from "@/app/(entities)/metadata";
import Header from "@/components/layout/Header";
import Toolbar from "@/components/ui/Toolbar";
import ActionButton from "@/components/ui/ActionButton";

import { getRecordsByEvent } from "@/app/(entities)/records/api";
import { getEvent } from "../api";
import EventDetail from "../EventDetail";

const entityMetadata = metadata.event;

export default async function Event({
  params: { id },
}: {
  params: { id: string };
}) {
  const event = await getEvent(id);
  const records = await getRecordsByEvent(id);

  return (
    <main>
      <Header
        title={`${entityMetadata.name}: ${event.id}`}
        iconName={entityMetadata.iconName}
      >
        <Toolbar>
          {/*<ActionButton.Edit table="events" id={event.id} />*/}
          <ActionButton.Delete table="events" id={event.id} />
        </Toolbar>
      </Header>
      <EventDetail event={event} records={records} />
    </main>
  );
}
