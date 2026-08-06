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
    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
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
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
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
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
          >
            {nextLabel}
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
