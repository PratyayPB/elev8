import React from "react";
import { ArrowLeft, ArrowRight, Sparkles, Loader2 } from "lucide-react";

interface NavigationProps {
  currentStep: number;
  totalSteps?: number;
  canContinue: boolean;
  isSkipped?: boolean;
  isSubmitting?: boolean;
  onBack: () => void;
  onNext: () => void;
  onSkipPersonalization?: () => void;
}

export function Navigation({
  currentStep,
  totalSteps = 3,
  canContinue,
  isSkipped = false,
  isSubmitting = false,
  onBack,
  onNext,
  onSkipPersonalization,
}: NavigationProps) {
  const isFirst = currentStep === 1;
  const isLast = currentStep === totalSteps;
  const isPersonalization = currentStep === 2;

  return (
    <div className="flex items-center justify-between pt-6 border-t border-border-subtle mt-8">
      <div>
        {!isFirst && (
          <button
            type="button"
            disabled={isSubmitting}
            onClick={onBack}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border-subtle text-xs font-display font-semibold text-text-primary bg-surface-muted hover:bg-border-subtle transition-all disabled:opacity-50"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </button>
        )}
      </div>

      <div className="flex items-center gap-3">
        {isPersonalization && !isSkipped && onSkipPersonalization && (
          <button
            type="button"
            disabled={isSubmitting}
            onClick={onSkipPersonalization}
            className="px-4 py-2 rounded-xl text-xs font-display font-semibold text-text-secondary hover:text-text-primary transition-all disabled:opacity-50"
          >
            Skip Stage
          </button>
        )}

        <button
          type="button"
          disabled={!canContinue || isSubmitting}
          onClick={onNext}
          className={`inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs font-display font-bold shadow-sm transition-all ${
            canContinue && !isSubmitting
              ? "bg-text-primary text-white dark:text-brand-primary-900 hover:bg-black/80 dark:hover:bg-brand-secondary-200 cursor-pointer active:scale-[0.98]"
              : "bg-surface-muted text-text-muted cursor-not-allowed border border-border-subtle"
          }`}
        >
          {isSubmitting ? (
            <>
              Generating Roadmap <Loader2 className="w-3.5 h-3.5 animate-spin" />
            </>
          ) : isLast ? (
            <>
              Generate Roadmap <Sparkles className="w-3.5 h-3.5 text-dashboard-metricHighlight" />
            </>
          ) : (
            <>
              Continue <ArrowRight className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
