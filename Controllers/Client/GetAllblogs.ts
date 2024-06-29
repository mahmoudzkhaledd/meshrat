import { prisma } from "@/lib/db";

export const getAllBlogs = async ({ lang }: { lang: "ar" | "en" }) => {
  return await prisma.blog.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where: {
      published: true,
      arabic: lang == "ar",
    },
  });
};
