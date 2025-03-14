import { Button } from "@/components/ui/button";
import CustomTable from "@/components/ui/CustomTable";
import Link from "next/link";
import React from "react";
import { adCols } from "./_components/AdsCols";
import { prisma } from "@/lib/db";
export default async function AdsPage() {
  const ads = await prisma.advertisement.findMany({
    orderBy: {
      startDate: "desc",
    },
  });

  return (
    <div className="w-full">
      <div className="mb-4 flex w-full items-center justify-between gap-4">
        <h2 className="text-lg font-bold">Ads</h2>
        <Link href={"/admin/ads/add"}>
          <Button>New Ad</Button>
        </Link>
      </div>
      <CustomTable data={ads} columns={adCols} />
    </div>
  );
}
