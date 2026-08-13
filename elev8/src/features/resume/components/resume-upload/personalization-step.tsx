"use client";

import { useResumePersonalization } from "../../hooks/use-resume-personalization";
import { useResumeRequestStore } from "../../hooks/use-resume-request";
import { DynamicQuestion } from "./dynamic-question";
import { Navigation } from "./navigation";
import { Loader2, Sparkles, SkipForward } from "lucide-react";

export function PersonalizationStep() {
  const { questions, isLoading, hasOptedIn, optIn, handleSkip, handleContinue } =
    useResumePersonalization();
  const { requestData, updateAnswer, prevStep } = useResumeRequestStore();

  if (!hasOptedIn) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="w-16 h-16 bg-dashboard-metricHighlight text-text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 border border-dashboard-metricHighlight/60">
          <Sparkles className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-display font-bold text-text-primary mb-4">
          Personalize Your Resume Audit
        </h2>
        <p className="text-base font-sans text-text-secondary mb-8 max-w-lg mx-auto">
          Would you like to answer a few quick questions to help us tailor our scoring, ATS recommendations, and feedback to your target company profile?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={optIn}
            className="flex items-center justify-center px-6 py-3 rounded-xl font-display font-semibold text-white bg-text-primary hover:bg-black/85 transition-all shadow-sm active:scale-[0.98]"
          >
            <Sparkles className="w-5 h-5 mr-2 text-dashboard-metricHighlight" />
            Yes, Personalize It
          </button>

          <button
            onClick={handleSkip}
            className="flex items-center justify-center px-6 py-3 rounded-xl font-display font-semibold text-text-primary bg-surface-muted hover:bg-border-subtle transition-colors border border-border-subtle"
          >
            <SkipForward className="w-5 h-5 mr-2" />
            Skip & Proceed
          </button>
        </div>

        <div className="mt-12 pt-6 border-t border-border-subtle flex justify-start">
          <button
            type="button"
            onClick={prevStep}
            className="px-5 py-2.5 rounded-xl font-display font-semibold text-text-primary bg-surface-muted hover:bg-border-subtle transition-colors border border-border-subtle"
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-text-secondary">
        <Loader2 className="w-10 h-10 animate-spin text-text-primary mb-4" />
        <p className="text-lg font-display font-medium">Generating personalization questions...</p>
      </div>
    );
  }

  const allAnswered = questions.every((q) => {
    const ans = requestData.personalization?.answers.find((a) => a.questionId === q.id);
    return ans && ans.selectedOptions.length > 0;
  });

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-display font-bold text-text-primary">
          Personalize Your Resume Audit
        </h2>
        <p className="text-text-secondary mt-2 font-sans text-sm">
          Answer these optional questions to fine-tune your score. You can skip this step at any time.
        </p>
      </div>

      <div className="space-y-6">
        {questions.length === 0 ? (
          <div className="bg-surface-muted rounded-xl p-8 text-center text-text-muted border border-border-subtle font-sans text-sm">
            No additional personalization questions needed at this time.
          </div>
        ) : (
          questions.map((q) => {
            const initialAns =
              requestData.personalization?.answers.find((a) => a.questionId === q.id)?.selectedOptions || [];
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
