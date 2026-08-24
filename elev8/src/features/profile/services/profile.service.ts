import { prisma } from "@/lib/prisma";
import {
  ProfileData,
  ProfileCreateInput,
  ProfileUpdateInput,
  ProfileSkillData,
} from "../types";
import { profileCreateSchema, profileUpdateSchema } from "../schemas";
import { deduplicateSkills, deduplicateDesiredSkills, normalizeSkillName } from "../utils";
import {
  Profile,
  ProfileSkill,
  ProfileDesiredSkill,
  Prisma,
} from "@prisma/client";

export class ProfileConflictError extends Error {
  constructor(message = "A profile already exists for this user") {
    super(message);
    this.name = "ProfileConflictError";
  }
}

export class ProfileNotFoundError extends Error {
  constructor(message = "Profile not found") {
    super(message);
    this.name = "ProfileNotFoundError";
  }
}

type ProfileWithRelations = Profile & {
  skills: ProfileSkill[];
  desiredSkills: ProfileDesiredSkill[];
};

export class ProfileService {
  /**
   * Retrieves a Profile by internal DB userId.
   */
  static async getProfile(userId: string): Promise<ProfileData | null> {
    const profile = await prisma.profile.findUnique({
      where: { userId },
      include: {
        skills: {
          orderBy: { name: "asc" },
        },
        desiredSkills: {
          orderBy: { name: "asc" },
        },
      },
    });

    if (!profile) return null;
    return this.mapToProfileData(profile);
  }

  /**
   * Retrieves a Profile by Clerk ID.
   */
  static async getProfileByClerkId(clerkId: string): Promise<ProfileData | null> {
    const user = await prisma.user.findUnique({
      where: { clerkId },
      include: {
        profile: {
          include: {
            skills: {
              orderBy: { name: "asc" },
            },
            desiredSkills: {
              orderBy: { name: "asc" },
            },
          },
        },
      },
    });

    if (!user || !user.profile) return null;
    return this.mapToProfileData(user.profile);
  }

  /**
   * Creates a new Profile for the user.
   * Fails with ProfileConflictError if a Profile already exists.
   */
  static async createProfile(
    userId: string,
    input: ProfileCreateInput
  ): Promise<ProfileData> {
    const validated = profileCreateSchema.parse(input);

    const existing = await prisma.profile.findUnique({
      where: { userId },
      select: { id: true },
    });

    if (existing) {
      throw new ProfileConflictError();
    }

    const cleanSkills = deduplicateSkills(validated.skills ?? []);
    const cleanDesiredSkills = deduplicateDesiredSkills(validated.desiredSkills ?? []);

    const created = await prisma.profile.create({
      data: {
        userId,
        name: validated.name,
        age: validated.age,
        country: validated.country,
        phoneNumber: validated.phoneNumber ?? null,
        currentStatus: validated.currentStatus ?? null,
        currentRole: validated.currentRole ?? null,
        yearsOfExperience: validated.yearsOfExperience ?? null,
        highestQualification: validated.highestQualification ?? null,
        fieldOfStudy: validated.fieldOfStudy ?? null,
        primaryGoal: validated.primaryGoal ?? null,
        targetRole: validated.targetRole ?? null,
        targetCompanyType: validated.targetCompanyType ?? null,
        weeklyLearningHours: validated.weeklyLearningHours ?? null,
        skills: {
          create: cleanSkills.map((s) => ({
            name: s.name,
            normalizedName: s.normalizedName,
            proficiency: s.proficiency,
          })),
        },
        desiredSkills: {
          create: cleanDesiredSkills.map((s) => ({
            name: s.name,
            normalizedName: s.normalizedName,
          })),
        },
      },
      include: {
        skills: {
          orderBy: { name: "asc" },
        },
        desiredSkills: {
          orderBy: { name: "asc" },
        },
      },
    });

    return this.mapToProfileData(created);
  }

  /**
   * Updates an existing Profile atomically.
   */
  static async updateProfile(
    userId: string,
    input: ProfileUpdateInput
  ): Promise<ProfileData> {
    const validated = profileUpdateSchema.parse(input);

    const existing = await prisma.profile.findUnique({
      where: { userId },
      include: {
        skills: true,
        desiredSkills: true,
      },
    });

    if (!existing) {
      throw new ProfileNotFoundError();
    }

    const result = await prisma.$transaction(async (tx) => {
      // 1. Update skills if provided
      if (validated.skills !== undefined) {
        await tx.profileSkill.deleteMany({
          where: { profileId: existing.id },
        });

        const cleanSkills = deduplicateSkills(validated.skills);
        if (cleanSkills.length > 0) {
          await tx.profileSkill.createMany({
            data: cleanSkills.map((s) => ({
              profileId: existing.id,
              name: s.name,
              normalizedName: s.normalizedName,
              proficiency: s.proficiency,
            })),
          });
        }
      }

      // 2. Update desired skills if provided
      if (validated.desiredSkills !== undefined) {
        await tx.profileDesiredSkill.deleteMany({
          where: { profileId: existing.id },
        });

        const cleanDesiredSkills = deduplicateDesiredSkills(validated.desiredSkills);
        if (cleanDesiredSkills.length > 0) {
          await tx.profileDesiredSkill.createMany({
            data: cleanDesiredSkills.map((s) => ({
              profileId: existing.id,
              name: s.name,
              normalizedName: s.normalizedName,
            })),
          });
        }
      }

      // 3. Update main profile fields
      const updateData: Prisma.ProfileUpdateInput = {};

      if (validated.name !== undefined) updateData.name = validated.name;
      if (validated.age !== undefined) updateData.age = validated.age;
      if (validated.country !== undefined) updateData.country = validated.country;
      if (validated.phoneNumber !== undefined) updateData.phoneNumber = validated.phoneNumber;
      if (validated.currentStatus !== undefined) updateData.currentStatus = validated.currentStatus;
      if (validated.currentRole !== undefined) updateData.currentRole = validated.currentRole;
      if (validated.yearsOfExperience !== undefined)
        updateData.yearsOfExperience = validated.yearsOfExperience;
      if (validated.highestQualification !== undefined)
        updateData.highestQualification = validated.highestQualification;
      if (validated.fieldOfStudy !== undefined)
        updateData.fieldOfStudy = validated.fieldOfStudy;
      if (validated.primaryGoal !== undefined) updateData.primaryGoal = validated.primaryGoal;
      if (validated.targetRole !== undefined)
        updateData.targetRole = validated.targetRole ?? null;
      if (validated.targetCompanyType !== undefined)
        updateData.targetCompanyType = validated.targetCompanyType;
      if (validated.weeklyLearningHours !== undefined)
        updateData.weeklyLearningHours = validated.weeklyLearningHours;

      const updated = await tx.profile.update({
        where: { id: existing.id },
        data: updateData,
        include: {
          skills: {
            orderBy: { name: "asc" },
          },
          desiredSkills: {
            orderBy: { name: "asc" },
          },
        },
      });

      return updated;
    });

    const mapped = this.mapToProfileData(result);
    return mapped;
  }

  /**
   * Upserts a Profile (Create if missing, update if exists).
   * Supports partial updates on existing, but enforces required fields on create.
   */
  static async upsertProfile(
    userId: string,
    input: Partial<ProfileCreateInput>
  ): Promise<ProfileData> {
    const existing = await prisma.profile.findUnique({
      where: { userId },
      select: { id: true },
    });

    if (existing) {
      return this.updateProfile(userId, input as ProfileUpdateInput);
    }

    // Creating requires mandatory fields. Using profileCreateSchema handles this 
    // because we combined the mandatory and optional schemas.
    const createData = input as ProfileCreateInput;
    return this.createProfile(userId, createData);
  }

  /**
   * Deletes a user profile (primarily for account cleanup).
   */
  static async deleteProfile(userId: string): Promise<void> {
    await prisma.profile.deleteMany({
      where: { userId },
    });
  }

  /**
   * Checks whether any career context data has meaningfully changed.
   */
  private static checkCareerContextChanged(
    existing: ProfileWithRelations,
    input: ProfileUpdateInput
  ): boolean {
    if (input.currentStatus !== undefined && input.currentStatus !== existing.currentStatus)
      return true;
    if (input.currentRole !== undefined && input.currentRole !== existing.currentRole)
      return true;
    if (
      input.yearsOfExperience !== undefined &&
      input.yearsOfExperience !== existing.yearsOfExperience
    )
      return true;
    if (
      input.highestQualification !== undefined &&
      input.highestQualification !== existing.highestQualification
    )
      return true;
    if (input.fieldOfStudy !== undefined && input.fieldOfStudy !== existing.fieldOfStudy)
      return true;
    if (input.primaryGoal !== undefined && input.primaryGoal !== existing.primaryGoal)
      return true;
    if (
      input.targetRole !== undefined &&
      (input.targetRole ?? null) !== existing.targetRole
    )
      return true;
    if (
      input.targetCompanyType !== undefined &&
      input.targetCompanyType !== existing.targetCompanyType
    )
      return true;
    if (
      input.weeklyLearningHours !== undefined &&
      input.weeklyLearningHours !== existing.weeklyLearningHours
    )
      return true;

    // Check skills change
    if (input.skills !== undefined) {
      const cleanSkills = deduplicateSkills(input.skills);
      if (cleanSkills.length !== existing.skills.length) return true;

      const existingSkillMap = new Map(
        existing.skills.map((s) => [s.normalizedName, s.proficiency])
      );
      for (const s of cleanSkills) {
        const existingProficiency = existingSkillMap.get(s.normalizedName);
        if (existingProficiency !== s.proficiency) return true;
      }
    }

    // Check desired skills change
    if (input.desiredSkills !== undefined) {
      const cleanDesired = deduplicateDesiredSkills(input.desiredSkills);
      if (cleanDesired.length !== existing.desiredSkills.length) return true;

      const existingSet = new Set(existing.desiredSkills.map((s) => s.normalizedName));
      for (const s of cleanDesired) {
        if (!existingSet.has(s.normalizedName)) return true;
      }
    }

    return false;
  }

  /**
   * Maps internal Prisma model with relations to the canonical ProfileData DTO.
   */
  private static mapToProfileData(profile: ProfileWithRelations): ProfileData {
    return {
      id: profile.id,
      userId: profile.userId,
      name: profile.name || "",
      age: profile.age || 0,
      country: profile.country || "",
      phoneNumber: profile.phoneNumber || null,
      currentStatus: profile.currentStatus,
      currentRole: profile.currentRole,
      yearsOfExperience: profile.yearsOfExperience,
      education: (profile.highestQualification || profile.fieldOfStudy) ? {
        highestQualification: profile.highestQualification || "",
        fieldOfStudy: profile.fieldOfStudy || "",
      } : null,
      careerGoals: profile.primaryGoal ? {
        primaryGoal: profile.primaryGoal as any,
        targetRole: profile.targetRole,
      } : null,
      skills: profile.skills.map((s) => ({
        id: s.id,
        name: s.name,
        proficiency: s.proficiency,
      })),
      desiredSkills: profile.desiredSkills.map((s) => s.name),
      targetCompanyType: (profile.targetCompanyType as any) || null,
      weeklyLearningHours: profile.weeklyLearningHours,
      profileVersion: 1,
      createdAt: profile.createdAt,
      updatedAt: profile.updatedAt,
    };
  }
}
