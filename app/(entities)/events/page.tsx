import Header from "@/components/layout/Header";
import EventsList from "./EventsList";

export default function Events() {
  return (
    <main>
      <Header title="Events" iconName="calendar" />
      <EventsList />
    </main>
  );
}
