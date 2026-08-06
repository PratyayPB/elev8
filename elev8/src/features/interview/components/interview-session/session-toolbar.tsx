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
    <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10 shadow-sm">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Active Interview</h1>
        
        {/* Autosave Indicator */}
        <div className="hidden sm:flex items-center text-sm">
          {autosaveStatus === "saving" && (
            <span className="flex items-center text-gray-500 dark:text-gray-400">
              <Loader2 className="w-4 h-4 animate-spin mr-1.5" />
              Saving...
            </span>
          )}
          {autosaveStatus === "saved" && (
            <span className="flex items-center text-green-600 dark:text-green-500">
              <CheckCircle className="w-4 h-4 mr-1.5" />
              Saved
            </span>
          )}
          {autosaveStatus === "error" && (
            <span className="text-red-500">Failed to save</span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button
          onClick={onManualSave}
          disabled={autosaveStatus === "saving"}
          className="p-2 sm:px-3 sm:py-2 flex items-center justify-center rounded-xl font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors disabled:opacity-50"
          title="Manual Save"
        >
          <Save className="w-5 h-5 sm:mr-1.5" />
          <span className="hidden sm:inline">Save</span>
        </button>

        <button
          onClick={onPause}
          className="p-2 sm:px-3 sm:py-2 flex items-center justify-center rounded-xl font-medium text-gray-700 bg-amber-100 hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:hover:bg-amber-900/50 transition-colors"
          title="Pause Interview"
        >
          <PauseCircle className="w-5 h-5 sm:mr-1.5 text-amber-600 dark:text-amber-400" />
          <span className="hidden sm:inline">Pause</span>
        </button>

        <button
          onClick={onSubmit}
          className="px-4 py-2 flex items-center justify-center rounded-xl font-bold text-white bg-green-600 hover:bg-green-700 transition-colors"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
