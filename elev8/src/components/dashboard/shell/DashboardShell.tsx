import { DashboardSidebar } from "../sidebar/DashboardSidebar";
import { MobileNavigation } from "../mobile-nav/MobileNavigation";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <MobileNavigation />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
