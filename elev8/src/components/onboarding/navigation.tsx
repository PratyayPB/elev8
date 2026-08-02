"use client";

import React from "react";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";

interface NavigationProps {
  currentStep: number;
  isSubmitting?: boolean;
  onPrevious?: () => void;
  onNext?: () => void;
  onSkip?: () => void;
  nextText?: string;
}

export function Navigation({
  currentStep,
  isSubmitting = false,
  onPrevious,
  onNext,
  onSkip,
  nextText = "Save & Continue",
}: NavigationProps) {
  return (
    <div className="flex items-center justify-between pt-6 border-t border-border mt-8">
      {onPrevious && currentStep > 1 ? (
        <button
          type="button"
          onClick={onPrevious}
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary px-4 py-2.5 rounded-xl border border-border bg-surface hover:bg-surface-muted transition-colors disabled:opacity-50"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
      ) : (
        <div />
      )}

      <div className="flex items-center gap-3">
        {onSkip && currentStep < 9 && (
          <button
            type="button"
            onClick={onSkip}
            disabled={isSubmitting}
            className="text-xs text-text-muted hover:text-text-secondary px-3 py-2 transition-colors disabled:opacity-50"
          >
            Skip for now
          </button>
        )}

        {onNext && (
          <button
            type="button"
            onClick={onNext}
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 text-sm font-semibold text-black bg-accent-cyan hover:brightness-105 px-6 py-2.5 rounded-xl transition-all shadow-sm hover:shadow disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                {nextText}
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
