"use client";

import Form from "@/components/forms/Form";
import Field from "@/components/forms/Field";
import { upsertIndividual } from "./api/mutations";
import { validate, initialValues } from "./validations";
import type { TableRow } from "@/types/database";

export default function IndividualForm({
  individual,
}: {
  individual?: TableRow<"individuals">;
}) {
  const defaultValues = individual ? individual : initialValues;

  return (
    <Form
      defaultValues={defaultValues}
      resolver={validate}
      table="individuals"
      mutation={upsertIndividual}
    >
      <Form.Fieldset title="Basic details">
        <Field type="text" label="Name" name="name" />
      </Form.Fieldset>
    </Form>
  );
}
