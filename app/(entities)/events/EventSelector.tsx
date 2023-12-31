import { useCallback, useEffect, useState } from "react";
import { getRecentEvents } from "./api/client";
import EventsList from "./EventsList";
import type { Event } from "./types";
import Loader from "@/app/_components/ui/Loader";

export default function EventSelector() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isPending, setIsPending] = useState(true);

  const getEvents = useCallback(() => {
    getRecentEvents().then((data) => {
      setEvents(data);
      setIsPending(false);
    });
  }, [setEvents, setIsPending]);

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  return isPending ? <Loader /> : <EventsList events={events} isSelector />;
}
