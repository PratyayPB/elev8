import { z } from "zod";
import { ResumeCompanyType } from "@prisma/client";

export const ResumeCompanyTypeEnum = z.nativeEnum(ResumeCompanyType);

export const AiBuildResumeInputSchema = z.object({
  targetJobTitle: z
    .string()
    .min(2, "Target job title must be at least 2 characters")
    .max(100, "Target job title is too long"),
  jobDescription: z
    .string()
    .min(10, "Job description must be at least 10 characters")
    .max(10000, "Job description is too long"),
  targetCompany: z.string().max(100, "Company name is too long").optional(),
  targetCompanyType: ResumeCompanyTypeEnum.optional(),
});

export type AiBuildResumeInput = z.infer<typeof AiBuildResumeInputSchema>;
