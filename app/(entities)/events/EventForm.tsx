"use client";

import Form from "@/components/forms/Form";
import Field from "@/components/forms/Field";
import { upsertEvent } from "./api/mutations";
import {
  validate,
  initialValues,
  formToDto,
  databaseToForm,
} from "./validations";
import type { TableRow } from "@/types/database";

type Event = TableRow<"events">;

const EventFormContent = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <Form.Fieldset title="Basic details">
            <Field.Input
              type="datetime-local"
              label="Date/time"
              name="datetime"
            />
            {/* status */}
            {/* is_public */}
          </Form.Fieldset>
        </div>
        <div className="col-md-6">
          <Form.Fieldset title="Location">
            <Field.Input
              type="text"
              label="Event Place (geometry)"
              name="event_place_geometry"
            />
            {/* event place metadata */}
            <Field.Combobox label="Place" name="place" entity="place" />
          </Form.Fieldset>
        </div>
      </div>
      <Form.Fieldset title="Additional information">
        <Field.Select label="Source" name="source" dictionaryClass="source" />
        <Field.Input type="text" label="Comments" name="comments" />
      </Form.Fieldset>
    </>
  );
};

export default function EventForm({ event }: { event?: Event }) {
  return (
    <Form
      table="events"
      formToDto={formToDto}
      databaseToForm={databaseToForm}
      mutation={upsertEvent}
      render={EventFormContent}
      entity={event}
      initialValues={initialValues}
      validator={validate}
    />
  );
}
