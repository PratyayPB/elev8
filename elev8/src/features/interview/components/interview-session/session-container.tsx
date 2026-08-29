"use client";

import { useEffect, useState } from "react";
import { useInterviewSessionStore } from "../../hooks/use-interview-session";
import { useAutosave } from "../../hooks/use-autosave";
import { submitInterview } from "../../actions/session-actions";
import { useRouter } from "next/navigation";
import { SessionToolbar } from "./session-toolbar";
import { ProgressBar } from "./progress-bar";
import { QuestionView } from "./question-view";
import { AnswerEditor } from "./answer-editor";
import { PauseDialog, SubmitDialog } from "./dialogs";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

interface SessionContainerProps {
  interviewId: string;
}

export function SessionContainer({ interviewId }: SessionContainerProps) {
  const router = useRouter();
  const { 
    artifact, 
    blobUrl,
    currentQuestionIndex, 
    updateAnswer, 
    prevQuestion, 
    nextQuestion,
    incrementDuration,
    durationSeconds
  } = useInterviewSessionStore();
  
  const { status: autosaveStatus, save, debouncedSave } = useAutosave(interviewId);

  const [isPauseOpen, setIsPauseOpen] = useState(false);
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const [isProcessingAction, setIsProcessingAction] = useState(false);

  // Timer interval
  useEffect(() => {
    const timer = setInterval(() => {
      incrementDuration();
    }, 1000);
    return () => clearInterval(timer);
  }, [incrementDuration]);

  // Auto-save on unmount
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      save(); // Best effort synchronous save
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      save();
    };
  }, [save]);

  if (!artifact) return null;

  const currentQuestion = artifact.questions[currentQuestionIndex];
  const currentAnswer = artifact.answers.find(a => a.questionId === currentQuestion.id)?.answerText || "";
  
  const isFirst = currentQuestionIndex === 0;
  const isLast = currentQuestionIndex === artifact.questions.length - 1;
  const unansweredCount = artifact.questions.length - artifact.answers.filter(a => a.answerText.trim().length > 0).length;

  const handleAnswerChange = (text: string) => {
    updateAnswer(currentQuestion.id, text);
    debouncedSave();
  };

  const handlePrev = async () => {
    await save();
    prevQuestion();
  };

  const handleNext = async () => {
    await save();
    nextQuestion();
  };

  const handlePauseConfirm = async () => {
    setIsProcessingAction(true);
    await save();
    setIsProcessingAction(false);
    setIsPauseOpen(false);
    router.push("/dashboard/interviews"); // Return to library/dashboard
  };

  const handleSubmitConfirm = async () => {
    setIsProcessingAction(true);
    try {
      // Immediate save first
      await save();
      
      if (blobUrl && artifact) {
        // Trigger final submit action
        await submitInterview(interviewId, blobUrl, artifact, durationSeconds);
        setIsSubmitOpen(false);
        // Redirect to assessment progress page (Phase 3.4 will handle this view, for now library)
        alert("Interview submitted successfully! Redirecting...");
        router.push("/dashboard/interviews");
      }
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Failed to submit interview. Please try again.");
    } finally {
      setIsProcessingAction(false);
    }
  };

  return (
    <div className="flex flex-col space-y-6 pb-10 text-text-primary">
      <SessionToolbar 
        autosaveStatus={autosaveStatus}
        onManualSave={save}
        onPause={() => setIsPauseOpen(true)}
        onSubmit={() => setIsSubmitOpen(true)}
      />

      <main className="flex-1 w-full mx-auto flex flex-col gap-6">
        <ProgressBar />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5">
            <QuestionView question={currentQuestion} index={currentQuestionIndex} />
          </div>
          
          <div className="lg:col-span-7 flex flex-col">
            <AnswerEditor 
              value={currentAnswer} 
              onChange={handleAnswerChange}
              onBlur={save}
            />
            
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={handlePrev}
                disabled={isFirst}
                className="flex items-center px-5 py-2.5 rounded-xl font-display font-semibold text-text-primary bg-surface-muted hover:bg-border-subtle border border-border-subtle transition-colors disabled:opacity-50"
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                Previous
              </button>
              
              {!isLast ? (
                <button
                  onClick={handleNext}
                  className="flex items-center px-5 py-2.5 rounded-xl font-display font-bold text-white bg-text-primary hover:bg-black/85 dark:hover:bg-brand-secondary-200 transition-colors active:scale-[0.98]"
                >
                  Next Question
                  <ChevronRight className="w-5 h-5 ml-1" />
                </button>
              ) : (
                <button
                  onClick={() => setIsSubmitOpen(true)}
                  className="flex items-center px-5 py-2.5 rounded-xl font-display font-bold text-white bg-text-primary hover:bg-black/85 dark:hover:bg-brand-secondary-200 transition-colors active:scale-[0.98]"
                >
                  Review & Submit
                  <ChevronRight className="w-5 h-5 ml-1 text-dashboard-metricHighlight" />
                </button>
              )}
            </div>
          </div>
        </div>
      </main>

      <PauseDialog 
        isOpen={isPauseOpen} 
        onClose={() => setIsPauseOpen(false)} 
        onConfirm={handlePauseConfirm}
        isProcessing={isProcessingAction}
      />
      
      <SubmitDialog 
        isOpen={isSubmitOpen} 
        onClose={() => setIsSubmitOpen(false)} 
        onConfirm={handleSubmitConfirm}
        isProcessing={isProcessingAction}
        unansweredCount={unansweredCount}
      />
    </div>
  );
}
