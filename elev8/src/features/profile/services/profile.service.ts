import { prisma } from "@/lib/prisma";
import { UserProfileData, OnboardingStatus, CategorizedSkills } from "../types";
import { calculateProfileCompletion } from "../utils";
import { Prisma, UserProfile } from "@prisma/client";

export class ProfileService {
  static async getProfile(clerkId: string): Promise<UserProfileData | null> {
    const user = await prisma.user.findUnique({
      where: { clerkId },
      include: { profile: true },
    });
    if (!user || !user.profile) return null;
    return this.mapProfile(user.profile, user.email, clerkId);
  }

  static async getOrCreateProfile(
    clerkId: string,
    email?: string | null,
    fullName?: string | null,
    profilePicture?: string | null
  ): Promise<UserProfileData> {
    let user = await prisma.user.findUnique({
      where: { clerkId },
      include: { profile: true },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          clerkId,
          email: email ?? null,
          profile: {
            create: {
              email: email ?? null,
              fullName: fullName ?? null,
              profilePicture: profilePicture ?? null,
              onboardingStatus: "NOT_STARTED",
              onboardingStep: 0,
              profileCompletion: 0,
              careerInterests: [],
              careerGoals: [],
            },
          },
        },
        include: { profile: true },
      });
    } else if (!user.profile) {
      const newProfile = await prisma.userProfile.create({
        data: {
          userId: user.id,
          email: email ?? user.email ?? null,
          fullName: fullName ?? null,
          profilePicture: profilePicture ?? null,
          onboardingStatus: "NOT_STARTED",
          onboardingStep: 0,
          profileCompletion: 0,
          careerInterests: [],
          careerGoals: [],
        },
      });
      user.profile = newProfile;
    }

    if (user.profile) {
      const completion = calculateProfileCompletion(
        this.mapProfile(user.profile, user.email, clerkId)
      );
      if (user.profile.profileCompletion !== completion) {
        user.profile = await prisma.userProfile.update({
          where: { id: user.profile.id },
          data: { profileCompletion: completion },
        });
      }
    }

    return this.mapProfile(user.profile!, user.email, clerkId);
  }

  static async updateProfile(
    clerkId: string,
    data: Partial<UserProfileData>
  ): Promise<UserProfileData> {
    const existing = await this.getOrCreateProfile(clerkId);

    const updateData: Prisma.UserProfileUpdateInput = {};

    if (data.fullName !== undefined) updateData.fullName = data.fullName;
    if (data.email !== undefined) updateData.email = data.email;
    if (data.profilePicture !== undefined) updateData.profilePicture = data.profilePicture;
    if (data.country !== undefined) updateData.country = data.country;
    if (data.timezone !== undefined) updateData.timezone = data.timezone;
    if (data.currentStatus !== undefined) updateData.currentStatus = data.currentStatus || null;
    if (data.degree !== undefined) updateData.degree = data.degree;
    if (data.major !== undefined) updateData.major = data.major;
    if (data.institution !== undefined) updateData.institution = data.institution;
    if (data.graduationYear !== undefined) updateData.graduationYear = data.graduationYear;
    if (data.currentRole !== undefined) updateData.currentRole = data.currentRole;
    if (data.yearsOfExperience !== undefined) updateData.yearsOfExperience = data.yearsOfExperience;
    if (data.industry !== undefined) updateData.industry = data.industry;
    if (data.employmentStatus !== undefined) updateData.employmentStatus = data.employmentStatus;
    if (data.careerInterests !== undefined) updateData.careerInterests = data.careerInterests;
    if (data.skills !== undefined) updateData.skills = data.skills as unknown as Prisma.InputJsonValue;
    if (data.careerGoals !== undefined) updateData.careerGoals = data.careerGoals;
    if (data.learningStyle !== undefined) updateData.learningStyle = data.learningStyle;
    if (data.difficulty !== undefined) updateData.difficulty = data.difficulty;
    if (data.weeklyHours !== undefined) updateData.weeklyHours = data.weeklyHours;
    if (data.onboardingStatus !== undefined) updateData.onboardingStatus = data.onboardingStatus;
    if (data.onboardingStep !== undefined) updateData.onboardingStep = data.onboardingStep;

    const mergedForCalc = { ...existing, ...data };
    const completion = calculateProfileCompletion(mergedForCalc);
    updateData.profileCompletion = completion;

    const user = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const updated = await prisma.userProfile.update({
      where: { userId: user.id },
      data: updateData,
    });

    return this.mapProfile(updated, user.email, clerkId);
  }

  static async setOnboardingStatus(
    clerkId: string,
    status: OnboardingStatus,
    step?: number
  ): Promise<UserProfileData> {
    const user = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const updateData: Prisma.UserProfileUpdateInput = { onboardingStatus: status };
    if (step !== undefined) {
      updateData.onboardingStep = step;
    }
    const updated = await prisma.userProfile.update({
      where: { userId: user.id },
      data: updateData,
    });
    return this.mapProfile(updated, user.email, clerkId);
  }

  static async deleteProfile(clerkId: string): Promise<void> {
    await prisma.user.deleteMany({
      where: { clerkId },
    });
  }

  private static mapProfile(
    raw: UserProfile,
    userEmail?: string | null,
    clerkId?: string
  ): UserProfileData {
    return {
      id: raw.id,
      clerkId: clerkId || "",
      fullName: raw.fullName,
      profilePicture: raw.profilePicture,
      email: raw.email || userEmail || null,
      country: raw.country,
      timezone: raw.timezone,
      currentStatus: raw.currentStatus,
      degree: raw.degree,
      major: raw.major,
      institution: raw.institution,
      graduationYear: raw.graduationYear,
      currentRole: raw.currentRole,
      yearsOfExperience: raw.yearsOfExperience,
      industry: raw.industry,
      employmentStatus: raw.employmentStatus,
      careerInterests: raw.careerInterests || [],
      skills: (raw.skills as unknown as CategorizedSkills) || {
        languages: [],
        frameworks: [],
        databases: [],
        cloud: [],
        tools: [],
        softSkills: [],
      },
      careerGoals: raw.careerGoals || [],
      learningStyle: raw.learningStyle,
      difficulty: raw.difficulty,
      weeklyHours: raw.weeklyHours,
      onboardingStatus: raw.onboardingStatus,
      onboardingStep: raw.onboardingStep,
      profileCompletion: raw.profileCompletion,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    };
  }
}
