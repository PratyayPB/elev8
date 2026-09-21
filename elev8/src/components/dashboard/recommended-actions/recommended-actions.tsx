"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  Map,
  FileText,
  UserCheck,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type RecommendationKey =
  | "career-assessment"
  | "interview"
  | "roadmaps"
  | "resumes";

export type ModulePageKey =
  | "resumes"
  | "interviews"
  | "roadmaps"
  | "career-assessment";

export interface RecommendationItemConfig {
  id: RecommendationKey;
  title: string;
  description: string;
  ctaText: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const RECOMMENDATION_REGISTRY: Record<
  RecommendationKey,
  RecommendationItemConfig
> = {
  "career-assessment": {
    id: "career-assessment",
    title: "Career Assessment",
    description:
      "Evaluate your market readiness and target career progression path.",
    ctaText: "View Assessment",
    href: "/dashboard/career-assessment",
    icon: UserCheck,
  },
  interview: {
    id: "interview",
    title: "Interview Practice",
    description:
      "Simulate role-specific technical and behavioral interviews with real-time AI feedback.",
    ctaText: "Practice Interview",
    href: "/dashboard/interviews",
    icon: MessageSquare,
  },
  roadmaps: {
    id: "roadmaps",
    title: "Learning Roadmaps",
    description:
      "Bridge your interview skill gaps with structured AI roadmaps.",
    ctaText: "Create Roadmap",
    href: "/dashboard/roadmaps",
    icon: Map,
  },
  resumes: {
    id: "resumes",
    title: "Resume Analysis",
    description:
      "Ensure your resume aligns with the target roles you are practicing.",
    ctaText: "Optimize Resume",
    href: "/dashboard/resumes",
    icon: FileText,
  },
};

export const PAGE_RECOMMENDATIONS_MAP: Record<
  ModulePageKey,
  RecommendationKey[]
> = {
  resumes: ["career-assessment", "interview", "roadmaps"],
  interviews: ["career-assessment", "resumes", "roadmaps"],
  roadmaps: ["career-assessment", "resumes", "interview"],
  "career-assessment": ["interview", "roadmaps", "resumes"],
};

export interface RecommendedActionsProps {
  currentModule?: ModulePageKey;
  items?: RecommendationKey[];
  title?: string;
  className?: string;
}

export function RecommendedActions({
  currentModule,
  items,
  title = "Recommended Next Actions",
  className,
}: RecommendedActionsProps) {
  const selectedKeys: RecommendationKey[] =
    items ||
    (currentModule ? PAGE_RECOMMENDATIONS_MAP[currentModule] : []) ||
    [];

  if (selectedKeys.length === 0) {
    return null;
  }

  const recommendationItems = selectedKeys
    .map((key) => RECOMMENDATION_REGISTRY[key])
    .filter(Boolean);

  return (
    <section className={cn("space-y-4 pt-4", className)}>
      {/* Header */}
      <div className="flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-text-primary" />
        <h2 className="font-display font-bold text-xl sm:text-2xl text-text-primary tracking-tight">
          {title}
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {recommendationItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.id}
              href={item.href}
              className="group block rounded-2xl border border-border/80 bg-surface-primary dark:bg-card p-6 sm:p-7 shadow-sm transition-all duration-200 hover:shadow-md hover:border-border hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-[#F4F1EA] dark:bg-neutral-800/80 border border-border/40 flex items-center justify-center text-text-primary mb-5 transition-transform duration-200 group-hover:scale-105">
                    <Icon className="w-5 h-5 text-text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-semibold text-base sm:text-lg text-text-primary mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* CTA Link */}
                <div className="pt-2 flex items-center gap-1.5 text-sm font-semibold text-text-primary group-hover:text-accent-foreground dark:group-hover:text-accent-foreground transition-colors">
                  <span>{item.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
