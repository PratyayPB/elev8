"use client";

import { RESUME_EXPERIENCE_LEVELS } from "../../constants";
import { ResumeExperienceLevel } from "../../types";
import { Award } from "lucide-react";

interface ExperienceSelectorProps {
  value: ResumeExperienceLevel;
  onChange: (level: ResumeExperienceLevel) => void;
}

export function ExperienceSelector({ value, onChange }: ExperienceSelectorProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-display font-bold text-text-primary flex items-center gap-2">
        <Award className="w-4 h-4 text-text-primary" />
        Experience Level
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {RESUME_EXPERIENCE_LEVELS.map((level) => {
          const isSelected = value === level;
          return (
            <button
              key={level}
              type="button"
              onClick={() => onChange(level)}
              className={`py-2.5 px-3 rounded-xl border text-xs font-display font-bold transition-all text-center ${
                isSelected
                  ? "bg-text-primary text-white border-text-primary shadow-sm"
                  : "bg-white text-text-secondary border-border-subtle hover:bg-surface-muted hover:border-text-primary/30"
              }`}
            >
              {level}
            </button>
          );
        })}
      </div>
    </div>
  );
}
