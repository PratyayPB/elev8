import { Award, Code2, MessageSquare, Zap, Target } from "lucide-react";

interface ScoreCardProps {
  label: string;
  score: number;
  type: "overall" | "technical" | "communication" | "confidence" | "problemSolving";
}

export function ScoreCard({ label, score, type }: ScoreCardProps) {
  const getIcon = () => {
    switch (type) {
      case "overall": return <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case "technical": return <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case "communication": return <MessageSquare className="w-5 h-5 text-green-600 dark:text-green-400" />;
      case "confidence": return <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case "problemSolving": return <Target className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
    }
  };

  const getScoreColor = () => {
    if (score >= 80) return "text-green-600 dark:text-green-400";
    if (score >= 60) return "text-amber-600 dark:text-amber-400";
    return "text-red-600 dark:text-red-400";
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-between">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</span>
        <div className="p-2 rounded-xl bg-gray-50 dark:bg-gray-700/50">
          {getIcon()}
        </div>
      </div>

      <div className="flex items-baseline gap-1">
        <span className={`text-3xl font-extrabold ${getScoreColor()}`}>{score}</span>
        <span className="text-sm text-gray-400 font-medium">/ 100</span>
      </div>

      {/* Mini Progress Bar */}
      <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full mt-3 overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-500 ${
            score >= 80 ? "bg-green-500" : score >= 60 ? "bg-amber-500" : "bg-red-500"
          }`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}
