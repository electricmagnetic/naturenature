import { z } from "zod";

import { BaseFormSchema } from "@/components/forms/helpers";
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
  protocol: z.string(),
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
  //  event_id: null,
  individual_id: null,
  media_id: null,
  object_id: null,
  person_id: null,
  //  protocol: null,
  type: null,
};