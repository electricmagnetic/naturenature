import { z } from "zod";

import { RecordFormSchema } from "../../validations";

const ProtocolCitizenSchema = RecordFormSchema.extend({
  type: z.string(),
  data: z.object({
    banded: z.string(),
    band_combo: z.string().optional(),
    life_stage_guess: z.string().optional(),
    sex_guess: z.string().optional(),
  }),
});

export type ProtocolCitizen = z.infer<typeof ProtocolCitizenSchema>;

export default ProtocolCitizenSchema;
