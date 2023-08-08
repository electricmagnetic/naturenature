import * as yup from "yup";

import type { InsertDto, TableRow } from "@/types/database";

// Types
type Person = TableRow<"people">;
type PersonDto = InsertDto<"people">;

// Validations
export const validate: yup.ObjectSchema<PersonDto> = yup.object({
  id: yup.mixed(),
  created_at: yup.mixed(),
  name: yup.string().required(),
  user: yup.string().uuid(),
});

// Transformations
export const formToDto = (personForm: PersonDto): PersonDto => {
  return Object.assign({}, personForm, { user: personForm.user || null });
};
export const databaseToForm = (person: Person): PersonDto => {
  return Object.assign({}, person, { user: person.user || "" });
};

// Initial values
export const initialValues: PersonDto = {
  name: "",
  user: "",
};
