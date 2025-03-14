"use server";

import { extractAxiosError } from "@/lib/utils";
import { prisma } from "@/lib/db";
import { deleteImageFromUrl } from "@/lib/firebaseUtils";
export const deleteAdAction = async (adId: string) => {
  try {
    const ad = await prisma.advertisement.findUnique({ where: { id: adId } });
    if (!ad) {
      return {
        error: "Ad Not Found",
      };
    }
    if (ad.backgroundImage) {
      await deleteImageFromUrl(ad.backgroundImage);
    }
    await prisma.advertisement.delete({ where: { id: ad.id } });
  } catch (ex) {
    return {
      error: extractAxiosError(ex),
    };
  }
};
