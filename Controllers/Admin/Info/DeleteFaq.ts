"use server";
import { authXAdmin } from "@/authXAdmin";
import { prisma } from "@/lib/db";
import { extractAxiosError, slugify } from "@/lib/utils";
import { revalidatePath } from "next/cache";

import { redirect } from "next/navigation";

export const deleteQuestion = async (
  id: number,
): Promise<{ error?: string; success?: boolean }> => {
  const session = await authXAdmin();
  if (!session?.user.id || session.user.type != "admin") {
    redirect("/");
    return {};
  }

  try {
    await prisma.fAQ.delete({
      where: {
        id: id,
      },
    });
    redirect("/admin/faq");
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
