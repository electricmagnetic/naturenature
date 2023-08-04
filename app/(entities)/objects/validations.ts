import * as yup from "yup";

import type { ValidationDto, InsertDto, TableRow } from "@/types/database";

// Types
type Object = TableRow<"objects">;
type ObjectForm = ValidationDto<InsertDto<"objects">>;

// Validations
export const validate: yup.ObjectSchema<ObjectForm> = yup.object({
  class: yup.string().required(),
  type: yup.string().required(),
  name: yup.string(),
  data: yup.mixed(), // TODO
});

// Transformations
export const formToDatabase = (objectForm: ObjectForm): Object =>
  Object.assign(objectForm);
export const databaseToForm = (object: Object): ObjectForm =>
  Object.assign(object);

// Initial values
export const initialValues: ObjectForm = {
  class: "",
  type: "",
  name: "",
  data: "",
};
