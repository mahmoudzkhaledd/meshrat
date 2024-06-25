import { z } from "zod";

export const addBlogSchema = z.object({
  title: z.string(),
  content: z.string(),
  arabic: z.boolean(),
});
export const editBlogSchema = z.object({
  ...addBlogSchema.shape,
  published: z.boolean(),
  slug: z.string(),
});
