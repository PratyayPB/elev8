import React from "react";

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-center p-4 sm:p-6 md:p-8">
      {children}
    </div>
  );
}
