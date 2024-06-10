"use server";
import { authXAdmin } from "@/authXAdmin";
import { prisma } from "@/lib/db";
import { deleteImageFromUrl } from "@/lib/firebaseUtils";
import { extractAxiosError, slugify } from "@/lib/utils";
import { nanoid } from "nanoid";
import { redirect } from "next/navigation";

export const deleteBlog = async (
  blogId: string,
): Promise<{ error?: string; success?: boolean }> => {
  const session = await authXAdmin();
  if (!session?.user.id || session.user.type != "admin") {
    redirect("/");
    return {};
  }
  try {
    const blog = await prisma.blog.findUnique({
      where: {
        id: blogId,
      },
    });
    if (blog == null) throw new Error("Blog not found");
    if (blog.bannerImage != null) {
      const res = await deleteImageFromUrl(blog.bannerImage);
      if (res != null) throw new Error(res);
    }
    const deleted = await prisma.blog.delete({
      where: {
        id: blogId,
      },
    });
    redirect(`/admin/blogs`);
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
