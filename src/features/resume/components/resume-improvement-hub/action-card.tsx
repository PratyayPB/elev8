"use client";

import Link from "next/link";
import { LucideIcon, ArrowRight } from "lucide-react";

interface ActionCardProps {
  title: string;
  description: string;
  badge: string;
  icon: LucideIcon;
  href: string;
  ctaText?: string;
  accentBg?: string;
}

export function ActionCard({
  title,
  description,
  badge,
  icon: Icon,
  href,
  ctaText = "Start Now",
  accentBg = "bg-primary/10 border border-primary/20 text-primary",
}: ActionCardProps) {
  return (
    <div className="bg-dashboard-card rounded-3xl border border-dashboard-cardBorder p-6 flex flex-col justify-between space-y-4 hover:shadow-sm transition-all">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className={`w-10 h-10 rounded-2xl ${accentBg} flex items-center justify-center`}>
            <Icon className="w-5 h-5 text-current" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-surface-muted border border-border-subtle text-text-secondary">
            {badge}
          </span>
        </div>
        <h4 className="text-base font-display font-black text-text-primary uppercase tracking-wide">{title}</h4>
        <p className="text-xs text-text-secondary leading-relaxed font-medium">{description}</p>
      </div>

      <Link
        href={href}
        className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-2xl text-xs font-black uppercase tracking-wider text-white bg-text-primary hover:bg-black/85 dark:bg-white dark:text-black dark:hover:bg-neutral-100 transition-colors shadow-sm"
      >
        <span>{ctaText}</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}
