"use client";

import { useInterviewRequestStore } from "../../hooks/use-interview-request";
import { StepIndicator } from "./step-indicator";
import { Stage1Step } from "./stage-1-step";
import { PersonalizationStep } from "./personalization-step";
import { ReviewStep } from "./review-step";
import { useEffect } from "react";

export function InterviewWizard() {
  const { currentStep, reset } = useInterviewRequestStore();

  // Reset store on mount in case of leftover state
  useEffect(() => {
    reset();
    return () => reset();
  }, [reset]);

  return (
    <div className="w-full max-w-3xl mx-auto bg-dashboard-card border border-dashboard-cardBorder rounded-[var(--card-radius-lg)] p-6 sm:p-8 shadow-sm">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-display font-bold text-text-primary tracking-tight">
          Interview Generator Wizard
        </h2>
        <p className="text-sm font-sans text-text-secondary mt-1 max-w-md mx-auto">
          Configure your interview parameters to generate a custom mock interview.
        </p>
      </div>

      <StepIndicator currentStep={currentStep} />
      
      <div className="min-h-[320px] flex flex-col justify-between pt-2">
        {currentStep === 1 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <Stage1Step />
          </div>
        )}
        {currentStep === 2 && (
          <div className="animate-in fade-in duration-200">
            <PersonalizationStep />
          </div>
        )}
        {currentStep === 3 && (
          <div className="animate-in fade-in duration-200">
            <ReviewStep />
          </div>
        )}
      </div>
    </div>
  );
}
