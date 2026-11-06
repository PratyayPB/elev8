import { DashboardShell } from "@/components/dashboard";
import { OnboardingProvider, ThemeProvider } from "@/providers";
import { OnboardingModal } from "@/components/modals";
import { DashboardThemeGuard } from "@/components/dashboard/theme-toggle";
import { WorkflowInitiationOverlay } from "@/components/loading";
import { GlobalJobWatcher } from "@/components/dashboard/global-job-watcher";
import { NotificationWatcher } from "@/components/notifications";
import { getOrCreateDbUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NotificationItemData } from "@/features/notifications/types";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let initialNotifications: NotificationItemData[] = [];
  let initialUnreadCount = 0;

  try {
    const dbUser = await getOrCreateDbUser().catch(() => null);
    if (dbUser) {
      const [items, unread] = await Promise.all([
        prisma.notification.findMany({
          where: { userId: dbUser.id },
          orderBy: { createdAt: "desc" },
          take: 50,
        }),
        prisma.notification.count({
          where: { userId: dbUser.id, status: "UNREAD" },
        }),
      ]);
      initialNotifications = items as NotificationItemData[];
      initialUnreadCount = unread;
    }
  } catch (error) {
    console.warn("[DashboardLayout] Could not pre-fetch notifications on server:", error);
  }

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
        <NotificationWatcher
          initialNotifications={initialNotifications}
          initialUnreadCount={initialUnreadCount}
        />
      </OnboardingProvider>
    </ThemeProvider>
  );
}
