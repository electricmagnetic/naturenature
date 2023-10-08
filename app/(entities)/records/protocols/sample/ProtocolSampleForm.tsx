"use client";

import Form from "@/app/_components/forms/Form";
import Field from "@/app/_components/forms/Field";

import { lookupIndividuals } from "@/app/(entities)/individuals/api/client";
import { lookupSamples } from "@/app/(entities)/objects/api/client";

const ProtocolSampleForm = () => {
  return (
    <>
      <Form.Fieldset title="Basic details" isPrimary>
        <div className="row">
          <div className="col-md-4">
            <Field.Select
              label="Action"
              name="action"
              dictionaryClass="action"
              dictionaryType="SAMPLE"
            />
          </div>
          <div className="col-md-4">
            <Field.Combobox
              label="Sample"
              name="object_id"
              relatedObjectKey="object"
              lookupItems={lookupSamples}
            />
          </div>
          <div className="col-md-4">
            <Field.Combobox
              label="Individual"
              name="individual_id"
              relatedObjectKey="individual"
              lookupItems={lookupIndividuals}
            />
          </div>
        </div>
      </Form.Fieldset>
      <Form.Fieldset title="Sample">
        <div className="row">
          <div className="col-md-3">
            <Field.Input type="text" label="Value" name="data.value" />
          </div>
          <div className="col-md-3">
            <Field.Select
              label="Units"
              name="data.units"
              dictionaryClass="unit"
            />
          </div>
          <div className="col-md-6">
            <Field.Input type="text" label="Comments" name="data.comments" />
          </div>
        </div>
      </Form.Fieldset>
    </>
  );
};

export default ProtocolSampleForm;
