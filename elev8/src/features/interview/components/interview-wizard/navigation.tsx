interface NavigationProps {
  onNext?: () => void;
  onBack?: () => void;
  onSkip?: () => void;
  isNextDisabled?: boolean;
  nextLabel?: string;
}

export function Navigation({
  onNext,
  onBack,
  onSkip,
  isNextDisabled = false,
  nextLabel = "Next",
}: NavigationProps) {
  return (
    <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
      <div>
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="px-5 py-2.5 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
          >
            Back
          </button>
        )}
      </div>

      <div className="flex gap-4">
        {onSkip && (
          <button
            type="button"
            onClick={onSkip}
            className="px-5 py-2.5 rounded-xl font-semibold text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            Skip Personalization
          </button>
        )}

        {onNext && (
          <button
            type="button"
            onClick={onNext}
            disabled={isNextDisabled}
            className="px-5 py-2.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 dark:disabled:bg-blue-900 transition-colors"
          >
            {nextLabel}
          </button>
        )}
      </div>
    </div>
  );
}
