"use client";

import React from "react";
import { AuthGuard } from "./auth-guard";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  return <AuthGuard>{children}</AuthGuard>;
}
