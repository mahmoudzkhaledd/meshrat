"use server";
import { authXAdmin } from "@/authXAdmin";
import { customSanatize } from "@/lib/customSantize";
import { prisma } from "@/lib/db";
import { extractAxiosError, slugify } from "@/lib/utils";
import { faqSchema } from "@/types/FAQSchema";
import { revalidatePath } from "next/cache";

import { redirect } from "next/navigation";

export const addEditFAQ = async (
  data: any,
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
    let { question, answer, arabic, id } = faqSchema.parse(data);
    if (id == null) {
      await prisma.fAQ.create({
        data: { question, answer, arabic },
      });
    } else {
      await prisma.fAQ.update({
        where: {
          id: id,
        },
        data: { question, answer, arabic },
      });
    }
    revalidatePath('/admin/faq');
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
