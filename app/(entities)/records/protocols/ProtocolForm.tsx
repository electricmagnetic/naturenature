import { z } from "zod";

import Form from "@/components/forms/Form";

import ProtocolCitizenForm from "./citizen/ProtocolCitizenForm";
import ProtocolIdentifierForm from "./identifier/ProtocolIdentifierForm";
import ProtocolMeasurementForm from "./measurement/ProtocolMeasurementForm";
import ProtocolPersonForm from "./person/ProtocolPersonForm";
import ProtocolSampleForm from "./sample/ProtocolSampleForm";

import ProtocolCitizenSchema from "./citizen/schema";
import ProtocolIdentifierSchema from "./identifier/schema";
import ProtocolMeasurementSchema from "./measurement/schema";
import ProtocolPersonSchema from "./person/schema";
import ProtocolSampleSchema from "./sample/schema";

import { upsertRecord } from "../api/client";
import {
  RecordFormSchema,
  initialValues,
  formToDto,
  entityToForm,
} from "../validations";
import type { Protocol } from "./metadata";
import type {
  Record,
  ProtocolComponents,
  RecordRelatedObjects,
  ProtocolSchemas,
} from "../types";

const ProtocolDummyForm = () => <span>Dummy Form</span>;

const protocolComponents: ProtocolComponents = {
  CITIZEN: ProtocolCitizenForm,
  GROUP: ProtocolDummyForm,
  IDENTIFIER: ProtocolIdentifierForm,
  INTERVENTION: ProtocolDummyForm,
  MEASUREMENT: ProtocolMeasurementForm,
  MEDIA: ProtocolDummyForm,
  OBSERVATION: ProtocolDummyForm,
  PERSON: ProtocolPersonForm,
  SAMPLE: ProtocolSampleForm,
};

const protocolSchemas: ProtocolSchemas = {
  CITIZEN: ProtocolCitizenSchema,
  GROUP: RecordFormSchema,
  IDENTIFIER: ProtocolIdentifierSchema,
  INTERVENTION: RecordFormSchema,
  MEASUREMENT: ProtocolMeasurementSchema,
  MEDIA: RecordFormSchema,
  OBSERVATION: RecordFormSchema,
  PERSON: ProtocolPersonSchema,
  SAMPLE: ProtocolSampleSchema,
};

export default function ProtocolForm({
  protocol,
  record,
  recordRelatedObjects,
  ...others
}: {
  protocol: Protocol;
  record?: Record;
  recordRelatedObjects?: RecordRelatedObjects;
}) {
  const SpecificProtocolForm = protocolComponents[protocol];
  const specificProtocolValidation = protocolSchemas[protocol];

  const initialValueWithSelectedProtocol = Object.assign({}, initialValues, {
    protocol: protocol,
  });

  return (
    <Form
      table="records"
      formToDto={formToDto}
      entityToForm={entityToForm}
      mutation={upsertRecord}
      render={SpecificProtocolForm}
      entity={record}
      relatedObjects={recordRelatedObjects}
      initialValues={initialValueWithSelectedProtocol}
      schema={specificProtocolValidation}
      {...others}
    />
  );
}
