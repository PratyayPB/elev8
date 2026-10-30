"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  CareerAssessmentResult,
  AssessmentState,
  WeeklyQuotaInfo,
} from "../types";
import {
  createAssessmentAction,
  getAssessmentStatusAction,
  getWeeklyQuotaAction,
} from "../services/actions";
import { AssessmentReadinessScore } from "./assessment-readiness-score";
import { CareerCompetencyRadar } from "./career-competency-radar";
import { AssessmentMetricsChart } from "./assessment-metrics-chart";
import { AssessmentStrengths } from "./assessment-strengths";
import { AssessmentGaps } from "./assessment-gaps";
import { AssessmentFocusAreas } from "./assessment-focus-areas";
import { AssessmentNarrative } from "./assessment-narrative";
import { AssessmentStaleBanner } from "./assessment-stale-banner";
import { AssessmentCtaCard } from "./assessment-cta-card";
import { RefreshCw, Calendar, Cpu, Sparkles, Loader2, Brain, Clock } from "lucide-react";
import { useBackgroundWorkflow } from "@/hooks/use-background-workflow";

interface AssessmentClientViewProps {
  initialAssessment: CareerAssessmentResult | null;
  initialIsStale: boolean;
  profileComplete: boolean;
  currentProfileVersion: number;
  initialQuota?: WeeklyQuotaInfo;
}

export function AssessmentClientView({
  initialAssessment,
  initialIsStale,
  profileComplete,
  currentProfileVersion,
  initialQuota,
}: AssessmentClientViewProps) {
  const router = useRouter();
  const [assessment, setAssessment] = useState<CareerAssessmentResult | null>(
    initialAssessment
  );
  const [isStale, setIsStale] = useState<boolean>(initialIsStale);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [quota, setQuota] = useState<WeeklyQuotaInfo | undefined>(initialQuota);

  const refreshQuota = async () => {
    try {
      const res = await getWeeklyQuotaAction();
      if (res.success && res.data) {
        setQuota(res.data);
      }
    } catch (err) {
      console.warn("[AssessmentClientView] Failed to refresh quota:", err);
    }
  };

  const getAssessmentState = (): AssessmentState => {
    if (!profileComplete) return "PROFILE_INCOMPLETE";
    if (!assessment || assessment.status === "FAILED") return "NO_ASSESSMENT";
    if (assessment.status === "PROCESSING") return "PROCESSING";
    if (isStale) return "STALE";
    return "CURRENT";
  };

  const state = getAssessmentState();

  // Automatic status polling for background tasks
  useEffect(() => {
    if (!assessment || assessment.status !== "PROCESSING") return;

    let isMounted = true;
    const interval = setInterval(async () => {
      try {
        const res = await getAssessmentStatusAction(assessment.id);
        if (res.success && res.data.assessment) {
          if (!isMounted) return;
          const updated = res.data.assessment;

          if (updated.status === "COMPLETED") {
            setAssessment(updated);
            setIsStale(false);
            setIsLoading(false);
            refreshQuota();
            toast.success("Career Assessment generated successfully!");
            router.refresh();
          } else if (updated.status === "FAILED") {
            setAssessment(updated);
            setIsLoading(false);
            refreshQuota();
            setError("Assessment generation failed. Please try again.");
          }
        }
      } catch (pollErr) {
        console.warn("[AssessmentClientView] Polling error:", pollErr);
      }
    }, 2500);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [assessment?.id, assessment?.status, router]);

  const { runWorkflow } = useBackgroundWorkflow();

  const handleGenerate = async () => {
    setIsLoading(true);
    setError(null);

    await runWorkflow({
      serviceName: "Career Assessment",
      serviceType: "CAREER_ASSESSMENT",
      initiationMessage: "Initiating the workflow...",
      execute: async () => await createAssessmentAction(),
      extractJobId: (res) => (res.success && res.data?.assessment ? res.data.assessment.id : undefined),
      defaultViewUrl: "/dashboard/career-assessment",
      onInitiated: (res) => {
        refreshQuota();
        if (res.success && res.data?.assessment) {
          setAssessment(res.data.assessment);
          setIsStale(false);
          if (res.data.assessment.status === "COMPLETED") {
            setIsLoading(false);
            router.refresh();
          }
        }
      },
      onError: (err) => {
        refreshQuota();
        setIsLoading(false);
        setError(err?.message || "Failed to initiate Career Assessment.");
      },
    });
  };

  return (
    <div className="space-y-8">
      {error && (
        <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400 text-xs font-sans">
          {error}
        </div>
      )}

      {/* Main State Handling */}
      {state === "PROFILE_INCOMPLETE" || state === "NO_ASSESSMENT" ? (
        <AssessmentCtaCard
          state={state}
          onStart={handleGenerate}
          isLoading={isLoading}
          quota={quota}
        />
      ) : state === "PROCESSING" ? (
        <div className="rounded-[var(--card-radius-lg)] border border-dashboard-cardBorder bg-dashboard-card p-10 md:p-14 text-center space-y-6 shadow-sm relative overflow-hidden">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-dashboard-metricHighlight/20 text-accent flex items-center justify-center animate-pulse">
            <Brain className="h-8 w-8 text-text-primary dark:text-white" />
          </div>
          <div className="max-w-md mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-muted dark:bg-card border border-border/80 text-[11px] font-mono font-medium text-text-secondary">
              <Loader2 className="w-3.5 h-3.5 animate-spin text-accent" />
              Background Task Running
            </div>
            <h3 className="text-2xl font-display font-bold text-text-primary">
              Analyzing Career Readiness
            </h3>
            <p className="text-xs font-sans text-text-secondary leading-relaxed">
              Evaluating verified competencies, deterministic skill gaps, and strategic focus areas using Gemini intelligence. This usually takes 5 to 10 seconds.
            </p>
          </div>
          <div className="max-w-xs mx-auto pt-2">
            <div className="h-1.5 w-full bg-surface-muted dark:bg-card rounded-full overflow-hidden">
              <div className="h-full bg-accent rounded-full animate-pulse w-3/4" />
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Stale Notification Banner */}
          {state === "STALE" && assessment && (
            <AssessmentStaleBanner
              assessmentVersion={assessment.profileVersion}
              currentProfileVersion={currentProfileVersion}
              onRetake={handleGenerate}
              isLoading={isLoading}
            />
          )}

          {/* Action Bar when Current */}
          {state === "CURRENT" && (
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-sans text-text-secondary">
                <Calendar className="h-3.5 w-3.5" />
                <span>
                  Evaluated on {new Date(assessment!.createdAt).toLocaleDateString()}
                </span>
                <span className="text-border-subtle">•</span>
                <span>Profile Version {assessment!.profileVersion}</span>
              </div>

              <div className="flex items-center gap-2.5">
                {quota && (
                  <div
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
                      !quota.canGenerate
                        ? "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30"
                        : "bg-surface-muted dark:bg-card text-text-secondary border-border/80"
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>
                      {!quota.canGenerate
                        ? `Limit reached (3/3). Next ${quota.resetFormatted || "soon"}`
                        : `${quota.remaining}/${quota.totalAllowed} left this week`}
                    </span>
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleGenerate}
                  disabled={isLoading || Boolean(quota && !quota.canGenerate)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border text-xs font-display font-medium transition-all ${
                    quota && !quota.canGenerate
                      ? "border-border-subtle bg-muted text-muted-foreground cursor-not-allowed opacity-60"
                      : "border-border-subtle hover:border-text-primary/30 text-text-secondary hover:text-text-primary"
                  }`}
                  title={
                    quota && !quota.canGenerate
                      ? `Weekly limit reached (3/3 used). Next assessment available ${quota.resetFormatted}.`
                      : "Re-evaluate career assessment"
                  }
                >
                  <RefreshCw className={`h-3 w-3 ${isLoading ? "animate-spin" : ""}`} />
                  {isLoading ? "Refreshing..." : "Re-evaluate"}
                </button>
              </div>
            </div>
          )}

          {/* Assessment Content Sections */}
          <div className="space-y-8">
            <AssessmentReadinessScore score={assessment!.readinessScore} />

            {/* Visual Analytics Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CareerCompetencyRadar assessment={assessment!} />
              <AssessmentMetricsChart assessment={assessment!} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AssessmentStrengths strengths={assessment!.strengths} />
              <AssessmentGaps gaps={assessment!.gaps} />
            </div>

            <AssessmentFocusAreas focusAreas={assessment!.suggestedFocusAreas} />

            <AssessmentNarrative narrative={assessment!.narrative} />
          </div>

          {/* Audit & Metadata Snapshot Footer */}
          <div className="pt-6 border-t border-border-subtle flex flex-wrap items-center justify-between gap-4 text-[11px] font-sans text-text-muted">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Cpu className="h-3 w-3" />
                Engine: {assessment!.model}
              </span>
            </div>
            <span>Snapshot ID: {assessment!.id}</span>
          </div>
        </div>
      )}
    </div>
  );
}
