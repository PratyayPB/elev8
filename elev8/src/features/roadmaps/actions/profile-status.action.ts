"use server";

import { getOrCreateDbUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import {
  RoadmapProfileContextService,
  RoadmapProfileContext,
} from "@/services/roadmaps/roadmap-profile-context.service";

export interface ProfileStatusResult {
  exists: boolean;
  isCompleted: boolean;
  profileContext?: RoadmapProfileContext;
}

export async function fetchProfileStatusAction(): Promise<ProfileStatusResult> {
  const user = await getOrCreateDbUser();
  const profile = await prisma.profile.findUnique({
    where: { userId: user.id },
    include: { skills: true },
  });

  const isCompleted = profile?.isCompleted ?? false;

  let profileContext: RoadmapProfileContext | undefined = undefined;
  if (isCompleted && profile) {
    const built = RoadmapProfileContextService.buildRoadmapProfileContext(profile);
    if (built) {
      profileContext = built;
    }
  }

  return {
    exists: Boolean(profile),
    isCompleted,
    profileContext,
  };
}
