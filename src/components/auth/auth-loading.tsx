"use client";

import React from "react";
import { ClerkLoading } from "@clerk/nextjs";

export function AuthLoading({ children }: { children: React.ReactNode }) {
  return <ClerkLoading>{children}</ClerkLoading>;
}
