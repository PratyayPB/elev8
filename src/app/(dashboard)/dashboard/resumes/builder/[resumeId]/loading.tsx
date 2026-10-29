import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function ResumeEditorLoading() {
  const sidebarItems = [
    { width: "w-24" },
    { width: "w-20" },
    { width: "w-20" },
    { width: "w-28" },
    { width: "w-16" },
    { width: "w-14" },
    { width: "w-24" },
    { width: "w-24" },
  ];

  return (
    <div aria-busy="true" className="flex flex-col min-h-full bg-surface">
      {/* Editor Header Skeleton */}
      <header className="sticky top-0 z-20 w-full border-b border-border bg-dashboard-card backdrop-blur-sm">
        <div className="flex h-16 items-center justify-between px-6">
          {/* Left Section: Back button, Title & AI Build */}
          <div className="flex items-center gap-4 min-w-0">
            <Skeleton className="h-9 w-9 rounded-xl shrink-0" />
            <div className="space-y-1.5 min-w-0">
              <Skeleton className="h-4 w-36 rounded" />
              <div className="flex items-center gap-2">
                <Skeleton className="h-3 w-16 rounded-full" />
                <Skeleton className="h-2.5 w-24 rounded hidden sm:block" />
              </div>
            </div>
            <Skeleton className="h-8 w-36 rounded-xl hidden md:block shrink-0 ml-1" />
          </div>

          {/* Right Section: Header Actions */}
          <div className="flex items-center gap-2.5 shrink-0">
            <Skeleton className="h-9 w-32 rounded-xl hidden lg:block" />
            <Skeleton className="h-9 w-44 rounded-xl" />
            <Skeleton className="h-9 w-24 rounded-xl hidden sm:block" />
            <Skeleton className="h-9 w-28 rounded-xl hidden sm:block" />
            <Skeleton className="h-9 w-20 rounded-xl" />
          </div>
        </div>
      </header>

      {/* Editor Body Skeleton – Stacked layout */}
      <div className="flex-1 w-full px-4 sm:px-6 py-6 flex flex-col gap-6">
        {/* Editor Area – Sidebar navigation + form editor panel (540px height) */}
        <div className="w-full flex flex-col md:flex-row items-stretch gap-4 h-[540px]">
          {/* Section Navigation List Skeleton */}
          <div className="flex flex-col gap-1 w-56 shrink-0 bg-dashboard-card rounded-xl border border-border shadow-sm p-2 self-stretch h-full">
            {sidebarItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg"
              >
                <Skeleton className="h-4 w-4 rounded shrink-0" />
                <Skeleton className={`h-4 ${item.width} rounded`} />
              </div>
            ))}
          </div>

          {/* Active Form Section Skeleton */}
          <div className="flex-1 min-w-0 h-full rounded-[var(--card-radius-lg,16px)] border border-dashboard-cardBorder bg-dashboard-card p-6 shadow-sm flex flex-col overflow-hidden">
            {/* Section Header */}
            <div className="border-b border-border pb-3 shrink-0">
              <Skeleton className="h-6 w-44 rounded" />
            </div>

            {/* Form Fields */}
            <div className="flex-1 pt-4 space-y-5 overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Skeleton className="h-3.5 w-24 rounded" />
                  <Skeleton className="h-9 w-full rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-3.5 w-20 rounded" />
                  <Skeleton className="h-9 w-full rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-3.5 w-28 rounded" />
                  <Skeleton className="h-9 w-full rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-3.5 w-20 rounded" />
                  <Skeleton className="h-9 w-full rounded-xl" />
                </div>
              </div>
              <div className="space-y-2 pt-1">
                <Skeleton className="h-3.5 w-36 rounded" />
                <Skeleton className="h-28 w-full rounded-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Live Preview Panel Skeleton – Full width underneath editor */}
        <div className="w-full">
          <div className="w-full h-[520px] bg-slate-100 dark:bg-zinc-900/50 p-4 sm:p-6 rounded-2xl border border-border shadow-inner flex flex-col items-center justify-start overflow-hidden">
            {/* Paper Document Skeleton */}
            <div className="w-full max-w-[800px] h-full bg-white dark:bg-zinc-950 shadow-xl rounded-sm p-8 sm:p-12 flex flex-col space-y-6">
              {/* Header Info */}
              <div className="space-y-2.5 text-center">
                <Skeleton className="h-7 w-56 mx-auto rounded" />
                <Skeleton className="h-3 w-80 mx-auto rounded" />
                <Skeleton className="h-3 w-64 mx-auto rounded" />
              </div>

              {/* Section 1 */}
              <div className="space-y-3 pt-4">
                <Skeleton className="h-4 w-28 rounded border-b pb-1" />
                <Skeleton className="h-3.5 w-full rounded" />
                <Skeleton className="h-3.5 w-11/12 rounded" />
                <Skeleton className="h-3.5 w-4/5 rounded" />
              </div>

              {/* Section 2 */}
              <div className="space-y-3 pt-2">
                <Skeleton className="h-4 w-32 rounded border-b pb-1" />
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-3.5 w-48 rounded" />
                    <Skeleton className="h-3 w-24 rounded" />
                  </div>
                  <Skeleton className="h-3 w-full rounded" />
                  <Skeleton className="h-3 w-5/6 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
