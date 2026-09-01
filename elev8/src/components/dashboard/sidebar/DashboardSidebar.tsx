"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DASHBOARD_NAVIGATION } from "@/constants/navigation";
import { ROUTES } from "@/constants/routes";
import {
  LayoutDashboard,
  Map,
  Compass,
  Mic,
  Target,
  FileText,
  TrendingUp,
  User,
  Settings,
  PanelLeftClose,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle/ThemeToggle";
import { useDashboardStore } from "@/store/dashboard.store";

const ICONS: Record<string, React.ElementType> = {
  [ROUTES.DASHBOARD]: LayoutDashboard,
  [ROUTES.ROADMAPS]: Map,
  [ROUTES.INTERVIEWS]: Mic,
  [ROUTES.CAREER_ASSESSMENT]: Target,
  [ROUTES.RESUMES]: FileText,
  [ROUTES.PROGRESS]: TrendingUp,
  [ROUTES.PROFILE]: User,
  [ROUTES.SETTINGS]: Settings,
};

export function DashboardSidebar() {
  const pathname = usePathname();
  const { isSidebarOpen, toggleSidebar } = useDashboardStore();

  const mainNav = DASHBOARD_NAVIGATION.filter(
    (item) => item.href !== ROUTES.SETTINGS
  );

  const isActive = (href: string) => {
    if (href === ROUTES.DASHBOARD) return pathname === ROUTES.DASHBOARD;
    return pathname.startsWith(href);
  };

  return (
    <aside
      className={cn(
        "bg-card dark:bg-[#111111] border-r border-border h-screen flex-col hidden md:flex sticky top-0 shrink-0 select-none transition-all duration-300 ease-in-out overflow-hidden relative",
        isSidebarOpen ? "w-[var(--sidebar-width)]" : "w-0 border-r-0"
      )}
    >
      {/* Collapse Button */}
      <button
        onClick={toggleSidebar}
        className="absolute right-4 top-4 p-1.5 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors z-10"
        title="Collapse Sidebar"
      >
        <PanelLeftClose className="w-5 h-5" />
      </button>

      {/* Brand */}
      <div className="h-16 flex items-center px-6 shrink-0">
        <Link href={ROUTES.DASHBOARD} className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-base shadow-sm group-hover:scale-105 transition-transform">
            E
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-foreground">
            Elev8
          </span>
        </Link>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 overflow-y-auto py-5 px-3 space-y-1 w-[var(--sidebar-width)]">
        {mainNav.map((item) => {
          const Icon = ICONS[item.href] || LayoutDashboard;
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-display font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                active
                  ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/80 dark:hover:bg-[#242424]"
              )}
            >
              <Icon
                className={cn(
                  "h-4 w-4 shrink-0 transition-colors",
                  active ? "text-primary-foreground" : "text-muted-foreground"
                )}
              />
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer Area: Theme Toggle, Settings */}
      <div className="p-3 border-t border-border space-y-3 bg-card dark:bg-[#111111] shrink-0 w-[var(--sidebar-width)]">
        {/* Theme Selector */}
        <div className="px-1">
          <ThemeToggle />
        </div>

        {/* Settings Link */}
        <div>
          <Link
            href={ROUTES.SETTINGS}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-display font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              isActive(ROUTES.SETTINGS)
                ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/80 dark:hover:bg-[#242424]"
            )}
          >
            <Settings
              className={cn(
                "h-4 w-4 shrink-0",
                isActive(ROUTES.SETTINGS) ? "text-primary-foreground" : "text-muted-foreground"
              )}
            />
            <span>Settings</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
