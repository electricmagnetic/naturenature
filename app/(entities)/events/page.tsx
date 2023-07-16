import metadata from "@/app/(entities)/metadata";
import Header from "@/components/layout/Header";
import { CreateActionButton } from "@/components/ui/ActionButton";

import EventsList from "./EventsList";

const entityMetadata = metadata.event;

export default function Events() {
  return (
    <main>
      <Header
        title={entityMetadata.pluralName}
        iconName={entityMetadata.iconName}
      >
        <CreateActionButton href="/create/individual" />
      </Header>
      <EventsList />
    </main>
  );
}
