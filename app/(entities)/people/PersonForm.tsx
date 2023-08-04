"use client";

import Form from "@/components/forms/Form";
import Field from "@/components/forms/Field";
import { upsertPerson } from "./api/mutations";
import {
  validate,
  initialValues,
  formToDto,
  databaseToForm,
} from "./validations";
import type { TableRow } from "@/types/database";

const PersonFormContent = () => {
  return (
    <>
      <Form.Fieldset title="Basic details">
        <Field type="text" label="Name" name="name" />
      </Form.Fieldset>
      <Form.Fieldset title="Advanced details">
        <Field type="text" label="Associated user ID" name="user" />
      </Form.Fieldset>
    </>
  );
};

export default function PersonForm({
  person,
}: {
  person?: TableRow<"people">;
}) {
  return (
    <Form
      table="people"
      formToDto={formToDto}
      databaseToForm={databaseToForm}
      mutation={upsertPerson}
      render={PersonFormContent}
      entity={person}
      initialValues={initialValues}
      validator={validate}
    />
  );
}
