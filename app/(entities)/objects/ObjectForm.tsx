"use client";

import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Form from "@/components/forms/Form";
import Field from "@/components/forms/Field";
import { upsertObject } from "./api/mutations";
import { validate, initialValues } from "./validations";
import type { TableRow } from "@/types/database";
import { useEffect } from "react";

export default function ObjectForm({
  object,
}: {
  object?: TableRow<"objects">;
}) {
  const methods = useForm<any>({
    // TODO any
    defaultValues: object ? object : initialValues,
    resolver: yupResolver(validate),
  });

  // Conditional field based on 'class' selection
  const { watch, setValue } = methods;
  const objectClass = watch("class");

  useEffect(() => {
    if (!objectClass) setValue("type", "");
  }, [objectClass]);

  return (
    <Form table="objects" mutation={upsertObject} methods={methods}>
      <Form.Fieldset title="Object class/type">
        <div className="row">
          <div className="col-sm-6">
            <Field.Select
              label="Object Class"
              name="class"
              dictionaryClass="type"
              dictionaryType="object"
            />
          </div>
          <div className="col-sm-6">
            <Field.Select
              label="Type"
              name="type"
              dictionaryClass="type"
              dictionaryType={objectClass}
            />
          </div>
        </div>
      </Form.Fieldset>
      <Form.Fieldset title="Basic details">
        <Field type="text" label="Name" name="name" />
      </Form.Fieldset>
    </Form>
  );
}
