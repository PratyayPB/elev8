"use client";

import React from "react";
import { TooltipRenderProps } from "react-joyride";
import { Button } from "@/components/ui/button";

export function OnboardingTooltip({
  index,
  step,
  size,
  tooltipProps,
  primaryProps,
  backProps,
  skipProps,
  isLastStep,
}: TooltipRenderProps) {
  return (
    <div
      {...tooltipProps}
      className="bg-dashboard-card border border-dashboard-cardBorder rounded-xl shadow-lg p-5 max-w-sm w-full font-sans text-text-primary"
    >
      {step.title && (
        <h3 className="font-display font-bold text-lg mb-2">{step.title}</h3>
      )}
      <div className="text-sm text-text-secondary leading-relaxed mb-6">
        {step.content}
      </div>

      <div className="flex items-center justify-between">
        <div className="text-xs font-medium text-text-muted">
          Step {index + 1} of {size}
        </div>
        <div className="flex items-center gap-2">
          {index > 0 && (
            <Button
              variant="outline"
              size="sm"
              {...backProps}
              className="text-xs h-8 px-3 rounded-lg"
            >
              Back
            </Button>
          )}
          <Button
            size="sm"
            {...primaryProps}
            className="text-xs h-8 px-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {isLastStep ? "Finish" : "Next"}
          </Button>
        </div>
      </div>
      
      {!isLastStep && (
        <button
          {...skipProps}
          className="absolute top-4 right-4 text-xs font-medium text-text-muted hover:text-text-primary transition-colors focus:outline-none"
        >
          Skip
        </button>
      )}
    </div>
  );
}
