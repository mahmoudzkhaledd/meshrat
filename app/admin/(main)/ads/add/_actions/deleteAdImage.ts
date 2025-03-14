"use server";
import { authXAdmin } from "@/authXAdmin";
import { prisma } from "@/lib/db";
import { deleteImageFromUrl } from "@/lib/firebaseUtils";
import { extractAxiosError, slugify } from "@/lib/utils";
import { nanoid } from "nanoid";
import { redirect } from "next/navigation";

export const deleteAdImage = async (
  adId: string,
): Promise<{ error?: string; success?: boolean }> => {
  const session = await authXAdmin();
  if (!session?.user.id || session.user.type != "admin") {
    redirect("/");
    return {};
  }
  try {
    const ad = await prisma.advertisement.findUnique({
      where: {
        id: adId,
      },
    });
    if (ad == null) throw new Error("Ad not found");
    if (ad.backgroundImage == null)
      return {
        success: true,
      };
    const res = await deleteImageFromUrl(ad.backgroundImage);
    if (res != null) {
      throw new Error(res);
    }
    await prisma.advertisement.update({
      where: {
        id: ad.id,
      },
      data: {
        backgroundImage: null,
      },
    });
    return {
      success: true,
    };
  } catch (ex) {
    const err = extractAxiosError(ex);
    return {
      error: err ?? "Unknown error occured, please try again later.",
    };
  }
};
