import { z } from "zod";

import { RecordFormSchema } from "../../validations";

const ProtocolCitizenSchema = RecordFormSchema.extend({
  type: z.string(),
  data: z.object({
    banded: z.string(),
    band_combo: z.string().nullish(),
    life_stage_guess: z.string().nullish(),
    sex_guess: z.string().nullish(),
  }),
});

export type ProtocolCitizen = z.infer<typeof ProtocolCitizenSchema>;

export default ProtocolCitizenSchema;
