"use client";

import Form from "@/components/forms/Form";
import Field from "@/components/forms/Field";

import { lookupIndividuals } from "@/app/(entities)/individuals/api/client";
import { lookupSamples } from "@/app/(entities)/objects/api/client";

const ProtocolCitizenForm = () => {
  return (
    <>
      <Form.Fieldset title="Basic details" isPrimary>
        <div className="row">
          <div className="col-md-4">
            <Field.Select
              label="Type"
              name="type"
              dictionaryClass="type"
              dictionaryType="OBSERVATION"
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
      <Form.Fieldset title="Citizen">
        <div className="row">
          <div className="col-md-3">
            <Field.Input
              type="text"
              label="Banding Status"
              name="data.banded"
            />
          </div>
          <div className="col-md-3">
            <Field.Input
              type="text"
              label="Band Combo"
              name="data.band_combo"
            />
          </div>
          <div className="col-md-3">
            <Field.Input
              type="text"
              label="Life Stage"
              name="data.life_stage_guess"
            />
          </div>
          <div className="col-md-3">
            <Field.Input type="text" label="Sex" name="data.sex_guess" />
          </div>
        </div>
      </Form.Fieldset>
    </>
  );
};

export default ProtocolCitizenForm;
