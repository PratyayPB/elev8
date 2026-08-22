"use client";

import { useState } from "react";
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
  Menu,
  X,
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

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { user } = useUser();

  const mainNav = DASHBOARD_NAVIGATION.filter(
    (item) => item.href !== ROUTES.SETTINGS
  );

  const isActive = (href: string) => {
    if (href === ROUTES.DASHBOARD) return pathname === ROUTES.DASHBOARD;
    return pathname.startsWith(href);
  };

  const closeDrawer = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      {/* Top Bar */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-border-subtle bg-dashboard-sidebar sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 -ml-2 text-text-primary hover:bg-surface-muted rounded-lg transition-colors"
            aria-label="Open navigation"
          >
            <Menu className="h-5 w-5" />
          </button>
          <Link href={ROUTES.DASHBOARD} className="font-display font-bold text-lg tracking-tight text-text-primary">
            Elev8
          </Link>
        </div>
        <UserButton
          appearance={{
            elements: {
              avatarBox: "h-8 w-8",
            },
          }}
        />
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity backdrop-blur-sm"
          onClick={closeDrawer}
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 bg-dashboard-sidebar shadow-xl transform transition-transform duration-300 ease-in-out flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-border-subtle">
          <span className="font-display font-bold text-lg tracking-tight text-text-primary">
            Navigation
          </span>
          <button
            onClick={closeDrawer}
            className="p-2 -mr-2 text-text-secondary hover:text-text-primary hover:bg-surface-muted rounded-lg transition-colors"
            aria-label="Close navigation"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {mainNav.map((item) => {
            const Icon = ICONS[item.href] || LayoutDashboard;
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeDrawer}
                className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-display font-medium transition-colors",
                  active
                    ? "bg-dashboard-navActive text-dashboard-navActiveText"
                    : "text-text-secondary hover:text-text-primary hover:bg-surface-muted"
                )}
              >
                <Icon className={cn("h-5 w-5", active ? "text-dashboard-navActiveText" : "text-text-muted")} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Secondary & User Section */}
        <div className="p-3 border-t border-border-subtle">
          <div className="mb-2">
            <Link
              href={ROUTES.SETTINGS}
              onClick={closeDrawer}
              className={cn(
                "flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-display font-medium transition-colors",
                isActive(ROUTES.SETTINGS)
                  ? "bg-dashboard-navActive text-dashboard-navActiveText"
                  : "text-text-secondary hover:text-text-primary hover:bg-surface-muted"
              )}
            >
              <Settings className={cn("h-5 w-5", isActive(ROUTES.SETTINGS) ? "text-dashboard-navActiveText" : "text-text-muted")} />
              Settings
            </Link>
          </div>

          <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-surface-muted/50">
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
      </div>
    </div>
  );
}
