"use server";
import { authXAdmin } from "@/authXAdmin";
import { customSanatize } from "@/lib/customSantize";
import { prisma } from "@/lib/db";
import { extractAxiosError, slugify } from "@/lib/utils";

import { reviewSchema } from "@/types/WebsiteInfo";
import { Prisma } from "@prisma/client";

import { redirect } from "next/navigation";

export const addEditReview = async (
  data?: any,
): Promise<{ error?: string; success?: boolean }> => {
  const session = await authXAdmin();
  if (!session?.user.id || session.user.type != "admin") {
    redirect("/");
    return {};
  }
  if (data != null) {
    data = customSanatize(data);
  }
  try {
    let { title, date, personName, review, id } = reviewSchema.parse(data);
    if (id == null) {
      await prisma.review.create({
        data: { title, date, personName, review },
      });
    } else {
      await prisma.review.update({
        where: {
          id: id,
        },
        data: { title, date, personName, review },
      });
    }

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
