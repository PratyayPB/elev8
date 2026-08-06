import { useInterviewPersonalization } from "../../hooks/use-interview-personalization";
import { useInterviewRequestStore } from "../../hooks/use-interview-request";
import { DynamicQuestion } from "./dynamic-question";
import { Navigation } from "./navigation";
import { Loader2, Sparkles, SkipForward } from "lucide-react";

export function PersonalizationStep() {
  const { questions, isLoading, hasOptedIn, optIn, handleSkip, handleContinue } = useInterviewPersonalization();
  const { requestData, updateAnswer, prevStep } = useInterviewRequestStore();

  if (!hasOptedIn) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Personalize Your Interview
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
          Would you like our AI to generate a few quick questions to tailor this interview to your specific background and target companies?
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={optIn}
            className="flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Yes, Personalize It
          </button>
          
          <button
            onClick={handleSkip}
            className="flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            <SkipForward className="w-5 h-5 mr-2" />
            Skip & Proceed
          </button>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 flex justify-start">
          <button
            type="button"
            onClick={prevStep}
            className="px-5 py-2.5 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-500">
        <Loader2 className="w-10 h-10 animate-spin text-blue-600 mb-4" />
        <p className="text-lg font-medium">Generating personalization questions...</p>
      </div>
    );
  }

  // All questions must have at least one answer to be considered complete
  const allAnswered = questions.every((q) => {
    const ans = requestData.personalization?.answers.find((a) => a.questionId === q.id);
    return ans && ans.selectedOptions.length > 0;
  });

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Personalize Your Interview
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Answer these optional questions to help us tailor the interview to your background and goals. You can skip this step entirely.
        </p>
      </div>

      <div className="space-y-6">
        {questions.length === 0 ? (
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center text-gray-500 dark:text-gray-400">
            No additional personalization questions needed at this time.
          </div>
        ) : (
          questions.map((q) => {
            const initialAns = requestData.personalization?.answers.find((a) => a.questionId === q.id)?.selectedOptions || [];
            return (
              <DynamicQuestion
                key={q.id}
                question={q}
                initialAnswers={initialAns}
                onChange={(selected) => updateAnswer(q.id, selected)}
              />
            );
          })
        )}
      </div>

      <Navigation
        onBack={prevStep}
        onSkip={questions.length > 0 ? handleSkip : undefined}
        onNext={handleContinue}
        nextLabel="Continue"
        isNextDisabled={questions.length > 0 && !allAnswered}
      />
    </div>
  );
}
