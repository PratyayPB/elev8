import { useState, useEffect } from "react";
import { Question } from "../types";
import { useInterviewRequestStore } from "./use-interview-request";
import { fetchInterviewPersonalizationQuestions } from "../services/interview-personalization.service";

export function useInterviewPersonalization() {
  const { requestData, nextStep, setSkipped } = useInterviewRequestStore();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasOptedIn, setHasOptedIn] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadQuestions() {
      if (!hasOptedIn) return;

      if (!requestData.role || !requestData.experienceLevel || !requestData.difficulty || !requestData.interviewType) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const fetchedQuestions = await fetchInterviewPersonalizationQuestions(
          requestData.role,
          requestData.experienceLevel,
          requestData.difficulty,
          requestData.interviewType
        );
        if (isMounted) {
          setQuestions(fetchedQuestions);
        }
      } catch (error) {
        console.error("Failed to load personalization questions", error);
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
  }, [hasOptedIn, requestData.role, requestData.experienceLevel, requestData.difficulty, requestData.interviewType]);

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
