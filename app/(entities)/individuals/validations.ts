import * as yup from "yup";

import type { Individual, IndividualDto } from "./types";

// Validations
export const validate: yup.ObjectSchema<IndividualDto> = yup.object({
  id: yup.mixed(),
  created_at: yup.mixed(),
  name: yup.string().required(),
  reference: yup.string(),
});

// Transformations
export const formToDto = (individualForm: IndividualDto): IndividualDto =>
  Object.assign(individualForm);
export const databaseToForm = (individual: Individual): IndividualDto =>
  Object.assign(individual);

// Initial values
export const initialValues: IndividualDto = {
  name: "",
  reference: "",
};
