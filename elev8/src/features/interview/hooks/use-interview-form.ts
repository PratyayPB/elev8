import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { InterviewRequestStage1Schema } from "../schemas/interview-request.schema";
import { useInterviewRequestStore } from "./use-interview-request";
import { INTERVIEW_TYPE_MAP } from "../constants/index";

type Stage1FormData = z.infer<typeof InterviewRequestStage1Schema>;

export function useInterviewForm() {
  const { requestData, updateRequestData, nextStep } = useInterviewRequestStore();

  const form = useForm<Stage1FormData>({
    resolver: zodResolver(InterviewRequestStage1Schema),
    defaultValues: {
      role: requestData.role || "",
      experienceLevel: requestData.experienceLevel || undefined,
      difficulty: requestData.difficulty || undefined,
      interviewType: requestData.interviewType || undefined,
    },
  });

  const onSubmit = (data: Stage1FormData) => {
    updateRequestData({
      ...data,
      questionCount: INTERVIEW_TYPE_MAP[data.interviewType] || 10,
    });
    nextStep();
  };

  return { form, onSubmit };
}
