"use client";

import Form from "@/app/_components/forms/Form";
import Field from "@/app/_components/forms/Field";
import { lookupPeople } from "@/app/(entities)/people/api/client";

const ProtocolPersonForm = () => {
  return (
    <>
      <Form.Fieldset title="Basic details" isPrimary>
        <Field.Combobox
          label="Person"
          name="person_id"
          relatedObjectKey="person"
          lookupItems={lookupPeople}
        />
        <Field.Select
          label="Type"
          name="type"
          dictionaryClass="type"
          dictionaryType="PERSON"
        />
      </Form.Fieldset>
    </>
  );
};

export default ProtocolPersonForm;
