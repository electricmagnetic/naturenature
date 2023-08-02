import * as yup from "yup";

import type { ValidationDto, InsertDto } from "@/types/database";

// Types
type Object = ValidationDto<InsertDto<"objects">>;

// Validations
export const validate: yup.ObjectSchema<Object> = yup.object({
  class: yup.string().required(),
  type: yup.string().required(),
  name: yup.string(),
  data: yup.mixed(), // TODO
});

// Initial values
export const initialValues: Object = {
  class: "",
  type: "",
  name: "",
  data: "",
};
