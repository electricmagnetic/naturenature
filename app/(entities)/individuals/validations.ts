import * as yup from "yup";

import type { ValidationDto, InsertDto, TableRow } from "@/types/database";

// Types
type Individual = TableRow<"individuals">;
type IndividualForm = ValidationDto<InsertDto<"individuals">>;

// Validations
export const validate: yup.ObjectSchema<IndividualForm> = yup.object({
  name: yup.string().required(),
});

// Transformations
export const formToDatabase = (individualForm: IndividualForm): Individual =>
  Object.assign(individualForm);
export const databaseToForm = (individual: Individual): IndividualForm =>
  Object.assign(individual);

// Initial values
export const initialValues: IndividualForm = {
  name: "",
};
