"use client";

import { PredefinedInterviewSummary } from "../../types/predefined-interview";
import { INTERVIEW_CATALOG_TYPES } from "../../data/interview-catalog-types";
import { cn } from "@/lib/utils";

interface RoleSelectorProps {
  catalog: PredefinedInterviewSummary[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export function RoleSelector({ catalog, selectedId, onSelect }: RoleSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {catalog.map((item) => {
        const isSelected = selectedId === item.id;
        const typeInfo = INTERVIEW_CATALOG_TYPES[item.type];
        
        return (
          <div
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={cn(
              "cursor-pointer rounded-xl border p-5 transition-all",
              "hover:border-text-primary/30 hover:shadow-sm",
              isSelected 
                ? "border-text-primary bg-text-primary text-white hover:bg-black/90 shadow-md" 
                : "border-border-subtle bg-dashboard-card text-text-primary"
            )}
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className={cn(
                "font-display font-bold text-base",
                isSelected ? "text-white" : "text-text-primary"
              )}>{item.role}</h3>
              <span className={cn(
                "text-[10px] uppercase tracking-wider font-display font-bold px-2 py-1 rounded",
                isSelected 
                  ? "bg-white/10 text-white border border-white/20" 
                  : "bg-surface-muted border border-border-subtle text-text-secondary"
              )}>
                {typeInfo?.label || item.type}
              </span>
            </div>
            <p className={cn(
              "text-xs font-sans line-clamp-2 leading-relaxed",
              isSelected ? "text-white/80" : "text-text-secondary"
            )}>
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
