"use server";
import { authXAdmin } from "@/authXAdmin";
import { prisma } from "@/lib/db";
import { extractAxiosError, slugify } from "@/lib/utils";
import { addBlogSchema } from "@/types/BlogSchema";
import { nanoid } from "nanoid";
import { redirect } from "next/navigation";
import { z } from "zod";
export const addNewBlog = async (
  data?: any,
): Promise<{ error?: string; success?: boolean }> => {
  const session = await authXAdmin();
  if (!session?.user.id || session.user.type != "admin") {
    redirect("/");
    return {};
  }
  try {
    const model: z.infer<typeof addBlogSchema> =
      data != null
        ? addBlogSchema.parse(data)
        : {
            title: "",
            content: "",
          };

    const blog = await prisma.blog.create({
      data: {
        ...model,
        slug: slugify(model.title) + `-${nanoid(10)}`,
        admin: {
          connect: {
            id: session.user.id,
          },
        },
      },
    });
    redirect(`/admin/blogs/${blog.id}`);
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
