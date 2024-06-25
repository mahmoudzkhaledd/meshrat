import { z } from "zod";

const addServiceSchema = z.object({
  name: z.string(),
  category: z.string(),
  price: z.number(),
  arabic: z.boolean(),
  description: z.string().optional(),
  subDescription: z.string().optional(),
  active: z.boolean(),
});

export default addServiceSchema;
