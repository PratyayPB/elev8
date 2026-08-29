import { DashboardSidebar } from "../sidebar/DashboardSidebar";
import { MobileNavigation } from "../mobile-nav/MobileNavigation";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <MobileNavigation />
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
