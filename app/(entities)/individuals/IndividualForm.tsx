"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useForm, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(validateIndividual),
  });

  return (
    <form onSubmit={handleSubmit(formSubmitted)}>
      <label className="form-label" htmlFor="name">
        Name
      </label>
      <input className="form-control" id="name" {...register("name")} />{" "}
      {/*TODO turn this into a component*/}
      {/*errors.name?.message && <p>{errors.name?.message}</p>*/}
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
      {status}
    </form>
  );
}
