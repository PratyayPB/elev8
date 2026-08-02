import { useState, useCallback } from "react";
import { Question, Answer, ExperienceLevel } from "../types";
import { fetchPersonalizationQuestions } from "../services/personalization.service";

export function usePersonalization() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [skipped, setSkipped] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadQuestions = useCallback(
    async (role: string, experienceLevel: ExperienceLevel, hoursPerWeek: number | "Flexible") => {
      setLoading(true);
      setError(null);
      setSkipped(false);
      try {
        const result = await fetchPersonalizationQuestions(role, experienceLevel, hoursPerWeek);
        setQuestions(result);
      } catch (err) {
        console.error(err);
        setError("Failed to load personalized questions. You can skip this step.");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const toggleOption = (questionId: string, option: string, isSingle: boolean) => {
    setAnswers((prev) => {
      const current = prev[questionId] || [];
      if (isSingle) {
        return { ...prev, [questionId]: [option] };
      } else {
        const exists = current.includes(option);
        const updated = exists ? current.filter((o) => o !== option) : [...current, option];
        return { ...prev, [questionId]: updated };
      }
    });
  };

  const skipAll = () => {
    setSkipped(true);
  };

  const getFormattedAnswers = (): Answer[] => {
    if (skipped) return [];
    return Object.entries(answers)
      .filter(([_, selected]) => selected.length > 0)
      .map(([questionId, selectedOptions]) => ({
        questionId,
        selectedOptions,
      }));
  };

  return {
    questions,
    answers,
    loading,
    skipped,
    error,
    loadQuestions,
    toggleOption,
    skipAll,
    getFormattedAnswers,
  };
}
