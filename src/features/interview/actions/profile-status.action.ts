"use server";

import { getOrCreateDbUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { InterviewProfileContext } from "../types";

export interface InterviewProfileStatusResult {
  exists: boolean;
  isCompleted: boolean;
  profileContext?: InterviewProfileContext;
}

export async function fetchInterviewProfileStatusAction(): Promise<InterviewProfileStatusResult> {
  const user = await getOrCreateDbUser();
  const profile = await prisma.profile.findUnique({
    where: { userId: user.id },
  });

  const isCompleted = profile?.isCompleted ?? false;

  let profileContext: InterviewProfileContext | undefined = undefined;
  if (isCompleted && profile) {
    profileContext = {
      currentStatus: profile.currentStatus,
      currentRole: profile.currentRole,
      yearsOfExperience: profile.yearsOfExperience,
      highestQualification: profile.highestQualification,
      fieldOfStudy: profile.fieldOfStudy,
      primaryGoal: profile.primaryGoal,
      targetCompanyType: profile.targetCompanyType,
    };
  }

  return {
    exists: Boolean(profile),
    isCompleted,
    profileContext,
  };
}
