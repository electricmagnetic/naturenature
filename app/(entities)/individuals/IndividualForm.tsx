"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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
  const methods = useForm<any>({
    // TODO any
    defaultValues: individual ? individual : initialValues,
    resolver: yupResolver(validate),
  });

  return (
    <Form table="individuals" mutation={upsertIndividual} methods={methods}>
      <Form.Fieldset title="Basic details">
        <Field type="text" label="Name" name="name" />
      </Form.Fieldset>
    </Form>
  );
}
