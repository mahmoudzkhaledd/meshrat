"use server";
import { cache } from "react";
import { prisma } from "@/lib/db";
import { WebsiteInfo } from "@prisma/client";
import { siteDefaultConfigs } from "@/constants/site";

const getInfo = async (): Promise<WebsiteInfo> => {
  const info = await prisma.websiteInfo.findUnique({
    where: { id: 1 },
  });
  return info ?? siteDefaultConfigs;
};

export const getWebsiteInfo = cache(getInfo);
