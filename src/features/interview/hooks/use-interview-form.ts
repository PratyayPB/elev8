import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { InterviewRequestStage1Schema } from "../schemas/interview-request.schema";
import { useInterviewRequestStore } from "./use-interview-request";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

type Stage1FormData = z.infer<typeof InterviewRequestStage1Schema>;

export function useInterviewForm(): {
  form: UseFormReturn<Stage1FormData>;
  onSubmit: (data: Stage1FormData) => void;
} {
  const { requestData, updateRequestData, nextStep } = useInterviewRequestStore();
  const searchParams = useSearchParams();

  const queryRole = searchParams?.get("role") || "";
  const queryExp = searchParams?.get("experience") || searchParams?.get("experienceLevel");
  const queryDiff = searchParams?.get("difficulty");
  const queryType = searchParams?.get("type") || searchParams?.get("interviewType");

  const form = useForm<Stage1FormData>({
    resolver: zodResolver(InterviewRequestStage1Schema),
    defaultValues: {
      role: requestData.role || queryRole || "",
      experienceLevel: (requestData.experienceLevel as any) || (queryExp ? (queryExp.toUpperCase() as any) : undefined),
      difficulty: (requestData.difficulty as any) || (queryDiff ? (queryDiff.toUpperCase() as any) : undefined),
      interviewType: (requestData.interviewType as any) || (queryType ? (queryType.toUpperCase() as any) : undefined),
    },
  });

  useEffect(() => {
    if (queryRole && !form.getValues("role")) form.setValue("role", queryRole);
    if (queryExp && !form.getValues("experienceLevel")) form.setValue("experienceLevel", queryExp.toUpperCase() as any);
    if (queryDiff && !form.getValues("difficulty")) form.setValue("difficulty", queryDiff.toUpperCase() as any);
    if (queryType && !form.getValues("interviewType")) form.setValue("interviewType", queryType.toUpperCase() as any);
  }, [queryRole, queryExp, queryDiff, queryType, form]);

  const onSubmit = (data: Stage1FormData) => {
    updateRequestData(data);
    nextStep();
  };

  return { form, onSubmit };
}
