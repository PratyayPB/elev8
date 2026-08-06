"use client";

import { useResumeRequestStore } from "../../hooks/use-resume-request";
import { StepIndicator } from "./step-indicator";
import { Stage1Step } from "./stage-1-step";
import { PersonalizationStep } from "./personalization-step";
import { ReviewStep } from "./review-step";

export function ResumeWizardContainer() {
  const { currentStep } = useResumeRequestStore();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <StepIndicator currentStep={currentStep} />

        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-10 border border-gray-200 dark:border-gray-700 shadow-sm">
          {currentStep === 1 && <Stage1Step />}
          {currentStep === 2 && <PersonalizationStep />}
          {currentStep === 3 && <ReviewStep />}
        </div>
      </div>
    </div>
  );
}
