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
export const formToDto = (personForm: PersonFormInput): PersonDto => {
  return Object.assign({}, personForm, { user: personForm.user_id || null });
};
export const entityToForm = (person: Person): PersonFormInput => {
  return Object.assign({}, person, { user: person.user_id || "" });
};

// Initial values
export const initialValues: PersonFormInput = {
  name: "",
  user_id: null,
};
