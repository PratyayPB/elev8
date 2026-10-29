import React from "react";
import { PageHeaderSkeleton, CardSkeleton } from "@/components/skeletons";

export default function ResumeBuilderLoading() {
  return (
    <div aria-busy="true" className="max-w-7xl mx-auto space-y-8 pb-12">
      {/* Header skeleton */}
      <PageHeaderSkeleton hasAction={true} hasSection={false} />

      {/* Cards grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
}
