"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { FieldValues } from "react-hook-form";

import Form from "@/components/forms/Form";
import Field from "@/components/forms/Field";
import Submit from "@/components/forms/Submit";
import { upsertIndividual } from "./api/mutations";
import { validate, initialValues } from "./validations";
import type { TableRow } from "@/types/database";

export default function IndividualForm({
  individual,
}: {
  individual?: TableRow<"individuals">;
}) {
  const router = useRouter();

  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const defaultValues = individual ? individual : initialValues;

  const formSubmitted = useCallback(
    async (values: FieldValues) => {
      setIsLoading(true);

      const { status, data, error } = await upsertIndividual(values);

      if (error) {
        setStatus(`Error ${error.message}`);
      }
      if (status == 201 && data) {
        router.refresh();
        return router.push(`/individuals/${data.id}`);
      } else setStatus(`Status ${status}`);

      setIsLoading(false);
    },
    [setStatus, setIsLoading, router],
  );

  return (
    <Form
      defaultValues={defaultValues}
      onSubmit={formSubmitted}
      resolver={validate}
    >
      <Form.Fieldset title="Basic details">
        <Field type="text" label="Name" name="name" />
      </Form.Fieldset>

      <Form.Footer>
        <Submit isLoading={isLoading}>Submit</Submit>
      </Form.Footer>

      {status && <Form.Message message={status} />}
    </Form>
  );
}
