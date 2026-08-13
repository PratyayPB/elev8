import { useInterviewSessionStore } from "../../hooks/use-interview-session";

export function ProgressBar() {
  const { artifact, currentQuestionIndex } = useInterviewSessionStore();

  if (!artifact) return null;

  const totalQuestions = artifact.questions.length;
  const answeredCount = artifact.answers.filter(a => a.answerText.trim().length > 0).length;
  const completionPercentage = Math.round((answeredCount / totalQuestions) * 100);

  return (
    <div className="bg-dashboard-card rounded-xl p-4 border border-dashboard-cardBorder shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-display font-semibold text-text-secondary">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </span>
        <span className="text-sm font-display font-bold text-text-primary">
          {completionPercentage}% Completed
        </span>
      </div>
      
      <div className="w-full h-2 bg-surface-muted rounded-full overflow-hidden flex">
        <div 
          className="h-full bg-text-primary transition-all duration-300" 
          style={{ width: `${completionPercentage}%` }}
        />
      </div>
      
      <div className="mt-3 flex gap-1.5 flex-wrap">
        {artifact.questions.map((q, idx) => {
          const isAnswered = artifact.answers.some(a => a.questionId === q.id && a.answerText.trim().length > 0);
          const isCurrent = currentQuestionIndex === idx;
          
          let markerClass = "h-1.5 flex-1 rounded-full transition-all ";
          if (isCurrent) {
            markerClass += "bg-text-primary ring-2 ring-text-primary/10";
          } else if (isAnswered) {
            markerClass += "bg-emerald-600";
          } else {
            markerClass += "bg-border-subtle";
          }
          
          return <div key={q.id} className={markerClass} />;
        })}
      </div>
    </div>
  );
}
