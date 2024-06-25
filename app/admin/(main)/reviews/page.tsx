import CustomTable from "@/components/ui/CustomTable";
import React from "react";
import { reviewsCols } from "./_components/ReviewsCols";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "@/lib/db";
export default async function ReviewsPage() {
  const reviews = await prisma.review.findMany();
  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Reviews</h2>
        <Link href={"/admin/reviews/add"}>
          <Button>Add Review</Button>
        </Link>
      </div>
      <CustomTable
        columns={reviewsCols}
        data={JSON.parse(JSON.stringify(reviews))}
      />
    </div>
  );
}
