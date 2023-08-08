"use client";

import Form from "@/components/forms/Form";
import Field from "@/components/forms/Field";
import { upsertIndividual } from "./api/client";
import {
  validate,
  initialValues,
  formToDto,
  databaseToForm,
} from "./validations";
import type { Individual } from "./types";

const IndividualFormContent = () => {
  return (
    <>
      <Form.Fieldset title="Basic details" isPrimary>
        <Field.Input type="text" label="Name" name="name" />
        <Field.Input type="text" label="Reference" name="reference" />
      </Form.Fieldset>
    </>
  );
};

export default function IndividualForm({
  individual,
}: {
  individual?: Individual;
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
