"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import type { FieldValues } from "react-hook-form";

import Form from "@/components/forms/Form";
import { InputField, Submit } from "@/components/forms/fields";
import { FormStatus } from "@/components/forms/helpers";
import { validateIndividual } from "./validations";
import type { Database } from "@/types/_supabase";

export default async function IndividualForm({ id }: { id?: string }) {
  const supabase = createClientComponentClient<Database>();

  const [status, setStatus] = useState("");
  if (id) console.log("EDIT MODE TODO");

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
      defaultValues={{ name: "" }}
      onSubmit={formSubmitted}
      resolver={validateIndividual}
    >
      <InputField type="text" label="Name" name="name" />
      <Submit>Submit</Submit>
      {status && <FormStatus status={status} />}
    </Form>
  );
}
