import * as yup from "yup";

import type { InsertDto, TableRow } from "@/types/database";

// Types
type Object = TableRow<"objects">;
type ObjectDto = InsertDto<"objects">;

// Validations
export const validate: yup.ObjectSchema<ObjectDto> = yup.object({
  id: yup.mixed(),
  created_at: yup.mixed(),
  class: yup.string().required(),
  type: yup.string().required(),
  name: yup.string(),
  data: yup.mixed(), // TODO
});

// Transformations
export const formToDto = (objectForm: ObjectDto): ObjectDto =>
  Object.assign(objectForm);
export const databaseToForm = (object: Object): ObjectDto =>
  Object.assign(object);

// Initial values
export const initialValues: ObjectDto = {
  class: "",
  type: "",
  name: "",
  data: "",
};
