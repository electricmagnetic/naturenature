import Header from "@/components/layout/Header";

import EventForm from "../EventForm";

export default function CreateEvent() {
  return (
    <main>
      <Header.Entity entity="event" action={Header.Action.Create} />
      <EventForm />
    </main>
  );
}
