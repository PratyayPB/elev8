"use client";

import React from "react";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
