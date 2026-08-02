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
        <label className="block text-sm font-semibold text-gray-900 mb-1">
          Current Experience Level <span className="text-red-500">*</span>
        </label>
        <p className="text-xs text-gray-500 mb-3">
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
                  ? "bg-black text-white border-black shadow-md ring-2 ring-black/10"
                  : "bg-white text-gray-900 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-sm flex items-center gap-1.5">
                  <Sparkles className={`w-3.5 h-3.5 ${isSelected ? "text-yellow-400" : "text-gray-400"}`} />
                  {item.title}
                </span>
              </div>
              <p
                className={`text-xs mt-1 leading-relaxed ${
                  isSelected ? "text-gray-300" : "text-gray-500"
                }`}
              >
                {item.description}
              </p>
            </button>
          );
        })}
      </div>
      {error && <p className="text-xs text-red-500 mt-1.5">{error}</p>}
    </div>
  );
}
