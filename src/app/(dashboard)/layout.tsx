import { DashboardShell } from "@/components/dashboard";
import { OnboardingProvider, ThemeProvider } from "@/providers";
import { OnboardingModal } from "@/components/modals";
import { DashboardThemeGuard } from "@/components/dashboard/theme-toggle";
import { WorkflowInitiationOverlay } from "@/components/loading";
import { GlobalJobWatcher } from "@/components/dashboard/global-job-watcher";
import { NotificationWatcher } from "@/components/notifications";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <DashboardThemeGuard />
      <OnboardingProvider>
        <DashboardShell>{children}</DashboardShell>
        <OnboardingModal />
        <WorkflowInitiationOverlay />
        <GlobalJobWatcher />
        <NotificationWatcher />
      </OnboardingProvider>
    </ThemeProvider>
  );
}
