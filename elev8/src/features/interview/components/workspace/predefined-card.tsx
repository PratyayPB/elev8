import { PredefinedInterviewSummary } from "../../types/predefined-interview";
import { INTERVIEW_CATALOG_TYPES } from "../../data/interview-catalog-types";

interface PredefinedCardProps {
  interview: PredefinedInterviewSummary;
  onSelect: () => void;
}

export function PredefinedCard({ interview, onSelect }: PredefinedCardProps) {
  const typeInfo = INTERVIEW_CATALOG_TYPES[interview.type];

  return (
    <div className="bg-dashboard-card rounded-[var(--card-radius)] border border-dashboard-cardBorder shadow-sm p-6 flex flex-col justify-between hover:border-text-primary/30 transition-all group">
      <div>
        <div className="flex justify-between items-start mb-3">
          <span className="text-[10px] uppercase tracking-wider font-display font-bold px-2.5 py-1 rounded bg-surface-muted border border-border-subtle text-text-secondary">
            {typeInfo?.label || interview.type}
          </span>
        </div>
        <h4 className="text-lg font-display font-bold text-text-primary transition-colors">
          {interview.role}
        </h4>
        <p className="text-xs font-sans text-text-secondary mt-2 line-clamp-3 leading-relaxed">
          {interview.description}
        </p>
      </div>

      <button
        onClick={onSelect}
        className="mt-6 w-full py-2.5 px-4 bg-text-primary hover:bg-black/85 dark:hover:bg-brand-secondary-200 text-white font-display font-bold text-xs rounded-xl shadow-sm transition-all flex items-center justify-center gap-1 active:scale-[0.98]"
      >
        Practice Interview
      </button>
    </div>
  );
}
