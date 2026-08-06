import { useInterviewSessionStore } from "../../hooks/use-interview-session";

export function ProgressBar() {
  const { artifact, currentQuestionIndex } = useInterviewSessionStore();

  if (!artifact) return null;

  const totalQuestions = artifact.questions.length;
  const answeredCount = artifact.answers.filter(a => a.answerText.trim().length > 0).length;
  const completionPercentage = Math.round((answeredCount / totalQuestions) * 100);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </span>
        <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
          {completionPercentage}% Completed
        </span>
      </div>
      
      <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden flex">
        {/* We can show a continuous progress bar or segmented */}
        <div 
          className="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-300" 
          style={{ width: `${completionPercentage}%` }}
        />
      </div>
      
      <div className="mt-3 flex gap-1.5 flex-wrap">
        {artifact.questions.map((q, idx) => {
          const isAnswered = artifact.answers.some(a => a.questionId === q.id && a.answerText.trim().length > 0);
          const isCurrent = currentQuestionIndex === idx;
          
          let markerClass = "h-1.5 flex-1 rounded-full ";
          if (isCurrent) {
            markerClass += "bg-blue-600 dark:bg-blue-400 ring-2 ring-blue-200 dark:ring-blue-900";
          } else if (isAnswered) {
            markerClass += "bg-green-500 dark:bg-green-500";
          } else {
            markerClass += "bg-gray-200 dark:bg-gray-600";
          }
          
          return <div key={q.id} className={markerClass} />;
        })}
      </div>
    </div>
  );
}
