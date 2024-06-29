"use server";
import { authXAdmin } from "@/authXAdmin";
import { customSanatize } from "@/lib/customSantize";
import { prisma } from "@/lib/db";
import { extractAxiosError } from "@/lib/utils";
import addServiceSchema from "@/types/AddServiceSchema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addNewService = async (
  service: any,
): Promise<{ error?: string; success?: boolean }> => {
  const session = await authXAdmin();
  if (!session?.user.id || session.user.type != "admin") {
    redirect("/");
    return {};
  }
  service = customSanatize(service);
  try {
    const schema = addServiceSchema.parse(service);
    const res = await prisma.service.create({
      data: {
        adminId: session.user.id,
        ...schema,
      },
    });
    redirect(`/admin/services/${res.id}/edit`);
    return {
      success: true,
    };
  } catch (ex: any) {
    const msg = extractAxiosError(ex);
    if (msg != null) {
      return {
        error: msg,
      };
    }
    return {
      error: `${ex?.message}`,
    };
  }
};
export const editService = async (
  service: any,
  serviceId: string,
): Promise<{ error?: string; success?: boolean }> => {
  const session = await authXAdmin();
  if (!session?.user.id || session.user.type != "admin") {
    redirect("/");
    return {};
  }
  service = customSanatize(service);
  try {
    const schema = addServiceSchema.parse(service);

    const res = await prisma.service.update({
      where: {
        id: serviceId,
      },
      data: {
        ...schema,
      },
    });

    // revalidatePath(`/admin/services/${res.id}/edit`);
    console.log(res);
    return {
      success: true,
    };
  } catch (ex: any) {
    console.log(ex);
    const msg = extractAxiosError(ex);
    if (msg != null) {
      return {
        error: msg,
      };
    }
    return {
      error: `${ex?.message}`,
    };
  }
};
