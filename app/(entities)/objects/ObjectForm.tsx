"use client";

import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

import Form from "@/components/forms/Form";
import Field from "@/components/forms/Field";
import { upsertObject } from "./api/client";
import {
  ObjectFormSchema,
  initialValues,
  formToDto,
  entityToForm,
} from "./validations";
import type { Object } from "./types";

const ObjectFormContent = () => {
  const methods = useFormContext();

  // Conditional field based on 'class' selection
  const { watch, setValue } = methods;
  const objectClass = watch("class");

  useEffect(() => {
    if (!objectClass) setValue("type", "");
  }, [objectClass, setValue]);

  return (
    <>
      <Form.Fieldset title="Object class/type" isPrimary>
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
        <Field.Input type="text" label="Name" name="name" />
      </Form.Fieldset>
    </>
  );
};

export default function ObjectForm({ object }: { object?: Object }) {
  return (
    <Form
      table="objects"
      formToDto={formToDto}
      entityToForm={entityToForm}
      mutation={upsertObject}
      render={ObjectFormContent}
      entity={object}
      initialValues={initialValues}
      schema={ObjectFormSchema}
    />
  );
}
