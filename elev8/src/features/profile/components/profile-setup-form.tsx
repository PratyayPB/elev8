"use client";

import { ProfileForm } from "./profile-form";
import { ProfileData } from "../types";

interface ProfileSetupFormProps {
  initialProfile?: ProfileData | null;
  onSuccess?: (profile: ProfileData) => void;
}

export function ProfileSetupForm({ initialProfile, onSuccess }: ProfileSetupFormProps) {
  return <ProfileForm initialProfile={initialProfile} mode="create" onSuccess={onSuccess} />;
}
