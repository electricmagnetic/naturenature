import { z } from "zod";

import { RecordFormSchema } from "../../validations";

const ProtocolMeasurementSchema = RecordFormSchema.extend({
  action: z.string(),
  type: z.string(),
  data: z.object({
    value: z.string().or(z.number()),
    units: z.string().nullish(),
  }),
  individual_id: z.string().uuid(),
});

export type ProtocolMeasurement = z.infer<typeof ProtocolMeasurementSchema>;

export default ProtocolMeasurementSchema;
