import { DashboardShell } from "@/components/dashboard";
import { OnboardingProvider } from "@/providers";
import { OnboardingModal } from "@/components/modals";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <OnboardingProvider>
      <DashboardShell>{children}</DashboardShell>
      <OnboardingModal />
    </OnboardingProvider>
  );
}
