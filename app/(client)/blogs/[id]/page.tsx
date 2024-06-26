import React from "react";
import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import { authXAdmin } from "@/authXAdmin";
import { Metadata } from "next";
import { convert } from "html-to-text";
import { cache } from "react";
import { Blog } from "@prisma/client";
import { Info } from "lucide-react";
import { cn } from "@/lib/utils";
const checkAuth = cache(async () => {
  const session = await authXAdmin();
  return session;
});
const getPostById = cache(async (id: string): Promise<Blog | null> => {
  const session = await checkAuth();
  id = decodeURIComponent(id);
  const blog = await prisma.blog.findUnique({
    where: {
      slug: id,
    },
  });
  if (session?.user.id && session.user.type == "admin") {
    return blog;
  }
  if (blog?.published == true) return blog;
  return null;
});

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const blog = await getPostById(params.id);

  return {
    title: blog?.title ?? "Unknown post",
    description: convert(blog?.content ?? ""),
    openGraph: {
      images: [
        {
          url: blog?.bannerImage ?? "/images/logo.png",
        },
      ],
    },
  };
}

export default async function BlogPage({ params }: { params: { id: string } }) {
  const blog = await getPostById(params.id);
  if (blog == null) return notFound();
  const session = await checkAuth();
  if (session?.user.id == null || session?.user.type != "admin") {
    const upd = await prisma.blog.update({
      where: {
        id: blog.id,
      },
      data: {
        visits: {
          increment: 1,
        },
      },
    });
  }
  const isArabic = blog.arabic;
  return (
    <div
      className={cn("mx-auto max-w-[1100px]", {
        "arabic-text": isArabic,
        "english-text": !isArabic,
      })}
    >
      {!blog.published && (
        <div className="mb-4 flex w-full gap-2 rounded-md bg-red-500 px-5 py-3 text-white">
          <Info className="w-4 min-w-4" /> This article is not published and you
          entered by admin mode.
        </div>
      )}
      <h1 className="mb-6 text-xl font-semibold lg:text-4xl">{blog.title}</h1>
      {blog.bannerImage && (
        <img
          src={blog.bannerImage}
          alt="Banner Image"
          className="mx-auto aspect-video w-full rounded-lg object-cover object-center"
        />
      )}
      <div className="prose prose-gray mt-5 max-w-full dark:prose-invert">
        <article className="pb-20">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </article>
      </div>
    </div>
  );
}
