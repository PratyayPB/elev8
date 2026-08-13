"use client";

import { PredefinedDifficulty } from "../../types/predefined-interview";
import { INTERVIEW_CATALOG_DIFFICULTIES } from "../../data/interview-catalog-difficulties";
import { cn } from "@/lib/utils";

interface DifficultySelectorProps {
  selectedDifficulty: string | null;
  onSelect: (difficulty: PredefinedDifficulty) => void;
}

export function DifficultySelector({ selectedDifficulty, onSelect }: DifficultySelectorProps) {
  const levels: PredefinedDifficulty[] = ["EASY", "MEDIUM", "HARD"];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {levels.map((level) => {
        const isSelected = selectedDifficulty === level;
        const info = INTERVIEW_CATALOG_DIFFICULTIES[level];
        
        return (
          <div
            key={level}
            onClick={() => onSelect(level)}
            className={cn(
              "cursor-pointer rounded-xl border p-6 transition-all text-center flex flex-col items-center justify-center min-h-[200px]",
              "hover:border-text-primary/30 hover:shadow-md",
              isSelected 
                ? "border-text-primary bg-text-primary text-white shadow-md" 
                : "border-border-subtle bg-dashboard-card text-text-primary"
            )}
          >
            <h3 className={cn(
              "text-xl font-display font-bold mb-2",
              isSelected ? "text-white" : "text-text-primary"
            )}>{info.label}</h3>
            <span className={cn(
              "text-xs font-display font-semibold px-3 py-1 rounded-full mb-4",
              isSelected 
                ? "text-text-primary bg-white border border-white/20" 
                : "text-text-primary bg-dashboard-metricHighlight border border-dashboard-metricHighlight/60"
            )}>
              {info.questionCount} Questions
            </span>
            <p className={cn(
              "text-sm font-sans leading-relaxed",
              isSelected ? "text-white/80" : "text-text-secondary"
            )}>
              {info.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
