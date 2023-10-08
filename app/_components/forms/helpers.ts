import { z } from "zod";

// Schema common to all forms
export const BaseFormSchema = z.object({
  id: z.string().optional(),
});
