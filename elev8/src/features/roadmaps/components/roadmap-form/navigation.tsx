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
    <div className="flex items-center justify-between pt-6 border-t border-gray-200 mt-8">
      <div>
        {!isFirst && (
          <button
            type="button"
            disabled={isSubmitting}
            onClick={onBack}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 bg-white hover:bg-gray-50 transition-all disabled:opacity-50"
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
            className="px-4 py-2 rounded-xl text-xs font-medium text-gray-500 hover:text-black transition-all disabled:opacity-50"
          >
            Skip Stage
          </button>
        )}

        <button
          type="button"
          disabled={!canContinue || isSubmitting}
          onClick={onNext}
          className={`inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs font-bold shadow-md transition-all ${
            canContinue && !isSubmitting
              ? isLast
                ? "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white cursor-pointer shadow-cyan-500/20"
                : "bg-black text-white hover:bg-black/90 cursor-pointer"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          {isSubmitting ? (
            <>
              Generating Roadmap <Loader2 className="w-3.5 h-3.5 animate-spin" />
            </>
          ) : isLast ? (
            <>
              Generate Roadmap <Sparkles className="w-3.5 h-3.5 text-amber-300" />
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
