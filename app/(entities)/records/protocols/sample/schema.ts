import { z } from "zod";

import { RecordFormSchema } from "../../validations";

const ProtocolSampleSchema = RecordFormSchema.extend({
  action: z.string(),
  data: z.object({
    value: z.string().or(z.number()),
    units: z.string().optional(),
  }),
  individual_id: z.string().uuid(),
  object_id: z.string().uuid(),
});

export type ProtocolSample = z.infer<typeof ProtocolSampleSchema>;

export default ProtocolSampleSchema;
