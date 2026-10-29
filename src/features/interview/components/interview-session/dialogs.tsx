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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-dashboard-card p-6 rounded-[var(--card-radius-lg)] w-full max-w-md shadow-2xl border border-dashboard-cardBorder">
        <h3 className="text-xl font-display font-bold text-text-primary mb-2">Pause Interview</h3>
        <p className="text-sm font-sans text-text-secondary mb-6 leading-relaxed">
          Your progress is safely autosaved. You can resume this interview at any time from your dashboard.
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            disabled={isProcessing}
            className="px-4 py-2 rounded-xl font-display font-semibold text-text-primary bg-surface-muted hover:bg-border-subtle border border-border-subtle transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={isProcessing}
            className="flex items-center px-4 py-2 rounded-xl font-display font-bold text-white bg-text-primary hover:bg-black/85 dark:hover:bg-brand-secondary-200 disabled:opacity-50 transition-colors"
          >
            {isProcessing ? <Loader2 className="w-5 h-5 animate-spin mr-2 text-dashboard-metricHighlight" /> : null}
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-dashboard-card p-6 rounded-[var(--card-radius-lg)] w-full max-w-md shadow-2xl border border-dashboard-cardBorder">
        <h3 className="text-xl font-display font-bold text-text-primary mb-2">Submit Interview</h3>
        
        {unansweredCount > 0 ? (
          <div className="mb-6 p-4 bg-dashboard-metricHighlight/20 border border-dashboard-metricHighlight/50 rounded-xl">
            <p className="text-text-primary font-display font-bold">
              You have {unansweredCount} unanswered {unansweredCount === 1 ? 'question' : 'questions'}.
            </p>
            <p className="text-text-secondary font-sans text-sm mt-1 leading-relaxed">
              Are you sure you want to submit? Unanswered questions will receive a score of 0.
            </p>
          </div>
        ) : (
          <p className="text-sm font-sans text-text-secondary mb-6 leading-relaxed">
            Ready to submit? Our AI will assess your answers and provide detailed feedback shortly.
          </p>
        )}

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            disabled={isProcessing}
            className="px-4 py-2 rounded-xl font-display font-semibold text-text-primary bg-surface-muted hover:bg-border-subtle border border-border-subtle transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={isProcessing}
            className="flex items-center px-4 py-2 rounded-xl font-display font-bold text-white bg-text-primary hover:bg-black/85 dark:hover:bg-brand-secondary-200 disabled:opacity-50 transition-colors"
          >
            {isProcessing ? <Loader2 className="w-5 h-5 animate-spin mr-2 text-dashboard-metricHighlight" /> : null}
            Submit Interview
          </button>
        </div>
      </div>
    </div>
  );
}
