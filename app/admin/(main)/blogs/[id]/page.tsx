
import React from "react";
import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import BlogProvider from "./_components/BlogProvider";
import AddBlogBody from "./_components/AddBlogBody";
export default async function AddBlogPage({
  params,
}: {
  params: { id: string };
}) {
  const blog = await prisma.blog.findUnique({
    where: {
      id: params.id,
    },
  });
  if (blog == null) {
    return notFound();
  }
  return (
    <BlogProvider className="" blog={JSON.parse(JSON.stringify(blog))}>
      <AddBlogBody />
    </BlogProvider>
  );
}
