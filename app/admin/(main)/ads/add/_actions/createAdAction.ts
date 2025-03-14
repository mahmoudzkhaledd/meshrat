"use server";

import { extractAxiosError } from "@/lib/utils";
import { createAdSchema } from "@/types/AdSchema";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
export const addAdvertsmentAction = async (data: any) => {
  try {
    const { adId, ...model } = createAdSchema.parse(data);
    const tmpAd = await prisma.advertisement.findFirst({
      where: {
        id: {
          not: adId ?? "asdasd",
        },
        arabic: model.arabic,
        OR: [
          {
            startDate: { lte: model.startDate },
            endDate: model.endDate != null ? { gte: model.endDate } : undefined,
          },
        ],
      },
    });
    if (tmpAd) {
      return {
        error:
          "An advertisement already exists within the selected date range. Please choose a different period.",
      };
    }
    const ad = await prisma.advertisement.upsert({
      create: {
        ...model,
      },
      where: {
        id: adId ?? "asdasd",
      },
      update: {
        ...model,
      },
    });
    redirect("/admin/ads");
  } catch (ex) {
    return {
      error: extractAxiosError(ex),
    };
  }
};
