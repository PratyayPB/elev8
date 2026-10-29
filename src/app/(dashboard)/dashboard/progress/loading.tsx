import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { PageHeaderSkeleton, CardSkeleton, ListSkeleton } from "@/components/skeletons";

export default function ProgressLoading() {
  return (
    <div aria-busy="true" className="space-y-10 max-w-7xl mx-auto pb-10">
      <PageHeaderSkeleton hasAction={false} hasSection={true} />

      {/* 1. Module Overview Skeleton (Grid of 5 module cards) */}
      <section className="space-y-4">
        <Skeleton className="h-6 w-40" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardSkeleton hasFooter={false} />
          <CardSkeleton hasFooter={false} />
          <CardSkeleton hasFooter={false} />
          <CardSkeleton hasFooter={false} />
          <CardSkeleton hasFooter={false} />
        </div>
      </section>

      {/* 2. Activity Ledger Timeline Skeleton */}
      <section className="space-y-4">
        <Skeleton className="h-6 w-44" />
        <div className="rounded-[var(--card-radius-lg,16px)] border border-dashboard-cardBorder bg-dashboard-card p-6 shadow-sm">
          <ListSkeleton items={5} />
        </div>
      </section>
    </div>
  );
}
