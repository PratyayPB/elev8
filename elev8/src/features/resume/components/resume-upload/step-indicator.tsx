"use client";

import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
}

const steps = [
  { number: 1, title: "Upload & Role" },
  { number: 2, title: "AI Personalization" },
  { number: 3, title: "Review & Submit" },
];

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="w-full max-w-xl mx-auto mb-8 px-4">
      <div className="flex items-center justify-between relative">
        {/* Connecting line background */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-border-subtle z-0" />
        
        {/* Active progress line */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-text-primary transition-all duration-300 z-0"
          style={{
            width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
          }}
        />

        {steps.map((step) => {
          const isCompleted = currentStep > step.number;
          const isCurrent = currentStep === step.number;

          return (
            <div key={step.number} className="relative z-10 flex flex-col items-center">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-200 ${
                  isCompleted
                    ? "bg-text-primary text-white dark:text-brand-primary-900 shadow-sm"
                    : isCurrent
                    ? "bg-text-primary text-white dark:text-brand-primary-900 ring-4 ring-dashboard-metricHighlight/60 shadow-sm font-display"
                    : "bg-dashboard-card text-text-muted border-2 border-border-subtle"
                }`}
              >
                {isCompleted ? <Check className="w-4 h-4" /> : step.number}
              </div>
              <span
                className={`text-xs font-display font-semibold mt-2 transition-colors ${
                  isCurrent || isCompleted
                    ? "text-text-primary"
                    : "text-text-muted"
                }`}
              >
                {step.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
