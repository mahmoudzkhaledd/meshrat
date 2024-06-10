import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Loading() {
  return (
    <div className="w-ful flex flex-col pb-10">
      <div className="mx-auto flex w-full max-w-[850px] flex-col gap-5">
        <Skeleton className="aspect-video w-full rounded-lg" />
        <div className=" space-y-6">
          {[...Array(10)].map((e, idx) => (
            <Skeleton className="h-5 w-full rounded-lg" key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
