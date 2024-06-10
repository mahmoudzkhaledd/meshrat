import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Loading() {
  return (
    <div className="space-y-10">
      <div className="flex w-full gap-4">
        <Skeleton className="aspect-video w-[400px] rounded-lg" />
        <div className="flex w-full flex-col">
          <Skeleton className="mb-5 h-10 w-full" />
          <Skeleton className="h-[300px] w-full" />
        </div>
      </div>
      <div className=" space-y-5">
        {[...Array(7)].map((e, idx) => (
          <Skeleton className="h-7 w-full" key={idx} />
        ))}
      </div>
    </div>
  );
}
