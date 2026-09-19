"use client";

import React, { useState } from "react";
import { useInterviewRequestStore } from "../../hooks/use-interview-request";
import { InterviewRequestService } from "../../services/interview-request.service";
import { createInterviewJob } from "../../actions/interview-actions";
import { Navigation } from "./navigation";
import {
  CheckCircle,
  Code,
  ShieldCheck,
  Sparkles,
  FastForward,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { normalizeError } from "@/lib/error-handler";

export function ReviewStep() {
  const { requestData, prevStep } = useInterviewRequestStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const isProfilePersonalized =
    !requestData.personalization?.skipped &&
    Boolean(requestData.personalization?.profile);

  // Compile full payload for inspection
  const compiledPayload = {
    role: requestData.role || "",
    experienceLevel: requestData.experienceLevel || "",
    difficulty: requestData.difficulty || "",
    interviewType: requestData.interviewType || "",
    personalization: {
      skipped: Boolean(requestData.personalization?.skipped),
      profileContext: requestData.personalization?.profile || null,
    },
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);
    try {
      const finalRequest = InterviewRequestService.buildRequest(requestData);
      const res = await createInterviewJob(finalRequest);

      if (!res.success) {
        setError(res.error.message || "Failed to generate interview.");
        toast.error(res.error.message || "Failed to generate interview.");
        return;
      }

      toast.success("Interview generation started!", {
        description: `Your ${finalRequest.role} interview is being generated.`,
      });
      router.push(`/dashboard/interviews`);
    } catch (err: unknown) {
      console.error(err);
      const appError = normalizeError(err);
      setError(appError.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Ready Banner & Status Badges */}
      <div className="flex items-center justify-between border-b border-border-subtle pb-4">
        <div>
          <h3 className="text-base font-display font-bold text-text-primary flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Interview Request Ready
          </h3>
          <p className="text-xs font-sans text-text-secondary mt-0.5">
            Input parameters ready. Validated payload compiled successfully.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {isProfilePersonalized ? (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-display font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              Personalized with Profile
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-display font-semibold bg-surface-muted text-text-secondary border border-border-subtle">
              <FastForward className="w-3.5 h-3.5 text-text-muted" />
              Personalization Skipped
            </span>
          )}
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-display font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            Validated
          </span>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="bg-surface-muted p-4 rounded-xl border border-border-subtle">
          <span className="text-[11px] font-display font-semibold text-text-secondary uppercase tracking-wider block">
            Target Role
          </span>
          <span className="text-sm font-display font-bold text-text-primary mt-1 block truncate">
            {requestData.role || "Not specified"}
          </span>
        </div>

        <div className="bg-surface-muted p-4 rounded-xl border border-border-subtle">
          <span className="text-[11px] font-display font-semibold text-text-secondary uppercase tracking-wider block">
            Experience Level
          </span>
          <span className="text-sm font-display font-bold text-text-primary mt-1 block">
            {requestData.experienceLevel || "Not specified"}
          </span>
        </div>

        <div className="bg-surface-muted p-4 rounded-xl border border-border-subtle">
          <span className="text-[11px] font-display font-semibold text-text-secondary uppercase tracking-wider block">
            Difficulty
          </span>
          <span className="text-sm font-display font-bold text-text-primary mt-1 block">
            {requestData.difficulty || "Not specified"}
          </span>
        </div>

        <div className="bg-surface-muted p-4 rounded-xl border border-border-subtle">
          <span className="text-[11px] font-display font-semibold text-text-secondary uppercase tracking-wider block">
            Interview Type
          </span>
          <span className="text-sm font-display font-bold text-text-primary mt-1 block">
            {requestData.interviewType || "Not specified"}
          </span>
        </div>
      </div>

      {/* Payload Inspection */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-display font-semibold text-text-primary flex items-center gap-1">
            <Code className="w-3.5 h-3.5" />
            Compiled InterviewRequest Payload (JSON)
          </span>
          <span className="text-[11px] font-sans text-text-muted">
            Ready for Interview Generator
          </span>
        </div>
        <pre className="bg-dashboard-card border border-border-subtle text-text-primary font-mono text-xs p-4 rounded-xl overflow-x-auto max-h-60 shadow-inner">
          {JSON.stringify(compiledPayload, null, 2)}
        </pre>
      </div>

      {error && (
        <div className="p-4 bg-rose-50 text-rose-700 border border-rose-200 rounded-xl text-xs font-sans">
          {error}
        </div>
      )}

      {/* Wizard Navigation Footer */}
      <Navigation
        currentStep={3}
        totalSteps={3}
        canContinue={true}
        isSubmitting={isSubmitting}
        onBack={prevStep}
        onNext={handleSubmit}
      />
    </div>
  );
}
