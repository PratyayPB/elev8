"use client";

import { LucideIcon } from "lucide-react";

interface ScoreCardProps {
  title: string;
  score: number;
  icon: LucideIcon;
  subtitle?: string;
  accentColor?: string;
}

export function ScoreCard({ title, score, icon: Icon, subtitle, accentColor = "text-blue-600" }: ScoreCardProps) {
  const getScoreBg = (val: number) => {
    if (val >= 85) return "bg-primary text-primary-foreground border-border-strong";
    if (val >= 70) return "bg-secondary text-secondary-foreground border-border-subtle";
    if (val >= 50) return "bg-surface-muted text-text-secondary border-border-subtle";
    return "bg-accent-coral/20 text-text-primary border-accent-coral";
  };

  return (
    <div className="bg-dashboard-card p-5 rounded-3xl border border-dashboard-cardBorder shadow-sm flex items-center justify-between">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <Icon className={`w-4 h-4 ${accentColor}`} />
          <h4 className="text-[10px] font-black text-text-secondary uppercase tracking-wider">
            {title}
          </h4>
        </div>
        <p className="text-2xl font-display font-black text-text-primary">
          {score}
          <span className="text-xs font-semibold text-text-muted">/100</span>
        </p>
        {subtitle && <p className="text-xs text-text-secondary">{subtitle}</p>}
      </div>

      <div className={`px-3 py-1.5 rounded-2xl text-[10px] font-black uppercase tracking-wider border ${getScoreBg(score)}`}>
        {score >= 85 ? "Excellent" : score >= 70 ? "Good" : score >= 50 ? "Average" : "Needs Work"}
      </div>
    </div>
  );
}
