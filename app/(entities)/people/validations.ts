import * as yup from "yup";
import type { Person, PersonDto } from "./types";

// Validations
export const validate: yup.ObjectSchema<PersonDto> = yup.object({
  id: yup.mixed(),
  created_at: yup.mixed(),
  name: yup.string().required(),
  user_id: yup.string().uuid(),
});

// Transformations
export const formToDto = (personForm: PersonDto): PersonDto => {
  return Object.assign({}, personForm, { user: personForm.user_id || null });
};
export const databaseToForm = (person: Person): PersonDto => {
  return Object.assign({}, person, { user: person.user_id || "" });
};

// Initial values
export const initialValues: PersonDto = {
  name: "",
  user_id: "",
};
