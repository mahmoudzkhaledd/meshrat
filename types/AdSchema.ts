import { z } from "zod";

export const createAdSchema = z
  .object({
    adId: z.string().nullable().optional(),
    title: z
      .string()
      .min(2, { message: "Title must be at least 2 characters." })
      .max(50, { message: "Title must not exceed 50 characters." }),
    description: z
      .string()
      .min(5, { message: "Description must be at least 5 characters." })
      .max(200, { message: "Description must not exceed 200 characters." }),
    offerBadge: z
      .string()
      .min(2, { message: "Offer badge text must be at least 2 characters." })
      .max(30, { message: "Offer badge text must not exceed 30 characters." }),
    backgroundImage: z
      .string()
      .url({ message: "Please enter a valid URL for the background image." })
      .nullable()
      .optional(),
    arabic: z.boolean().default(false),
    buttonText: z
      .string()
      .min(2, { message: "Button text must be at least 2 characters." })
      .max(20, { message: "Button text must not exceed 20 characters." }),
    buttonUrl: z.string().url(),
    startDate: z.date({ required_error: "Start date is required." }),
    endDate: z
      .date({ required_error: "End date is required." })

      .nullable(),
  })
  .refine((data) => data.endDate == null || data.endDate > data.startDate, {
    message: "End date must be greater than start date.",
    path: ["endDate"],
  });

export type CreateAdSchema = z.infer<typeof createAdSchema>;
