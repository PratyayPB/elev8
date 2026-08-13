import React from "react";
import { STUDY_HOURS_OPTIONS, StudyHoursValue } from "../../constants/study-hours";
import { Clock } from "lucide-react";

interface StudyHoursSelectorProps {
  value: StudyHoursValue;
  onChange: (hours: StudyHoursValue) => void;
  error?: string;
}

export function StudyHoursSelector({ value, onChange, error }: StudyHoursSelectorProps) {
  return (
    <div className="space-y-3">
      <div>
        <label className="block text-sm font-display font-semibold text-text-primary mb-1">
          Weekly Study Hours <span className="text-rose-500">*</span>
        </label>
        <p className="text-xs font-sans text-text-secondary mb-3">
          How much time can you dedicate per week to following this roadmap?
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        {STUDY_HOURS_OPTIONS.map((option) => {
          const isSelected = value === option.value;

          return (
            <button
              key={String(option.value)}
              type="button"
              onClick={() => onChange(option.value as StudyHoursValue)}
              className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-sm font-display font-medium transition-all ${
                isSelected
                  ? "bg-text-primary text-white border-text-primary shadow-sm"
                  : "bg-surface-muted text-text-primary border-border-subtle hover:border-text-primary/30 hover:bg-border-subtle"
              }`}
            >
              <Clock className="w-4 h-4 opacity-70" />
              {option.label}
            </button>
          );
        })}
      </div>
      {error && <p className="text-xs font-sans text-rose-500 mt-1.5">{error}</p>}
    </div>
  );
}
