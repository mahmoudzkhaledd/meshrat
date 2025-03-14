import React, { Fragment } from "react";
import { prisma } from "@/lib/db";
import BlogComponent from "./_components/BlogComponent";
import { toInt } from "@/lib/utils";
import CustomPagination from "@/components/GeneralComponents/CustomPagination";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getLanguage } from "@/Controllers/language/languageUtils";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Blogs",
};

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const page = toInt(searchParams.page) ?? 0;
  const lang = getLanguage();

  const blogs = await prisma.blog.findMany({
    where: {
      published: true,
      arabic: lang.lang == "ar",
    },
    take: 10,
    skip: page * 10,
    orderBy: {
      createdAt: "desc",
    },
  });
  const count = await prisma.blog.count({
    where: {
      published: true,
      arabic: lang.lang == "ar",
    },
  });
  const t = await getTranslations("blogsPage");
  return (
    <div className="w-full px-4">
      <Head>
        <link
          rel="canonical"
          href={`${process.env.URL}/blogs`}
          key="canonical"
        />
      </Head>
      {blogs.length == 0 ? (
        <div className="m-auto flex flex-col items-center justify-center px-4">
          <div className="max-w-md space-y-4 text-center">
            <h2 className="text-3xl font-bold">{t("notFound")}</h2>
            <p className="text-gray-500 dark:text-gray-400">
              {t("notFoundSubDescription")}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {blogs.map((post, idx) => {
            return (
              <Fragment key={idx}>
                <BlogComponent post={post} maxChars={200} />
                <hr className="mb-4" />
              </Fragment>
            );
          })}
        </div>
      )}
      <CustomPagination current={page} count={Math.ceil(count / 10)} />
    </div>
  );
}
