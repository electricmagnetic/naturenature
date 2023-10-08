"use client";

import Form from "@/app/_components/forms/Form";
import Field from "@/app/_components/forms/Field";
import { upsertEvent } from "./api/client";
import {
  EventFormSchema,
  initialValues,
  formToDto,
  entityToForm,
} from "./validations";
import { lookupPlaces } from "../places/api/client";
import type { Event, EventRelatedObjects } from "./types";

const EventFormContent = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <Form.Fieldset title="Basic details" isPrimary>
            <Field.Input
              type="datetime-local"
              label="Date/time"
              name="datetime"
            />
          </Form.Fieldset>
          <Form.Fieldset title="Metadata">
            <Field.Check label="Is public?" name="is_public" />
            <Field.Select
              label="Status"
              name="status"
              dictionaryClass="status"
            />
            <Field.Select
              label="Source"
              name="source"
              dictionaryClass="source"
            />
            <Field.Input type="number" label="Reference" name="reference" />
          </Form.Fieldset>
          <Form.Fieldset title="Comments">
            <Field.Input type="text" label="Comments" name="comments" />
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
            <Field.Combobox
              label="Place"
              name="place_id"
              relatedObjectKey="place"
              lookupItems={lookupPlaces}
            />
          </Form.Fieldset>
        </div>
      </div>
    </>
  );
};

export default function EventForm({
  event,
  eventRelatedObjects,
}: {
  event?: Event;
  eventRelatedObjects?: EventRelatedObjects;
}) {
  return (
    <Form
      table="events"
      formToDto={formToDto}
      entityToForm={entityToForm}
      mutation={upsertEvent}
      render={EventFormContent}
      entity={event}
      relatedObjects={eventRelatedObjects}
      initialValues={initialValues}
      schema={EventFormSchema}
    />
  );
}
