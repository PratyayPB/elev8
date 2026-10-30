// @vitest-environment jsdom
import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { AuthGuard } from "../auth-guard";
import { AuthLoading } from "../auth-loading";

let isMockSignedIn = true;

vi.mock("@clerk/nextjs", () => ({
  SignedIn: ({ children }: { children: React.ReactNode }) => {
    return isMockSignedIn ? <div data-testid="clerk-signed-in">{children}</div> : null;
  },
  SignedOut: ({ children }: { children: React.ReactNode }) => {
    return !isMockSignedIn ? <div data-testid="clerk-signed-out">{children}</div> : null;
  },
  RedirectToSignIn: () => <div data-testid="redirect-to-sign-in">Redirecting...</div>,
  ClerkLoading: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="clerk-loading">{children}</div>
  ),
}));

describe("AuthGuard & AuthLoading Components (src/components/auth)", () => {
  describe("AuthGuard", () => {
    it("renders children when user is signed in", () => {
      isMockSignedIn = true;

      render(
        <AuthGuard>
          <div>Protected Dashboard Content</div>
        </AuthGuard>
      );

      expect(screen.getByText("Protected Dashboard Content")).toBeInTheDocument();
      expect(screen.queryByTestId("redirect-to-sign-in")).not.toBeInTheDocument();
    });

    it("renders RedirectToSignIn when user is signed out", () => {
      isMockSignedIn = false;

      render(
        <AuthGuard>
          <div>Protected Dashboard Content</div>
        </AuthGuard>
      );

      expect(screen.queryByText("Protected Dashboard Content")).not.toBeInTheDocument();
      expect(screen.getByTestId("redirect-to-sign-in")).toBeInTheDocument();
    });
  });

  describe("AuthLoading", () => {
    it("renders children inside ClerkLoading wrapper", () => {
      render(
        <AuthLoading>
          <div data-testid="loading-spinner">Loading authentication...</div>
        </AuthLoading>
      );

      expect(screen.getByTestId("clerk-loading")).toBeInTheDocument();
      expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
      expect(screen.getByText("Loading authentication...")).toBeInTheDocument();
    });
  });
});
