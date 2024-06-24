"use server";
import { authXAdmin } from "@/authXAdmin";
import { customSanatize } from "@/lib/customSantize";
import { prisma } from "@/lib/db";
import { extractAxiosError, slugify } from "@/lib/utils";

import { websiteInfoSchema } from "@/types/WebsiteInfo";
import { Prisma } from "@prisma/client";

import { redirect } from "next/navigation";

export const saveWebsiteInfo = async (
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
    let model = websiteInfoSchema.parse(data);
    const tmp = await prisma.websiteInfo.findUnique({ where: { id: 1 } });

    
    if (tmp == null) {
      await prisma.websiteInfo.create({
        data: {
          ...model,
          facebook: model.facebook == "" ? null : model.facebook,
          instagram: model.instagram == "" ? null : model.instagram,
          linkedIn: model.linkedIn == "" ? null : model.linkedIn,
          twitter: model.twitter == "" ? null : model.twitter,
          whatsapp: model.whatsapp == "" ? null : model.whatsapp,
        },
      });
    } else {
      await prisma.websiteInfo.update({
        where: { id: 1 },
        data: model,
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
