import { Loader2 } from "lucide-react";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isProcessing?: boolean;
}

export function PauseDialog({ isOpen, onClose, onConfirm, isProcessing }: DialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl w-full max-w-md shadow-xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Pause Interview</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Your progress is safely autosaved. You can resume this interview at any time from your dashboard.
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            disabled={isProcessing}
            className="px-4 py-2 rounded-xl font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={isProcessing}
            className="flex items-center px-4 py-2 rounded-xl font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {isProcessing ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
            Save & Exit
          </button>
        </div>
      </div>
    </div>
  );
}

export function SubmitDialog({
  isOpen,
  onClose,
  onConfirm,
  isProcessing,
  unansweredCount
}: DialogProps & { unansweredCount: number }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl w-full max-w-md shadow-xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Submit Interview</h3>
        
        {unansweredCount > 0 ? (
          <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-900/50 rounded-xl">
            <p className="text-amber-800 dark:text-amber-400 font-medium">
              You have {unansweredCount} unanswered {unansweredCount === 1 ? 'question' : 'questions'}.
            </p>
            <p className="text-amber-700 dark:text-amber-500 text-sm mt-1">
              Are you sure you want to submit? Unanswered questions will receive a score of 0.
            </p>
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Ready to submit? Our AI will assess your answers and provide detailed feedback shortly.
          </p>
        )}

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            disabled={isProcessing}
            className="px-4 py-2 rounded-xl font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={isProcessing}
            className="flex items-center px-4 py-2 rounded-xl font-medium text-white bg-green-600 hover:bg-green-700 disabled:opacity-50 transition-colors"
          >
            {isProcessing ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
            Submit Interview
          </button>
        </div>
      </div>
    </div>
  );
}
