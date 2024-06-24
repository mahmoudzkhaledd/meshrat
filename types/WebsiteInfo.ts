import { z } from "zod";

const reviewSchema = z.object({
  websiteInfoId: z.number(),
  imageUrl: z.string(),
  title: z.string(),
  subTitle: z.string(),
  text: z.string(),
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
});

export { websiteInfoSchema, reviewSchema };
