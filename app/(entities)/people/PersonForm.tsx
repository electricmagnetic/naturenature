"use client";

import Form from "@/app/_components/forms/Form";
import Field from "@/app/_components/forms/Field";
import { upsertPerson } from "./api/client";
import {
  PersonFormSchema,
  initialValues,
  formToDto,
  entityToForm,
} from "./validations";
import type { Person } from "./types";

const PersonFormContent = () => {
  return (
    <>
      <Form.Fieldset title="Basic details" isPrimary>
        <Field.Input type="text" label="Name" name="name" />
      </Form.Fieldset>
      <Form.Fieldset title="Advanced details">
        <Field.Input type="text" label="Linked user ID" name="user_id" />
      </Form.Fieldset>
    </>
  );
};

export default function PersonForm({ person }: { person?: Person }) {
  return (
    <Form
      table="people"
      formToDto={formToDto}
      entityToForm={entityToForm}
      mutation={upsertPerson}
      render={PersonFormContent}
      entity={person}
      initialValues={initialValues}
      schema={PersonFormSchema}
    />
  );
}
