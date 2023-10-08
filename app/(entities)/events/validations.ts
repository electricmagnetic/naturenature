import { z } from "zod";
import { DateTime as LuxonDateTime } from "luxon";

import { BaseFormSchema } from "@/app/_components/forms/helpers";
import type { Event, EventDto } from "./types";

// Validations
export const EventFormSchema = BaseFormSchema.extend({
  comments: z.string().nullable(),
  datetime: z.string(), //TODO z.string().datetime(),
  event_place_geometry: z.string().nullable(), // geometry validated by database
  event_place_metadata: z.string().nullable(), // TODO JSON
  is_public: z.boolean(),
  place_id: z.string().uuid().nullable(),
  source: z.string().nullable(),
  status: z.string().nullable(),
  reference: z.coerce.number().nullable(),
});

export type EventFormInput = z.infer<typeof EventFormSchema>;

// Transformations
export const formToDto = (eventForm: EventFormInput): EventDto => {
  const event = Object.assign({}, eventForm, {
    datetime: LuxonDateTime.fromISO(eventForm.datetime).toUTC().toISO(),
  }) as EventDto;

  return event;
};

export const entityToForm = (event: Event): EventFormInput => {
  const eventForm = EventFormSchema.parse(
    Object.assign({}, event, {
      event_place_geometry: event.event_place_geometry
        ? JSON.stringify(event.event_place_geometry)
        : null,
      datetime: LuxonDateTime.fromISO(event.datetime).toLocal().toISO({
        includeOffset: false,
        suppressSeconds: true,
        suppressMilliseconds: true,
      }),
    }),
  );

  return eventForm;
};

// Initial values
export const initialValues: Partial<EventFormInput> = {
  comments: null,
  // datetime is undefined here, requiring user input
  event_place_geometry: null,
  event_place_metadata: null,
  is_public: false,
  place_id: null,
  source: null,
  status: null,
  reference: null,
};
