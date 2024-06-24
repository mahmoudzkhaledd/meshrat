"use server";
import { authXAdmin } from "@/authXAdmin";
import { customSanatize } from "@/lib/customSantize";
import { prisma } from "@/lib/db";
import { extractAxiosError, slugify } from "@/lib/utils";
import { addBlogSchema, editBlogSchema } from "@/types/BlogSchema";
import { Blog } from "@prisma/client";
import { randomBytes } from "crypto";
import { nanoid } from "nanoid";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
export const editBlog = async (
  data: Blog,
): Promise<{ error?: string; success?: Blog }> => {
  const session = await authXAdmin();
  if (!session?.user.id || session.user.type != "admin") {
    redirect("/");
    return {};
  }
  data = customSanatize(data);
  try {
    const tmpBlog = await prisma.blog.findUnique({
      where: {
        id: data.id,
      },
    });
    if (tmpBlog == null) throw new Error("Blog not found!");
    const model: z.infer<typeof editBlogSchema> = editBlogSchema.parse(data);
    let slug = tmpBlog.slug;
    const slugArr = slug.split("-");

    if (
      ((slugArr.length >= 2 &&
        slugArr.at(slugArr.length - 2) == "" &&
        slugArr.at(slugArr.length - 1) != "") ||
        slugArr.length < 2) &&
      model.title != ""
    ) {
      slug =
        slugify(model.title) +
        `-${nanoid(10).replaceAll("-", "")}`;
    }
    const blog = await prisma.blog.update({
      where: {
        id: data.id,
      },
      data: {
        ...model,
        slug: slug,
      },
    });
    revalidatePath(`/admin/blogs/${blog.id}`);
    return {
      success: blog,
    };
  } catch (ex) {
    const err = extractAxiosError(ex);

    return {
      error: err ?? "Unknown error occured, please try again later.",
    };
  }
};
