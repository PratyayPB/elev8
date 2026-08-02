import React from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

interface NavigationProps {
  currentStep: number;
  totalSteps?: number;
  canContinue: boolean;
  onBack: () => void;
  onNext: () => void;
  onSkipPersonalization?: () => void;
}

export function Navigation({
  currentStep,
  totalSteps = 3,
  canContinue,
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
            onClick={onBack}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 bg-white hover:bg-gray-50 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </button>
        )}
      </div>

      <div className="flex items-center gap-3">
        {isPersonalization && onSkipPersonalization && (
          <button
            type="button"
            onClick={onSkipPersonalization}
            className="px-4 py-2 rounded-xl text-xs font-medium text-gray-500 hover:text-black transition-all"
          >
            Skip Stage
          </button>
        )}

        <button
          type="button"
          disabled={!canContinue}
          onClick={onNext}
          className={`inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs font-semibold shadow-sm transition-all ${
            canContinue
              ? "bg-black text-white hover:bg-black/90 cursor-pointer"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          {isLast ? (
            <>
              Complete Request <Check className="w-3.5 h-3.5" />
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
