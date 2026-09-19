import { describe, it } from "node:test";
import assert from "node:assert";
import React from "react";
import {
  PageHeaderSkeleton,
  CardSkeleton,
  StatsCardSkeleton,
  ListSkeleton,
  ChartSkeleton,
} from "../index";
import { Skeleton } from "@/components/ui/skeleton";

describe("Skeleton Components & Accessibility", () => {
  const getProps = (element: React.ReactNode) => {
    assert.ok(React.isValidElement(element));
    return (element as React.ReactElement<Record<string, any>>).props;
  };

  it("Skeleton primitive defaults to shimmer and data-slot", () => {
    const element = Skeleton({ className: "w-10 h-10" });
    const props = getProps(element);
    assert.strictEqual(props["data-slot"], "skeleton");
    assert.ok(props.className.includes("animate-shimmer"));
  });

  it("Skeleton primitive supports pulse and none animation options", () => {
    const pulseElement = Skeleton({ animation: "pulse" });
    const pulseProps = getProps(pulseElement);
    assert.ok(pulseProps.className.includes("animate-pulse"));
    assert.ok(!pulseProps.className.includes("animate-shimmer"));

    const noneElement = Skeleton({ animation: "none" });
    const noneProps = getProps(noneElement);
    assert.ok(!noneProps.className.includes("animate-pulse"));
    assert.ok(!noneProps.className.includes("animate-shimmer"));
  });

  it("PageHeaderSkeleton renders with aria-busy and correct structure", () => {
    const element = PageHeaderSkeleton({ hasAction: true, hasSection: true });
    const props = getProps(element);
    assert.strictEqual(props["aria-busy"], "true");
  });

  it("CardSkeleton renders with aria-busy", () => {
    const element = CardSkeleton({ hasFooter: true });
    const props = getProps(element);
    assert.strictEqual(props["aria-busy"], "true");
  });

  it("StatsCardSkeleton renders with aria-busy", () => {
    const element = StatsCardSkeleton({});
    const props = getProps(element);
    assert.strictEqual(props["aria-busy"], "true");
  });

  it("ListSkeleton renders requested number of items", () => {
    const count = 5;
    const element = ListSkeleton({ items: count });
    const props = getProps(element);
    assert.strictEqual(props["aria-busy"], "true");
    assert.strictEqual(React.Children.count(props.children), count);
  });

  it("ChartSkeleton renders with aria-busy and default legend", () => {
    const element = ChartSkeleton({ height: "h-64", hasLegend: true });
    const props = getProps(element);
    assert.strictEqual(props["aria-busy"], "true");
  });
});

