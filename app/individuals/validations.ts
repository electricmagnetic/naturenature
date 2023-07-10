import * as yup from "yup";

import type { ValidationDto, InsertDto } from "@/types/database";

type Individual = ValidationDto<InsertDto<"individuals">>;

export const validateIndividual: yup.ObjectSchema<Individual> = yup.object({
  name: yup.string().required(),
});
