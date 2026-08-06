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
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <StepIndicator currentStep={currentStep} />
      
      <div className="mt-8">
        {currentStep === 1 && <Stage1Step />}
        {currentStep === 2 && <PersonalizationStep />}
        {currentStep === 3 && <ReviewStep />}
      </div>
    </div>
  );
}
