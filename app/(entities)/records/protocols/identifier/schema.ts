import { z } from "zod";

import { RecordFormSchema } from "../../validations";

const ProtocolIdentifierSchema = RecordFormSchema.extend({
  object_id: z.string(),
  action: z.string(),
  individual_id: z.string().uuid(),
});

export type ProtocolIdentifier = z.infer<typeof ProtocolIdentifierSchema>;

export default ProtocolIdentifierSchema;
