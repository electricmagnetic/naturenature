import { z } from "zod";

import { BaseFormSchema } from "@/app/_components/forms/helpers";
import { Protocol } from "./protocols/metadata";
import type { Record, RecordDto } from "./types";

// Validations
export const RecordFormSchema = BaseFormSchema.extend({
  action: z.string().nullable(),
  data: z.unknown(),
  event_id: z.string().uuid(),
  individual_id: z.string().uuid().nullable(),
  media_id: z.string().uuid().nullable(),
  object_id: z.string().uuid().nullable(),
  person_id: z.string().uuid().nullable(),
  protocol: z.nativeEnum(Protocol),
  type: z.string().nullable(),
});

export type RecordFormInput = z.infer<typeof RecordFormSchema>;

// Transformations
export const formToDto = (recordForm: RecordFormInput): RecordDto =>
  Object.assign(recordForm);

export const entityToForm = (record: Record): RecordFormInput => {
  const recordForm = RecordFormSchema.parse(Object.assign(record));

  return recordForm;
};

// Initial values
export const initialValues: Partial<RecordFormInput> = {
  action: null,
  data: null,
  individual_id: null,
  media_id: null,
  object_id: null,
  person_id: null,
  type: null,
};
