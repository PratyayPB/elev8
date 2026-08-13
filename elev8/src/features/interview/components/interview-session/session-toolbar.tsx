import { PauseCircle, Save, CheckCircle, Loader2 } from "lucide-react";
import { AutosaveStatus } from "../../hooks/use-autosave";

interface SessionToolbarProps {
  autosaveStatus: AutosaveStatus;
  onPause: () => void;
  onSubmit: () => void;
  onManualSave: () => void;
}

export function SessionToolbar({ autosaveStatus, onPause, onSubmit, onManualSave }: SessionToolbarProps) {
  return (
    <div className="flex items-center justify-between bg-dashboard-card p-4 border-b border-dashboard-cardBorder sticky top-0 z-10 shadow-sm">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-display font-bold text-text-primary">Active Interview</h1>
        
        {/* Autosave Indicator */}
        <div className="hidden sm:flex items-center text-sm font-sans">
          {autosaveStatus === "saving" && (
            <span className="flex items-center text-text-secondary">
              <Loader2 className="w-4 h-4 animate-spin mr-1.5 text-dashboard-metricHighlight" />
              Saving...
            </span>
          )}
          {autosaveStatus === "saved" && (
            <span className="flex items-center text-emerald-600">
              <CheckCircle className="w-4 h-4 mr-1.5" />
              Saved
            </span>
          )}
          {autosaveStatus === "error" && (
            <span className="text-rose-500 font-semibold">Failed to save</span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button
          onClick={onManualSave}
          disabled={autosaveStatus === "saving"}
          className="p-2 sm:px-3 sm:py-2 flex items-center justify-center rounded-xl font-display font-semibold text-text-primary bg-surface-muted hover:bg-border-subtle border border-border-subtle transition-colors disabled:opacity-50"
          title="Manual Save"
        >
          <Save className="w-4 h-4 sm:mr-1.5" />
          <span className="hidden sm:inline">Save</span>
        </button>

        <button
          onClick={onPause}
          className="p-2 sm:px-3 sm:py-2 flex items-center justify-center rounded-xl font-display font-semibold text-text-secondary bg-surface-muted hover:bg-border-subtle border border-border-subtle transition-colors"
          title="Pause Interview"
        >
          <PauseCircle className="w-4 h-4 sm:mr-1.5 text-text-secondary" />
          <span className="hidden sm:inline">Pause</span>
        </button>

        <button
          onClick={onSubmit}
          className="px-4 py-2 flex items-center justify-center rounded-xl font-display font-bold text-white bg-text-primary hover:bg-black/85 transition-all active:scale-[0.98]"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
