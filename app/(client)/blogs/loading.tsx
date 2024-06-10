import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function LoadingSkeleton() {
  return (
    <div className="flex flex-row w-full gap-4">
      <Skeleton className="aspect-video w-[200px] rounded-md" />
      <div className="flex flex-col w-full gap-4">
        <Skeleton className="h-[10px] w-full block" />
        <Skeleton className="h-[100px] w-full block" />
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="flex flex-col gap-10 w-full pb-5">
      {[...Array(5)].map((e, idx) => (
        <LoadingSkeleton key={idx} />
      ))}
    </div>
  );
}
