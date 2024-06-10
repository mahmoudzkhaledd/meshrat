"use server";
import { authXAdmin } from "@/authXAdmin";
import { prisma } from "@/lib/db";
import { deleteImageFromUrl } from "@/lib/firebaseUtils";
import { extractAxiosError, slugify } from "@/lib/utils";

import { redirect } from "next/navigation";

export const deleteService = async (
  serviceId: string,
): Promise<{ error?: string; success?: boolean }> => {
  const session = await authXAdmin();
  if (!session?.user.id || session.user.type != "admin") {
    redirect("/");
    return {};
  }
  
  try {
    const service = await prisma.service.findUnique({
      where: {
        id: serviceId,
      },
    });
    if (service == null) throw new Error("Service not found");
    if (service.thumbnailImage != null) {
      const res = await deleteImageFromUrl(service.thumbnailImage);
      if (res != null) throw new Error(res);
    }
    const deleted = await prisma.service.delete({
      where: {
        id: serviceId,
      },
    });
    redirect(`/admin/services`);
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
