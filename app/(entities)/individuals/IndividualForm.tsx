"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import type { FieldValues } from "react-hook-form";

import Form from "@/components/forms/Form";
import { InputField, Submit } from "@/components/forms/fields";
import { FormStatus } from "@/components/forms/helpers";
import { validate, initialValues } from "./validations";
import type { Database } from "@/types/_supabase";
import type { Row } from "@/types/database";

export default async function IndividualForm({
  individual,
}: {
  individual?: Row<"individuals">;
}) {
  const supabase = createClientComponentClient<Database>();

  const [status, setStatus] = useState("");
  if (individual) console.log("TODO EDIT MODE");
  const defaultValues = initialValues; // TODO EDIT MODE

  const formSubmitted = async (values: FieldValues) => {
    setStatus("Submitting");
    const { status, data, error } = await supabase
      .from("individuals")
      .insert(values)
      .select();
    if (error) setStatus(`Error ${error.message}`);
    if (status != 201) setStatus(`Not Created (${status})`);
    if (data) setStatus(`Created ${data[0].id}`);
  };

  return (
    <Form
      defaultValues={defaultValues}
      onSubmit={formSubmitted}
      resolver={validate}
    >
      <InputField type="text" label="Name" name="name" />
      <Submit>Submit</Submit>
      {status && <FormStatus status={status} />}
    </Form>
  );
}
