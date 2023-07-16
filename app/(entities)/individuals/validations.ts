import * as yup from "yup";

import type { ValidationDto, InsertDto } from "@/types/database";

// Types
type Individual = ValidationDto<InsertDto<"individuals">>;

// Validations
export const validate: yup.ObjectSchema<Individual> = yup.object({
  name: yup.string().required(),
});

// Initial values
export const initialValues: Individual = {
  name: "",
};
