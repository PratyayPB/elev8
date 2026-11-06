import React from "react";
import { Loader2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export function RoadmapCanvasSkeleton() {
  return (
    <div
      aria-busy="true"
      aria-label="Loading interactive roadmap canvas"
      className="w-full h-[700px] border border-zinc-800 rounded-[var(--card-radius-lg)] bg-[#242424] overflow-hidden relative shadow-2xl flex flex-col items-center justify-center"
    >
      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Simulated Node Nodes in Background */}
      <div className="absolute inset-0 pointer-events-none p-12 flex flex-col justify-around items-center opacity-25">
        <div className="flex gap-16 items-center">
          <Skeleton className="w-48 h-16 rounded-xl bg-zinc-800 border border-zinc-700" />
          <Skeleton className="w-48 h-16 rounded-xl bg-zinc-800 border border-zinc-700" />
        </div>
        <div className="flex gap-24 items-center">
          <Skeleton className="w-56 h-20 rounded-xl bg-zinc-800 border border-zinc-700" />
          <Skeleton className="w-56 h-20 rounded-xl bg-zinc-800 border border-zinc-700" />
          <Skeleton className="w-56 h-20 rounded-xl bg-zinc-800 border border-zinc-700" />
        </div>
        <div className="flex gap-16 items-center">
          <Skeleton className="w-48 h-16 rounded-xl bg-zinc-800 border border-zinc-700" />
          <Skeleton className="w-48 h-16 rounded-xl bg-zinc-800 border border-zinc-700" />
        </div>
      </div>

      {/* Centered Loading Indicator */}
      <div className="relative z-10 flex flex-col items-center gap-3 bg-zinc-900/80 backdrop-blur-md px-6 py-4 rounded-xl border border-zinc-700/60 shadow-lg text-center">
        <Loader2 className="w-6 h-6 animate-spin text-zinc-300" />
        <span className="text-xs font-display font-medium text-zinc-300 tracking-wide">
          Loading Interactive Canvas...
        </span>
      </div>
    </div>
  );
}
