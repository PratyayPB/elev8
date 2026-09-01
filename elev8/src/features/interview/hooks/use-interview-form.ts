import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { InterviewRequestStage1Schema } from "../schemas/interview-request.schema";
import { useInterviewRequestStore } from "./use-interview-request";

type Stage1FormData = z.infer<typeof InterviewRequestStage1Schema>;

export function useInterviewForm(): {
  form: UseFormReturn<Stage1FormData>;
  onSubmit: (data: Stage1FormData) => void;
} {
  const { requestData, updateRequestData, nextStep } = useInterviewRequestStore();

  const form = useForm<Stage1FormData>({
    resolver: zodResolver(InterviewRequestStage1Schema),
    defaultValues: {
      role: requestData.role || "",
      experienceLevel: (requestData.experienceLevel as any) || undefined,
      difficulty: (requestData.difficulty as any) || undefined,
      interviewType: (requestData.interviewType as any) || undefined,
    },
  });

  const onSubmit = (data: Stage1FormData) => {
    updateRequestData(data);
    nextStep();
  };

  return { form, onSubmit };
}
