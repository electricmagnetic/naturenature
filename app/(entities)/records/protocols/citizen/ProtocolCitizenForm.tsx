"use client";

import Form from "@/app/_components/forms/Form";
import Field from "@/app/_components/forms/Field";

import { lookupIndividuals } from "@/app/(entities)/individuals/api/client";

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
            <Field.Select
              label="Banding Status"
              name="data.banded"
              dictionaryClass="type"
              dictionaryType="band"
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
            <Field.Select
              label="Life Stage (guess)"
              name="data.life_stage_guess"
              dictionaryClass="type"
              dictionaryType="life_stage"
            />
          </div>
          <div className="col-md-3">
            <Field.Select
              label="Sex (guess)"
              name="data.sex_guess"
              dictionaryClass="type"
              dictionaryType="sex"
            />
          </div>
        </div>
      </Form.Fieldset>
    </>
  );
};

export default ProtocolCitizenForm;
