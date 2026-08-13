"use client";

import { useResumeRequestStore } from "../../hooks/use-resume-request";
import { StepIndicator } from "./step-indicator";
import { Stage1Step } from "./stage-1-step";
import { PersonalizationStep } from "./personalization-step";
import { ReviewStep } from "./review-step";

export function ResumeWizardContainer() {
  const { currentStep } = useResumeRequestStore();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <StepIndicator currentStep={currentStep} />

      <div className="bg-dashboard-card rounded-[var(--card-radius-lg)] p-6 sm:p-10 border border-dashboard-cardBorder shadow-sm">
        {currentStep === 1 && <Stage1Step />}
        {currentStep === 2 && <PersonalizationStep />}
        {currentStep === 3 && <ReviewStep />}
      </div>
    </div>
  );
}
