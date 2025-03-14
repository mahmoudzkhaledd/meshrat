import { notFound } from "next/navigation";
import React from "react";
import { prisma } from "@/lib/db";
import AdvertisementForm from "../add/page";
export default async function page({
  searchParams,
}: {
  searchParams: Record<string, string | undefined>;
}) {
  const id = searchParams["id"];
  if (!id) return notFound();
  const ad = await prisma.advertisement.findUnique({
    where: {
      id,
    },
  });
  if (!ad) return notFound();
  return <AdvertisementForm adv={ad} />;
}
