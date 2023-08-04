"use client";

import Form from "@/components/forms/Form";
import Field from "@/components/forms/Field";
import { upsertIndividual } from "./api/mutations";
import {
  validate,
  initialValues,
  formToDto,
  databaseToForm,
} from "./validations";
import type { TableRow } from "@/types/database";

const IndividualFormContent = () => {
  return (
    <>
      <Form.Fieldset title="Basic details">
        <Field type="text" label="Name" name="name" />
      </Form.Fieldset>
    </>
  );
};

export default function IndividualForm({
  individual,
}: {
  individual?: TableRow<"individuals">;
}) {
  return (
    <Form
      table="individuals"
      formToDto={formToDto}
      databaseToForm={databaseToForm}
      mutation={upsertIndividual}
      render={IndividualFormContent}
      entity={individual}
      initialValues={initialValues}
      validator={validate}
    />
  );
}
