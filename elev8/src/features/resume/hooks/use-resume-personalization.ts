import { useState, useEffect } from "react";
import { Question } from "../types";
import { useResumeRequestStore } from "./use-resume-request";
import { fetchResumePersonalizationQuestions } from "../services/resume-personalization.service";

export function useResumePersonalization() {
  const { requestData, nextStep, setSkipped } = useResumeRequestStore();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasOptedIn, setHasOptedIn] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadQuestions() {
      if (!hasOptedIn) return;
      if (!requestData.role || !requestData.experienceLevel) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const fetchedQuestions = await fetchResumePersonalizationQuestions(
          requestData.role,
          requestData.experienceLevel
        );
        if (isMounted) {
          setQuestions(fetchedQuestions);
        }
      } catch (err) {
        console.error("Failed to load resume personalization questions", err);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadQuestions();

    return () => {
      isMounted = false;
    };
  }, [hasOptedIn, requestData.role, requestData.experienceLevel]);

  const handleSkip = () => {
    setSkipped(true);
    nextStep();
  };

  const handleContinue = () => {
    setSkipped(false);
    nextStep();
  };

  const optIn = () => {
    setHasOptedIn(true);
  };

  return { questions, isLoading, hasOptedIn, optIn, handleSkip, handleContinue };
}
