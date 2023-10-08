import { z } from "zod";

import { BaseFormSchema } from "@/app/_components/forms/helpers";
import type { Object, ObjectDto } from "./types";

// Validations
export const ObjectFormSchema = BaseFormSchema.extend({
  class: z.string(),
  type: z.string(),
  name: z.string().nullable(),
  data: z.string().nullable(), // TODO JSON
});

export type ObjectFormInput = z.infer<typeof ObjectFormSchema>;

// Transformations
export const formToDto = (objectForm: ObjectFormInput): ObjectDto =>
  Object.assign(objectForm);
export const entityToForm = (object: Object): ObjectFormInput =>
  Object.assign(object);

// Initial values
export const initialValues: ObjectFormInput = {
  class: "",
  type: "",
  name: null,
  data: null,
};
