"use client";

import Form from "@/components/forms/Form";
import Field from "@/components/forms/Field";

import { lookupIndividuals } from "@/app/(entities)/individuals/api/client";

const ProtocolMeasurementForm = () => {
  return (
    <>
      <Form.Fieldset title="Basic details" isPrimary>
        <div className="row">
          <div className="col-md-4">
            <Field.Select
              label="Action"
              name="action"
              dictionaryClass="action"
              dictionaryType="MEASUREMENT"
            />
          </div>
          <div className="col-md-4">
            <Field.Select
              label="Type"
              name="type"
              dictionaryClass="type"
              dictionaryType="MEASUREMENT"
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
      <Form.Fieldset title="Measurement">
        <div className="row">
          <div className="col-md-6">
            <Field.Input type="text" label="Value" name="data.value" />
          </div>
          <div className="col-md-6">
            <Field.Select
              label="Units"
              name="data.units"
              dictionaryClass="unit"
            />
          </div>
        </div>
      </Form.Fieldset>
    </>
  );
};

export default ProtocolMeasurementForm;
