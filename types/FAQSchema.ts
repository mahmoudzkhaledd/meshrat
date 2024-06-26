import { z } from "zod";

export const faqSchema = z.object({
  question: z.string(),
  answer: z.string(),
  arabic: z.boolean(),
  id: z.number().optional().nullable(),
});
