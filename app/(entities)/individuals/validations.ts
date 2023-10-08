import { z } from "zod";

import { BaseFormSchema } from "@/app/_components/forms/helpers";
import type { Individual, IndividualDto } from "./types";

// Validations
export const IndividualFormSchema = BaseFormSchema.extend({
  name: z.string(),
  reference: z.string().nullable(),
});

export type IndividualFormInput = z.infer<typeof IndividualFormSchema>;

// Transformations
export const formToDto = (individualForm: IndividualFormInput): IndividualDto =>
  Object.assign(individualForm);
export const entityToForm = (individual: Individual): IndividualFormInput =>
  Object.assign(individual);

// Initial values
export const initialValues: IndividualFormInput = {
  name: "",
  reference: null,
};
