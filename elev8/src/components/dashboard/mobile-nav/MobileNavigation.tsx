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
import { ThemeToggle } from "../theme-toggle/ThemeToggle";

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
      <div className="h-16 flex items-center justify-between px-4 border-b border-border bg-card dark:bg-[#111111] sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 -ml-2 text-foreground hover:bg-secondary dark:hover:bg-[#242424] rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Open navigation"
          >
            <Menu className="h-5 w-5" />
          </button>
          <Link href={ROUTES.DASHBOARD} className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
              E
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-foreground">
              Elev8
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle variant="compact" />
          <UserButton
            appearance={{
              elements: {
                avatarBox: "h-8 w-8",
              },
            }}
          />
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 transition-opacity backdrop-blur-sm"
          onClick={closeDrawer}
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 bg-card dark:bg-[#111111] border-r border-border shadow-xl transform transition-transform duration-300 ease-in-out flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
              E
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-foreground">
              Navigation
            </span>
          </div>
          <button
            onClick={closeDrawer}
            className="p-2 -mr-2 text-muted-foreground hover:text-foreground hover:bg-secondary dark:hover:bg-[#242424] rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-display font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  active
                    ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary dark:hover:bg-[#242424]"
                )}
              >
                <Icon
                  className={cn(
                    "h-5 w-5",
                    active ? "text-primary-foreground" : "text-muted-foreground"
                  )}
                />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Secondary & User Section */}
        <div className="p-3 border-t border-border space-y-3 bg-card dark:bg-[#111111]">
          <div className="px-1">
            <ThemeToggle />
          </div>

          <div>
            <Link
              href={ROUTES.SETTINGS}
              onClick={closeDrawer}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-display font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActive(ROUTES.SETTINGS)
                  ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary dark:hover:bg-[#242424]"
              )}
            >
              <Settings
                className={cn(
                  "h-5 w-5",
                  isActive(ROUTES.SETTINGS) ? "text-primary-foreground" : "text-muted-foreground"
                )}
              />
              <span>Settings</span>
            </Link>
          </div>

          <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-secondary/50 dark:bg-[#242424] border border-border/50">
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-8 w-8",
                },
              }}
            />
            <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
              <span className="text-sm font-display font-medium text-foreground truncate">
                {user?.fullName || "User"}
              </span>
              <span className="text-xs font-sans text-muted-foreground truncate">
                {user?.primaryEmailAddress?.emailAddress || ""}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
