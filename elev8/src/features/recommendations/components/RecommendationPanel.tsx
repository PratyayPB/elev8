"use client";

import React, { useState, useTransition } from "react";
import { RecommendationData } from "../types";
import { RecommendationCard } from "./RecommendationCard";
import { refreshRecommendationsAction } from "../actions";
import { Sparkles, RotateCw, CheckCircle2 } from "lucide-react";

interface RecommendationPanelProps {
  initialRecommendations: RecommendationData[];
}

export function RecommendationPanel({
  initialRecommendations,
}: RecommendationPanelProps) {
  const [recommendations, setRecommendations] = useState<RecommendationData[]>(
    initialRecommendations
  );
  const [isRefreshing, startTransition] = useTransition();

  const handleDismissOptimistic = (id: string) => {
    setRecommendations((prev) => prev.filter((r) => r.id !== id));
  };

  const handleRefresh = () => {
    startTransition(async () => {
      const res = await refreshRecommendationsAction();
      if (res.success && res.recommendations) {
        setRecommendations(res.recommendations);
      }
    });
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
              Recommended Next Actions
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Tailored guidance driven by your profile, assessments, and recent performance.
            </p>
          </div>
        </div>

        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-colors disabled:opacity-50"
          title="Refresh recommendations"
        >
          <RotateCw className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin" : ""}`} />
          <span>{isRefreshing ? "Refreshing..." : "Refresh"}</span>
        </button>
      </div>

      {/* Cards List */}
      {recommendations.length > 0 ? (
        <div className="grid grid-cols-1 gap-3">
          {recommendations.map((rec) => (
            <RecommendationCard
              key={rec.id}
              recommendation={rec}
              onDismissOptimistic={handleDismissOptimistic}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-8 bg-zinc-50 dark:bg-zinc-900/50 border border-dashed border-zinc-300 dark:border-zinc-800 rounded-xl text-center">
          <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full mb-3">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
            You're completely on track!
          </h4>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm mb-4">
            You've completed your current recommended actions. Explore our learning modules or refresh for newly calculated guidance.
          </p>
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="px-4 py-2 text-xs font-semibold text-zinc-900 dark:text-white bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors shadow-sm"
          >
            Calculate New Recommendations
          </button>
        </div>
      )}
    </div>
  );
}
