import * as yup from "yup";
import { DateTime as LuxonDateTime } from "luxon";

import type { InsertDto, TableRow } from "@/types/database";

// Types
type Event = TableRow<"events">;
type EventDto = InsertDto<"events">;

// Validations
export const validate: yup.ObjectSchema<EventDto> = yup.object({
  id: yup.mixed(),
  created_at: yup.mixed(),
  comments: yup.string(),
  datetime: yup.string().required(), // TODO
  event_place_geometry: yup.mixed(), // TODO
  event_place_metadata: yup.mixed(), // TODO
  is_public: yup.bool(),
  place: yup.string(), // TODO UUID validation
  source: yup.string(), // TODO
  status: yup.string(), // TODO
  reference: yup.number().nullable(),
});

// Transformations
export const formToDto = (eventForm: EventDto): EventDto => {
  const event = Object.assign({}, eventForm, {
    source: eventForm.source || null,
    status: eventForm.status || null,
    event_place_metadata: eventForm.event_place_metadata || null,
    event_place_geometry: eventForm.event_place_geometry || null,
    place: eventForm.place || null,
  });
  // TODO
  console.log("formToDatabase");
  console.log(event);
  return event;
};

export const databaseToForm = (event: Event): EventDto => {
  const eventForm = Object.assign({}, event, {
    source: event.source || "",
    status: event.status || "",
    event_place_metadata: event.event_place_metadata || "",
    place: event.place || "",
    event_place_geometry: event.event_place_geometry
      ? JSON.stringify(event.event_place_geometry)
      : "",
    datetime: LuxonDateTime.fromISO(event.datetime).toISO({
      includeOffset: false,
      suppressSeconds: true,
      suppressMilliseconds: true,
    }),
  });
  // TODO
  console.log("databaseToForm");
  console.log(eventForm);
  return eventForm;
};

// Initial values
export const initialValues: EventDto = {
  comments: "",
  datetime: "",
  event_place_geometry: "",
  event_place_metadata: "",
  is_public: false,
  place: "",
  source: "",
  status: "",
};
