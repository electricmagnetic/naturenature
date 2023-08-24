import { z } from "zod";

import { BaseFormSchema } from "@/components/forms/helpers";
import type { Person, PersonDto } from "./types";

// Validations
export const PersonFormSchema = BaseFormSchema.extend({
  name: z.string(),
  user_id: z.string().uuid().nullable(),
});

export type PersonFormInput = z.infer<typeof PersonFormSchema>;

// Transformations
export const formToDto = (personForm: PersonFormInput): PersonDto =>
  Object.assign(personForm);

export const entityToForm = (person: Person): PersonFormInput =>
  Object.assign(person);

// Initial values
export const initialValues: PersonFormInput = {
  name: "",
  user_id: null,
};
