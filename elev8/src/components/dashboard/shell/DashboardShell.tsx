import { DashboardSidebar } from "../sidebar/DashboardSidebar";
import { MobileNavigation } from "../mobile-nav/MobileNavigation";
import { DashboardHeader } from "../header/DashboardHeader";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300">
        <DashboardHeader />
        <MobileNavigation />
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
