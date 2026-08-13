import { InterviewArtifact } from "../../types";
import { QuestionCard } from "./question-card";

interface QuestionReviewProps {
  artifact: InterviewArtifact;
}

export function QuestionReview({ artifact }: QuestionReviewProps) {
  const { questions, answers, assessment } = artifact;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-display font-bold text-text-primary">Question Review & Analysis</h3>
        <span className="text-sm font-sans text-text-secondary">{questions.length} Questions</span>
      </div>

      <div className="flex flex-col gap-4">
        {questions.map((question, idx) => {
          const answer = answers.find(a => a.questionId === question.id);
          const feedback = assessment?.questionAnalysis ? assessment.questionAnalysis[question.id] : undefined;

          return (
            <QuestionCard
              key={question.id}
              question={question}
              index={idx}
              answerText={answer ? answer.answerText : ""}
              feedback={feedback}
            />
          );
        })}
      </div>
    </div>
  );
}
