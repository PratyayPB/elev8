"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  CareerAssessmentResult,
  AssessmentState,
} from "../types";
import { createAssessmentAction } from "../services/actions";
import { AssessmentReadinessScore } from "./assessment-readiness-score";
import { CareerCompetencyRadar } from "./career-competency-radar";
import { AssessmentMetricsChart } from "./assessment-metrics-chart";
import { AssessmentStrengths } from "./assessment-strengths";
import { AssessmentGaps } from "./assessment-gaps";
import { AssessmentFocusAreas } from "./assessment-focus-areas";
import { AssessmentNarrative } from "./assessment-narrative";
import { AssessmentStaleBanner } from "./assessment-stale-banner";
import { AssessmentCtaCard } from "./assessment-cta-card";
import { RefreshCw, History, Calendar, Cpu } from "lucide-react";

interface AssessmentClientViewProps {
  initialAssessment: CareerAssessmentResult | null;
  initialIsStale: boolean;
  profileComplete: boolean;
  currentProfileVersion: number;
}

export function AssessmentClientView({
  initialAssessment,
  initialIsStale,
  profileComplete,
  currentProfileVersion,
}: AssessmentClientViewProps) {
  const router = useRouter();
  const [assessment, setAssessment] = useState<CareerAssessmentResult | null>(
    initialAssessment
  );
  const [isStale, setIsStale] = useState<boolean>(initialIsStale);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getAssessmentState = (): AssessmentState => {
    if (!profileComplete) return "PROFILE_INCOMPLETE";
    if (!assessment) return "NO_ASSESSMENT";
    if (isStale) return "STALE";
    return "CURRENT";
  };

  const state = getAssessmentState();

  const handleGenerate = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await createAssessmentAction();
      if (res.success && res.assessment) {
        setAssessment(res.assessment);
        setIsStale(false);
        router.refresh();
      } else {
        setError(res.error || "Failed to generate Career Assessment.");
      }
    } catch (err: any) {
      setError(err?.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {error && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-sans">
          {error}
        </div>
      )}

      {/* Main State Handling */}
      {state === "PROFILE_INCOMPLETE" || state === "NO_ASSESSMENT" ? (
        <AssessmentCtaCard
          state={state}
          onStart={handleGenerate}
          isLoading={isLoading}
        />
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
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-sans text-text-secondary">
                <Calendar className="h-3.5 w-3.5" />
                <span>
                  Evaluated on {new Date(assessment!.createdAt).toLocaleDateString()}
                </span>
                <span className="text-border-subtle">•</span>
                <span>Profile Version {assessment!.profileVersion}</span>
              </div>

              <button
                type="button"
                onClick={handleGenerate}
                disabled={isLoading}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-border-subtle hover:border-text-primary/30 text-text-secondary hover:text-text-primary text-xs font-display font-medium transition-all"
              >
                <RefreshCw className={`h-3 w-3 ${isLoading ? "animate-spin" : ""}`} />
                {isLoading ? "Refreshing..." : "Re-evaluate"}
              </button>
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
