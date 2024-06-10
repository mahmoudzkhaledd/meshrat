import React from "react";
import { prisma } from "@/lib/db";
import CustomTable from "@/components/ui/CustomTable";
import { blogsCols } from "./_components/BlogsCols";
import AddBlogBtn from "./_components/AddBlogBtn";
import { toInt } from "@/lib/utils";
import CustomPagination from "@/components/GeneralComponents/CustomPagination";
export default async function BlogsPage({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const page = toInt(searchParams.page) ?? 0;
  const blogs = await prisma.blog.findMany({
    orderBy: {
      createdAt: "desc",
    },
    skip: page * 10,
    take: 10,
    select: {
      title: true,
      published: true,
      visits: true,
      createdAt: true,
      slug: true,
      id: true,
    },
  });
  const count = await prisma.blog.count();
  return (
    <main className="flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="grid auto-rows-max items-start gap-4 pb-20 md:gap-8 lg:col-span-2">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Blogs</h2>
          <AddBlogBtn />
        </div>
        <CustomTable
          columns={blogsCols}
          data={JSON.parse(JSON.stringify(blogs))}
          pagination={true}
        />
      </div>
      <CustomPagination count={Math.ceil(count / 10)} current={page} />
    </main>
  );
}
