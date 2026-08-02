"use client";

import React from "react";
import { ONBOARDING_STEPS } from "@/features/profile/constants";
import { Check } from "lucide-react";

interface StepperProps {
  currentStep: number;
}

export function Stepper({ currentStep }: StepperProps) {
  // Exclude welcome (step 1) and completion (step 9) from numeric dots if desired, or show steps 1-8
  const formSteps = ONBOARDING_STEPS.filter((s) => s.id >= 2 && s.id <= 8);

  return (
    <div className="w-full py-4 overflow-x-auto no-scrollbar">
      <div className="flex items-center justify-between min-w-[500px] max-w-2xl mx-auto px-4">
        {formSteps.map((step, idx) => {
          const isDone = currentStep > step.id;
          const isCurrent = currentStep === step.id;

          return (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    isDone
                      ? "bg-accent-cyan text-black"
                      : isCurrent
                      ? "bg-text-primary text-background ring-4 ring-accent-cyan/20"
                      : "bg-surface-muted border border-border text-text-muted"
                  }`}
                >
                  {isDone ? <Check className="w-4 h-4" /> : step.id - 1}
                </div>
                <span
                  className={`text-[10px] font-medium hidden sm:block ${
                    isCurrent ? "text-text-primary font-semibold" : "text-text-muted"
                  }`}
                >
                  {step.title}
                </span>
              </div>

              {idx < formSteps.length - 1 && (
                <div
                  className={`flex-1 h-[2px] mx-2 transition-all duration-300 ${
                    isDone ? "bg-accent-cyan" : "bg-border"
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
