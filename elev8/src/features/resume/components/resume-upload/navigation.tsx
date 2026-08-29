"use client";

import { ArrowLeft, ArrowRight, SkipForward } from "lucide-react";

interface NavigationProps {
  onBack?: () => void;
  onNext?: () => void;
  onSkip?: () => void;
  isNextDisabled?: boolean;
  nextLabel?: string;
}

export function Navigation({
  onBack,
  onNext,
  onSkip,
  isNextDisabled = false,
  nextLabel = "Continue",
}: NavigationProps) {
  return (
    <div className="mt-8 pt-6 border-t border-border-subtle flex items-center justify-between">
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-display font-semibold text-text-primary bg-surface-muted hover:bg-border-subtle transition-colors border border-border-subtle"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
      ) : (
        <div />
      )}

      <div className="flex items-center gap-3">
        {onSkip && (
          <button
            type="button"
            onClick={onSkip}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-display font-semibold text-text-muted hover:text-text-primary transition-colors"
          >
            <SkipForward className="w-4 h-4" />
            Skip
          </button>
        )}

        {onNext && (
          <button
            type="button"
            onClick={onNext}
            disabled={isNextDisabled}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-display font-semibold text-white bg-text-primary hover:bg-black/85 dark:hover:bg-brand-secondary-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm active:scale-[0.98]"
          >
            {nextLabel}
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
