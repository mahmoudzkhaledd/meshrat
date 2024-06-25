"use server";
import { authXAdmin } from "@/authXAdmin";
import { customSanatize } from "@/lib/customSantize";
import { prisma } from "@/lib/db";
import { extractAxiosError, slugify } from "@/lib/utils";

import { reviewSchema } from "@/types/WebsiteInfo";
import { Prisma } from "@prisma/client";

import { redirect } from "next/navigation";

export const deleteReview = async (
  id: number,
): Promise<{ error?: string; success?: boolean }> => {
  const session = await authXAdmin();
  if (!session?.user.id || session.user.type != "admin") {
    redirect("/");
    return {};
  }

  try {
    await prisma.review.delete({
      where: {
        id: id,
      },
    });
    redirect("/admin/reviews");
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
