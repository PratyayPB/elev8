import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Step {
  id: string;
  title: string;
  subtitle: string;
}

interface OnboardingStepperProps {
  steps: Step[];
  currentStep: number;
}

export function OnboardingStepper({ steps, currentStep }: OnboardingStepperProps) {
  return (
    <div className="flex flex-col gap-8 relative">
      {/* Vertical line connecting steps */}
      <div className="absolute left-[19px] top-6 bottom-6 w-0.5 bg-border dark:bg-[#242424] -z-10 hidden md:block" />

      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        return (
          <div key={step.id} className="flex gap-4 items-start relative z-10">
            {/* Step Circle */}
            <div
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-full border-2 text-sm font-semibold shrink-0 transition-colors",
                isActive
                  ? "bg-foreground text-background dark:bg-[#FCFBFA] dark:text-[#000000] border-foreground dark:border-transparent shadow-md"
                  : isCompleted
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background dark:bg-[#242424] text-muted-foreground dark:text-muted-foreground/80 border-border dark:border-transparent"
              )}
            >
              {isCompleted ? <Check className="w-5 h-5" /> : index + 1}
            </div>

            {/* Step Text */}
            <div className="flex flex-col">
              <h3
                className={cn(
                  "font-medium leading-none mb-1.5",
                  isActive || isCompleted ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-snug">
                {step.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
