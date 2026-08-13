import React from "react";
import { EXPERIENCE_LEVELS } from "../../constants/experience-levels";
import { ExperienceLevel } from "../../types";
import { Sparkles } from "lucide-react";

interface ExperienceSelectorProps {
  value: ExperienceLevel;
  onChange: (level: ExperienceLevel) => void;
  error?: string;
}

export function ExperienceSelector({ value, onChange, error }: ExperienceSelectorProps) {
  return (
    <div className="space-y-3">
      <div>
        <label className="block text-sm font-display font-semibold text-text-primary mb-1">
          Current Experience Level <span className="text-rose-500">*</span>
        </label>
        <p className="text-xs font-sans text-text-secondary mb-3">
          Select the level that best reflects your current knowledge in this field.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {EXPERIENCE_LEVELS.map((item) => {
          const isSelected = value === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onChange(item.id as ExperienceLevel)}
              className={`text-left p-4 rounded-xl border transition-all flex flex-col justify-between ${
                isSelected
                  ? "bg-text-primary text-white border-text-primary shadow-md"
                  : "bg-surface-muted text-text-primary border-border-subtle hover:border-text-primary/30 hover:bg-border-subtle"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-display font-semibold text-sm flex items-center gap-1.5">
                  <Sparkles className={`w-4 h-4 ${isSelected ? "text-dashboard-metricHighlight fill-dashboard-metricHighlight" : "text-text-muted"}`} />
                  {item.title}
                </span>
              </div>
              <p
                className={`text-xs font-sans mt-1 leading-relaxed ${
                  isSelected ? "text-slate-300" : "text-text-secondary"
                }`}
              >
                {item.description}
              </p>
            </button>
          );
        })}
      </div>
      {error && <p className="text-xs font-sans text-rose-500 mt-1.5">{error}</p>}
    </div>
  );
}
