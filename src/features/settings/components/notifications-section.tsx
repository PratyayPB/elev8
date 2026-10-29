"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Bell, Tag, Newspaper } from "lucide-react";

interface NotificationItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  defaultChecked: boolean;
}

const NOTIFICATION_ITEMS: NotificationItem[] = [
  {
    id: "product-updates",
    title: "Product Updates",
    description: "Receive timely announcements about new Elev8 features, AI improvements, and major releases.",
    icon: Bell,
    defaultChecked: true,
  },
  {
    id: "offers-promotions",
    title: "Offers & Promotions",
    description: "Get notified of exclusive discounts, partner offers, and early-access platform promotions.",
    icon: Tag,
    defaultChecked: false,
  },
  {
    id: "newsletter",
    title: "Newsletter",
    description: "Weekly career digests featuring industry hiring trends, resume tips, and interview strategies.",
    icon: Newspaper,
    defaultChecked: true,
  },
];

export function NotificationsSection() {
  const [preferences, setPreferences] = useState<Record<string, boolean>>(() => {
    return NOTIFICATION_ITEMS.reduce((acc, item) => {
      acc[item.id] = item.defaultChecked;
      return acc;
    }, {} as Record<string, boolean>);
  });

  const togglePreference = (id: string) => {
    setPreferences((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Card className="border border-border/80 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-display font-semibold flex items-center gap-2">
          Notifications
        </CardTitle>
        <CardDescription>
          Manage your email notification and newsletter preferences for your active session.
        </CardDescription>
      </CardHeader>
      <CardContent className="divide-y divide-border/60">
        {NOTIFICATION_ITEMS.map((item) => {
          const Icon = item.icon;
          const isChecked = !!preferences[item.id];

          return (
            <div
              key={item.id}
              className="flex items-start justify-between py-4 first:pt-0 last:pb-0 gap-4"
            >
              <div className="flex gap-3">
                <div className="p-2 rounded-lg bg-surface-muted/60 dark:bg-card/60 text-text-secondary h-fit">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <Label
                    htmlFor={`notif-${item.id}`}
                    className="text-sm font-semibold text-text-primary cursor-pointer"
                  >
                    {item.title}
                  </Label>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              <Switch
                id={`notif-${item.id}`}
                checked={isChecked}
                onCheckedChange={() => togglePreference(item.id)}
                aria-label={`Toggle ${item.title}`}
              />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
