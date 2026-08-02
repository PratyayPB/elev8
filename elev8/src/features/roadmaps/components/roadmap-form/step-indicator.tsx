import React from "react";
import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps?: number;
}

const STEPS = [
  { id: 1, label: "Core Requirements" },
  { id: 2, label: "AI Personalization" },
  { id: 3, label: "Summary & Payload" },
];

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="flex items-center justify-between relative">
        {/* Connecting line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -z-10 -translate-y-1/2" />
        <div
          className="absolute top-1/2 left-0 h-0.5 bg-black transition-all duration-300 -z-10 -translate-y-1/2"
          style={{
            width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%`,
          }}
        />

        {STEPS.map((step) => {
          const isCompleted = currentStep > step.id;
          const isCurrent = currentStep === step.id;

          return (
            <div key={step.id} className="flex flex-col items-center gap-2 bg-background px-2">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-200 ${
                  isCompleted
                    ? "bg-black text-white"
                    : isCurrent
                    ? "bg-black text-white ring-4 ring-black/10"
                    : "bg-gray-100 text-gray-400 border border-gray-200"
                }`}
              >
                {isCompleted ? <Check className="w-5 h-5" /> : step.id}
              </div>
              <span
                className={`text-xs font-medium ${
                  isCurrent ? "text-black font-semibold" : "text-gray-500"
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
