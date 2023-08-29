import { z } from "zod";

import { RecordFormSchema } from "../../validations";

const ProtocolPersonSchema = RecordFormSchema.extend({
  person_id: z.string().uuid(),
  type: z.string(),
});

export type ProtocolPerson = z.infer<typeof ProtocolPersonSchema>;

export default ProtocolPersonSchema;
