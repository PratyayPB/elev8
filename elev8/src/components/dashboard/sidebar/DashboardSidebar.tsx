"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";
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
} from "lucide-react";
import { cn } from "@/lib/utils";

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
  const { user } = useUser();

  const mainNav = DASHBOARD_NAVIGATION.filter(
    (item) => item.href !== ROUTES.SETTINGS
  );
  
  const isActive = (href: string) => {
    if (href === ROUTES.DASHBOARD) return pathname === ROUTES.DASHBOARD;
    return pathname.startsWith(href);
  };

  return (
    <aside className="w-[var(--sidebar-width)] bg-dashboard-sidebar border-r border-border-subtle h-screen flex-col hidden md:flex sticky top-0 shrink-0">
      {/* Brand */}
      <div className="h-16 flex items-center px-6 border-b border-border-subtle">
        <Link href={ROUTES.DASHBOARD} className="flex items-center gap-2">
          <span className="font-display font-bold text-xl tracking-tight text-text-primary">
            Elev8
          </span>
        </Link>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        {mainNav.map((item) => {
          const Icon = ICONS[item.href] || LayoutDashboard;
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-display font-medium transition-all duration-200",
                active
                  ? "bg-dashboard-navActive text-dashboard-navActiveText shadow-sm"
                  : "text-text-secondary hover:text-text-primary hover:bg-surface-muted"
              )}
            >
              <Icon className={cn("h-4 w-4", active ? "text-dashboard-navActiveText" : "text-text-muted")} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Secondary & User Section */}
      <div className="p-4 border-t border-border-subtle">
        <div className="mb-4">
          <Link
            href={ROUTES.SETTINGS}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-display font-medium transition-all duration-200",
              isActive(ROUTES.SETTINGS)
                ? "bg-dashboard-navActive text-dashboard-navActiveText shadow-sm"
                : "text-text-secondary hover:text-text-primary hover:bg-surface-muted"
            )}
          >
            <Settings className={cn("h-4 w-4", isActive(ROUTES.SETTINGS) ? "text-dashboard-navActiveText" : "text-text-muted")} />
            Settings
          </Link>
        </div>

        <div className="flex items-center gap-3 px-3 py-2">
          <UserButton
            appearance={{
              elements: {
                avatarBox: "h-8 w-8",
              },
            }}
          />
          <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
            <span className="text-sm font-display font-medium text-text-primary truncate">
              {user?.fullName || "User"}
            </span>
            <span className="text-xs font-sans text-text-muted truncate">
              {user?.primaryEmailAddress?.emailAddress || ""}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
