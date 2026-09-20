import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Map,
  Video,
  FileEdit,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";

interface ModuleCardItem {
  id: string;
  title: string;
  shortName: string;
  tag: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  accentGlow: string;
}

const MODULE_ITEMS: ModuleCardItem[] = [
  {
    id: "roadmap-generator",
    title: "Roadmap Generator",
    shortName: "Roadmaps",
    tag: "Skill Pathways",
    description:
      "Generate structured, AI-tailored learning pathways and milestone tracks designed for your target career role.",
    href: ROUTES.ROADMAPS,
    icon: Map,
    accentGlow: "group-hover:bg-emerald-500/10 dark:group-hover:bg-emerald-500/15",
  },
  {
    id: "interview-simulation",
    title: "Interview Simulation",
    shortName: "Interviews",
    tag: "Mock Practice",
    description:
      "Practice dynamic, role-specific technical and behavioral interviews with real-time AI evaluation and feedback.",
    href: ROUTES.INTERVIEWS,
    icon: Video,
    accentGlow: "group-hover:bg-violet-500/10 dark:group-hover:bg-violet-500/15",
  },
  {
    id: "resume-builder",
    title: "Resume Builder",
    shortName: "Builder",
    tag: "ATS-Optimized",
    description:
      "Craft clean, professional resumes customized to highlight your strengths and pass recruiter screening systems.",
    href: ROUTES.RESUME_BUILDER,
    icon: FileEdit,
    accentGlow: "group-hover:bg-sky-500/10 dark:group-hover:bg-sky-500/15",
  },
  {
    id: "resume-scorer",
    title: "Resume Scorer",
    shortName: "Scorer",
    tag: "Instant Audit",
    description:
      "Upload and audit your resume against target job benchmarks to identify missing skills and boost ATS readiness.",
    href: ROUTES.RESUME_SCORER,
    icon: Sparkles,
    accentGlow: "group-hover:bg-amber-500/10 dark:group-hover:bg-amber-500/15",
  },
];

interface ModuleNavigationGridProps {
  className?: string;
}

export function ModuleNavigationGrid({ className }: ModuleNavigationGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6",
        className
      )}
    >
      {MODULE_ITEMS.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.id}
            href={item.href}
            className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl"
          >
            <Card className="relative h-full flex flex-col justify-between overflow-hidden rounded-2xl border border-dashboard-cardBorder bg-dashboard-card p-6 sm:p-7 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-text-primary/20 dark:hover:border-white/20 active:translate-y-0 active:scale-[0.99]">
              {/* Subtle ambient accent glow on hover */}
              <div
                className={cn(
                  "pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-transparent blur-3xl transition-all duration-500",
                  item.accentGlow
                )}
                aria-hidden="true"
              />

              <div>
                {/* Header row: Icon & Tag */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-surface-muted dark:bg-zinc-800/80 border border-border-subtle flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-text-primary group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black shadow-xs">
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-3" />
                  </div>
                  <span className="text-xs font-sans font-medium px-3 py-1 rounded-full border border-border-subtle/80 bg-surface-muted/70 text-text-secondary transition-colors duration-200 group-hover:border-text-primary/20">
                    {item.tag}
                  </span>
                </div>

                <CardHeader className="p-0 space-y-2">
                  <CardTitle className="text-xl font-display font-bold text-text-primary tracking-tight transition-colors duration-200 group-hover:text-primary dark:group-hover:text-white">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-sm font-sans text-text-secondary leading-relaxed line-clamp-2">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </div>

              {/* Action indicator at bottom */}
              <CardContent className="p-0 pt-6 mt-auto">
                <div className="flex items-center gap-1 text-xs font-display font-semibold uppercase tracking-wider text-text-secondary transition-colors duration-200 group-hover:text-text-primary">
                  <span>Explore {item.shortName}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
