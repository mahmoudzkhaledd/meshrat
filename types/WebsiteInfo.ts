import { z } from "zod";

const reviewSchema = z.object({
  id: z.number().optional().nullable(),
  title: z.string(),
  date: z.date(),
  personName: z.string(),
  review: z.string(),
});

const websiteInfoSchema = z.object({
  phone: z.string(),
  location: z.string(),
  email: z.string(),
  linkedIn: z.string().optional(),
  facebook: z.string().optional(),
  instagram: z.string().optional(),
  whatsapp: z.string().optional(),
  twitter: z.string().optional(),
  seoKeyWords: z
    .array(
      z.object({
        name: z.string().min(1, "Please enter the keyword"),
      }),
    )
    .optional(),
});

export { websiteInfoSchema, reviewSchema };
