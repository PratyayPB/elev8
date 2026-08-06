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
      <label className="block text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
        <Award className="w-4 h-4 text-blue-600" />
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
              className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all text-center ${
                isSelected
                  ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-blue-400"
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
