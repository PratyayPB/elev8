import { Award, Code2, MessageSquare, Zap, Target, Layers } from "lucide-react";

interface ScoreCardProps {
  label: string;
  score: number;
  type: "overall" | "technical" | "communication" | "confidence" | "problemSolving" | "practicalDepth";
}

export function ScoreCard({ label, score, type }: ScoreCardProps) {
  const getIcon = () => {
    switch (type) {
      case "overall": return <Award className="w-4 h-4 text-text-primary" />;
      case "technical": return <Code2 className="w-4 h-4 text-text-primary" />;
      case "communication": return <MessageSquare className="w-4 h-4 text-text-primary" />;
      case "confidence": return <Zap className="w-4 h-4 text-text-primary" />;
      case "problemSolving": return <Target className="w-4 h-4 text-text-primary" />;
      case "practicalDepth": return <Layers className="w-4 h-4 text-text-primary" />;
    }
  };

  const getScoreColor = () => {
    if (score >= 80) return "text-emerald-600";
    if (score >= 60) return "text-text-primary";
    return "text-rose-600";
  };

  return (
    <div className="bg-dashboard-card p-5 rounded-[var(--card-radius)] border border-dashboard-cardBorder shadow-sm flex flex-col justify-between">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] uppercase font-display font-bold text-text-secondary tracking-wider">{label}</span>
        <div className="p-1.5 rounded-lg bg-surface-muted border border-border-subtle">
          {getIcon()}
        </div>
      </div>

      <div className="flex items-baseline gap-1">
        <span className={`text-3xl font-display font-bold ${getScoreColor()}`}>{score}</span>
        <span className="text-xs font-display font-semibold text-text-muted">/ 100</span>
      </div>

      {/* Mini Progress Bar */}
      <div className="w-full h-1.5 bg-surface-muted rounded-full mt-3 overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-500 ${
            score >= 80 ? "bg-emerald-600" : score >= 60 ? "bg-text-primary" : "bg-rose-500"
          }`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}
