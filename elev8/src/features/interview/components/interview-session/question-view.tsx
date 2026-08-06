import { GeneratedQuestion } from "../../types";
import { Clock, Tag, Target } from "lucide-react";

interface QuestionViewProps {
  question: GeneratedQuestion;
  index: number;
}

export function QuestionView({ question, index }: QuestionViewProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="flex flex-wrap gap-3 mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
          Question {index + 1}
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
          <Tag className="w-3 h-3 mr-1.5" />
          {question.category}
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
          <Target className="w-3 h-3 mr-1.5" />
          {question.difficulty}
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
          <Clock className="w-3 h-3 mr-1.5" />
          Est. {question.estimatedAnswerTime}
        </span>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 leading-relaxed">
        {question.question}
      </h2>
      
      {/* Optional: Show expected topics as a hint if user requests? For now keep it hidden from candidate */}
    </div>
  );
}
