"use client";

import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { PanelLeft } from "lucide-react";
import { useDashboardStore } from "@/store/dashboard.store";

export function DashboardHeader() {
  const pathname = usePathname();
  const { isSidebarOpen, toggleSidebar } = useDashboardStore();

  const getPageName = () => {
    if (!pathname || pathname === "/dashboard") return "Dashboard";
    const segment = pathname.split("/")[2];
    if (!segment) return "Dashboard";
    return segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
  };

  return (
    <header className="hidden md:flex h-16 border-b border-border bg-[#FFFFFF] dark:bg-[#111111] items-center justify-between px-4 md:px-6 sticky top-0 z-20 shrink-0">
      <div className="flex items-center gap-4 flex-1">
        {!isSidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md bg-primary/10 hover:bg-primary/20 text-primary transition-colors flex items-center justify-center"
            title="Expand Sidebar"
          >
            <PanelLeft className="w-5 h-5" />
          </button>
        )}
        <h1 className="text-lg font-display font-semibold text-foreground hidden sm:block">
          {getPageName()}
        </h1>
      </div>

      <div className="flex items-center gap-3 justify-end">
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-9 w-9 ring-2 ring-border",
              userButtonPopoverCard: "shadow-xl border border-border",
            },
          }}
        />
      </div>
    </header>
  );
}
