"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import type { FieldValues } from "react-hook-form";

import Loading from "@/app/loading";
import Form from "@/components/forms/Form";
import { InputField, Submit } from "@/components/forms/fields";
import { FormStatus } from "@/components/forms/helpers";
import { validate, initialValues } from "./validations";
import type { Database } from "@/types/_supabase";
import type { TableRow } from "@/types/database";

export default function IndividualForm({
  individual,
}: {
  individual?: TableRow<"individuals">;
}) {
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const [status, setStatus] = useState("");
  const [isPending, startTransition] = useTransition();

  const defaultValues = individual ? individual : initialValues;

  const formSubmitted = async (values: FieldValues) => {
    setStatus("Submitting");

    const { status, data, error } = await supabase
      .from("individuals")
      .upsert(values)
      .select()
      .single();

    if (error) setStatus(`Error ${error.message}`);
    if (status == 201 && data) {
      setStatus(`Created/Updated`);
      startTransition(() => router.push(`/individuals/${data.id}`));
    } else setStatus(`Status ${status}`);
  };

  return (
    <Form
      defaultValues={defaultValues}
      onSubmit={formSubmitted}
      resolver={validate}
    >
      <InputField type="text" label="Name" name="name" />
      <Submit>Submit</Submit>
      {isPending && <Loading />}
      {status && <FormStatus status={status} />}
    </Form>
  );
}
