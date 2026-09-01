"use client";

import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { Search, Bell, PanelLeft } from "lucide-react";
import { useDashboardStore } from "@/store/dashboard.store";

export function DashboardHeader() {
  const pathname = usePathname();
  const { isSidebarOpen, toggleSidebar } = useDashboardStore();

  const getPageName = () => {
    if (pathname === "/dashboard") return "Dashboard";
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

      <div className="flex-1 flex justify-center max-w-md hidden md:flex">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-10 pl-10 pr-4 rounded-full bg-secondary/50 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary text-sm font-sans transition-all"
            disabled
          />
        </div>
      </div>

      <div className="flex items-center gap-3 flex-1 justify-end">
        <button className="relative p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full border border-background"></span>
        </button>

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
