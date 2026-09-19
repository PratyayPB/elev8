import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function RootLoading() {
  return (
    <div
      aria-busy="true"
      className="min-h-screen w-full bg-background flex flex-col items-center justify-center p-6 space-y-8"
    >
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-xl" />
        <Skeleton className="h-7 w-28 rounded-lg" />
      </div>

      <div className="w-full max-w-md space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6 mx-auto" />
        <Skeleton className="h-4 w-2/3 mx-auto" />
      </div>
    </div>
  );
}
