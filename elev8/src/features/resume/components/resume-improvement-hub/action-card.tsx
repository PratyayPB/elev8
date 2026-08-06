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
  accentBg = "bg-blue-500",
}: ActionCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 flex flex-col justify-between space-y-4 hover:shadow-md transition-all">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className={`w-10 h-10 rounded-xl ${accentBg} text-white flex items-center justify-center`}>
            <Icon className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
            {badge}
          </span>
        </div>
        <h4 className="text-base font-bold text-gray-900 dark:text-white">{title}</h4>
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{description}</p>
      </div>

      <Link
        href={href}
        className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
      >
        <span>{ctaText}</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}
