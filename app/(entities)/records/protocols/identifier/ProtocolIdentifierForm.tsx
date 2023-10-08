"use client";

import Form from "@/app/_components/forms/Form";
import Field from "@/app/_components/forms/Field";
import { lookupIdentifiers } from "@/app/(entities)/objects/api/client";
import { lookupIndividuals } from "@/app/(entities)/individuals/api/client";

const ProtocolIdentifierForm = () => {
  return (
    <>
      <Form.Fieldset title="Basic details" isPrimary>
        <div className="row">
          <div className="col">
            <Field.Combobox
              label="Identifier"
              name="object_id"
              relatedObjectKey="object"
              lookupItems={lookupIdentifiers}
            />
          </div>
          <div className="col">
            <Field.Select
              label="Action"
              name="action"
              dictionaryClass="action"
              dictionaryType="OBJECT_IDENTIFIER"
            />
          </div>
          <div className="col">
            <Field.Combobox
              label="Individual"
              name="individual_id"
              relatedObjectKey="individual"
              lookupItems={lookupIndividuals}
            />
          </div>
        </div>
      </Form.Fieldset>
    </>
  );
};

export default ProtocolIdentifierForm;
