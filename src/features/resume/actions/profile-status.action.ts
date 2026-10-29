"use server";

import { getOrCreateDbUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { ResumeProfileContext } from "../types";

export interface ResumeProfileStatusResult {
  exists: boolean;
  isCompleted: boolean;
  profileContext?: ResumeProfileContext;
}

export async function fetchResumeProfileStatusAction(): Promise<ResumeProfileStatusResult> {
  const user = await getOrCreateDbUser();
  const profile = await prisma.profile.findUnique({
    where: { userId: user.id },
    include: {
      skills: true,
      desiredSkills: true,
    },
  });

  const isCompleted = profile?.isCompleted ?? false;

  let profileContext: ResumeProfileContext | undefined = undefined;
  if (isCompleted && profile) {
    profileContext = {
      currentStatus: profile.currentStatus,
      currentRole: profile.currentRole,
      yearsOfExperience: profile.yearsOfExperience,
      highestQualification: profile.highestQualification,
      fieldOfStudy: profile.fieldOfStudy,
      primaryGoal: profile.primaryGoal,
      targetCompanyType: profile.targetCompanyType,
      skills: profile.skills ? profile.skills.map((s) => s.name) : [],
      desiredSkills: profile.desiredSkills ? profile.desiredSkills.map((s) => s.name) : [],
    };
  }

  return {
    exists: Boolean(profile),
    isCompleted,
    profileContext,
  };
}
