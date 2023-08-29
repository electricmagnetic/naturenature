import { z } from "zod";

import { RecordFormSchema } from "../../validations";

const ProtocolSampleSchema = RecordFormSchema.extend({
  action: z.string(),
  data: z.object({
    value: z.string().or(z.number()).nullish(),
    units: z.string().nullish(),
    comments: z.string().nullish(),
  }),
  individual_id: z.string().uuid(),
  object_id: z.string().uuid(),
});

export type ProtocolSample = z.infer<typeof ProtocolSampleSchema>;

export default ProtocolSampleSchema;
