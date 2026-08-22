"use client";

import { ProfileForm } from "./profile-form";
import { ProfileData } from "../types";

interface ProfileEditFormProps {
  initialProfile: ProfileData;
  onSuccess?: (profile: ProfileData) => void;
}

export function ProfileEditForm({ initialProfile, onSuccess }: ProfileEditFormProps) {
  return <ProfileForm initialProfile={initialProfile} mode="edit" onSuccess={onSuccess} />;
}
