"use client";

import React, { useTransition } from "react";
import Link from "next/link";
import { RecommendationData } from "../types";
import { RecommendationModuleIcon } from "./RecommendationModuleIcon";
import { dismissRecommendationAction, acceptRecommendationAction } from "../actions";
import { X, ArrowRight, Check } from "lucide-react";
import { useRecommendationRouter } from "../hooks/useRecommendationRouter";

interface RecommendationCardProps {
  recommendation: RecommendationData;
  onDismissOptimistic?: (id: string) => void;
}

export function RecommendationCard({
  recommendation,
  onDismissOptimistic,
}: RecommendationCardProps) {
  const [isPending, startTransition] = useTransition();
  const { getRouteForRecommendation, routeToRecommendation } = useRecommendationRouter();

  const cta = getRouteForRecommendation(recommendation);

  const handleDismiss = () => {
    if (onDismissOptimistic) {
      onDismissOptimistic(recommendation.id);
    }
    startTransition(async () => {
      await dismissRecommendationAction(recommendation.id);
    });
  };

  const handleAccept = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Stop normal link navigation so we can mark accepted first
    startTransition(async () => {
      await acceptRecommendationAction(recommendation.id);
      routeToRecommendation(recommendation);
    });
  };

  const getPriorityBadge = (priority: number) => {
    switch (priority) {
      case 1:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            Priority #1 • Highest Impact
          </span>
        );
      case 2:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            Priority #2 • Strategic Next Step
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border border-zinc-500/20">
            Priority #{priority} • Recommended
          </span>
        );
    }
  };

  const getSourceLabel = (source: string) => {
    switch (source) {
      case "HYBRID":
        return "AI Assessment & Rules";
      case "MODULE_RESULT":
        return "Recent Performance";
      case "PROFILE_SIGNAL":
        return "Profile Alignment";
      default:
        return "Skill Intelligence";
    }
  };

  return (
    <div className="relative group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm hover:shadow-md transition-all">
      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        disabled={isPending}
        className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 p-1 rounded-md transition-colors"
        title="Dismiss recommendation"
        aria-label="Dismiss recommendation"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="flex items-start gap-4">
        <div className="p-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-zinc-700 dark:text-zinc-200 mt-0.5 shrink-0">
          <RecommendationModuleIcon
            type={recommendation.type}
            refId={recommendation.refId}
            className="w-5 h-5"
          />
        </div>

        <div className="flex-1 min-w-0 pr-6">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            {getPriorityBadge(recommendation.priority)}
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
              Source: {getSourceLabel(recommendation.source)}
            </span>
          </div>

          <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
            {recommendation.refId.replace(/_/g, " ")}
          </h4>

          <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
            {recommendation.reason}
          </p>

          <div className="flex items-center gap-3">
            <Link
              href={cta.href}
              onClick={handleAccept}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-zinc-900 dark:bg-white dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-sm"
            >
              {cta.label}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {recommendation.status === "ACCEPTED" && (
              <span className="inline-flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                <Check className="w-3.5 h-3.5" />
                Accepted
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
