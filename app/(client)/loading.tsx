import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function MainLoading() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Skeleton className="min-h-[350px] w-full rounded-lg" />
        <div className="space-y-4">
          <Skeleton className="h-[50px] w-full rounded-lg" />
          <Skeleton className="h-[50px] w-full rounded-lg" />
          <Skeleton className="h-[50px] w-full rounded-lg" />
          <Skeleton className="h-[50px] w-full rounded-lg" />
          <Skeleton className="h-[50px] w-full rounded-lg" />
          <Skeleton className="h-[50px] w-full rounded-lg" />
        </div>
      </div>
      <Skeleton className="min-h-[350px] mt-10 w-full rounded-lg" />

    </div>
  );
}
