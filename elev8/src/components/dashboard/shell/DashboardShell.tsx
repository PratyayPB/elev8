"use client";

import { usePathname } from "next/navigation";
import { DashboardSidebar } from "../sidebar/DashboardSidebar";
import { MobileNavigation } from "../mobile-nav/MobileNavigation";
import { DashboardHeader } from "../header/DashboardHeader";
import { cn } from "@/lib/utils";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isEditor = pathname?.match(/\/resumes\/builder\/([^\/]+)$/);

  return (
    <div className="flex h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-hidden">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300 h-screen overflow-hidden">
        <DashboardHeader />
        <MobileNavigation />
        <main
          className={cn(
            "flex-1 overflow-y-auto",
            !isEditor && "p-4 md:p-6 lg:p-8"
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
