"use server";
import { authXAdmin } from "@/authXAdmin";
import { prisma } from "@/lib/db";
import { extractAxiosError, slugify } from "@/lib/utils";
import { addBlogSchema, editBlogSchema } from "@/types/BlogSchema";
import { Blog } from "@prisma/client";
import { randomBytes } from "crypto";
import { nanoid } from "nanoid";
import { redirect } from "next/navigation";
import { z } from "zod";
export const editBlog = async (
  data: Blog,
): Promise<{ error?: string; success?: boolean }> => {
  const session = await authXAdmin();
  if (!session?.user.id || session.user.type != "admin") {
    redirect("/");
    return {};
  }

  try {
    const tmpBlog = await prisma.blog.findUnique({
      where: {
        id: data.id,
      },
    });
    if(tmpBlog == null) throw new Error("Blog not found!");
    const model: z.infer<typeof editBlogSchema> = editBlogSchema.parse(data);
    let slug = tmpBlog.slug;
    const slugArr = slug.split("-");
    if (
      (slugArr.length >= 2 &&
        slugArr.at(slugArr.length - 2) == "" &&
        slugArr.at(slugArr.length - 1) != "") ||
      slugArr.length < 2
    ) {
      slug = slugify(model.title) + `-${randomBytes(12).toString("hex")}`;
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
