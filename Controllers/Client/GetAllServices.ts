import { prisma } from "@/lib/db";
export const getAllServices = async ({ lang }: { lang: "ar" | "en" }) => {
  return await prisma.service.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where: {
      active: true,
      arabic: lang == "ar",
    },
  });
};
