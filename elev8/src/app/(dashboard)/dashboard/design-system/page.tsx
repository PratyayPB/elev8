"use client";

import * as React from "react";
import {
  Button,
  Badge,
  Input,
  Textarea,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Switch,
  Checkbox,
  RadioGroup,
  RadioGroupItem,
  Label,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
  Alert,
  AlertTitle,
  AlertDescription,
  Skeleton,
  Separator,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui";
import { MetricCard, PageHeader, SectionHeader, ThemeToggle } from "@/components/dashboard";
import {
  Sparkles,
  Info,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  Layers,
  Palette,
  Type,
  LayoutGrid,
} from "lucide-react";

export default function DesignSystemPage() {
  return (
    <TooltipProvider>
      <div className="max-w-6xl mx-auto space-y-12 pb-16">
        {/* Header */}
        <PageHeader
          section="Design System"
          title="Elev8 Dashboard Design System"
          description="Design tokens, brand color scales (50-950), semantic variable mappings, and shadcn/ui components in both light and dark themes."
          action={<ThemeToggle variant="inline" className="w-56" />}
        />

        <Separator />

        {/* 1. Brand Color Scales */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Palette className="h-5 w-5 text-accent" />
            <h2 className="text-2xl font-display font-bold text-foreground">
              1. Brand Tonal Scales (50–950)
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Full tonal scales generated from brand anchors: Primary (<code>#171816</code>), Secondary (<code>#FCFBFA</code>), and Accent (<code>#FFDB00</code>).
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Primary Scale */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center justify-between">
                  <span>Primary (Charcoal)</span>
                  <code className="text-xs text-muted-foreground">#171816</code>
                </CardTitle>
                <CardDescription>Base for high-emphasis dark-mode surfaces and light-mode text</CardDescription>
              </CardHeader>
              <CardContent className="space-y-1.5">
                {[
                  { step: "50", hex: "#f5f5f4", bg: "bg-brand-primary-50", text: "text-brand-primary-900" },
                  { step: "100", hex: "#e7e7e5", bg: "bg-brand-primary-100", text: "text-brand-primary-900" },
                  { step: "200", hex: "#d0d0cc", bg: "bg-brand-primary-200", text: "text-brand-primary-900" },
                  { step: "300", hex: "#afafa9", bg: "bg-brand-primary-300", text: "text-brand-primary-900" },
                  { step: "400", hex: "#82827b", bg: "bg-brand-primary-400", text: "text-white" },
                  { step: "500", hex: "#5f5f59", bg: "bg-brand-primary-500", text: "text-white" },
                  { step: "600", hex: "#44443f", bg: "bg-brand-primary-600", text: "text-white" },
                  { step: "700", hex: "#2e2f2b", bg: "bg-brand-primary-700", text: "text-white" },
                  { step: "800", hex: "#21221f", bg: "bg-brand-primary-800", text: "text-white" },
                  { step: "900 (Base)", hex: "#171816", bg: "bg-brand-primary-900", text: "text-white" },
                  { step: "950", hex: "#0d0e0c", bg: "bg-brand-primary-950", text: "text-white" },
                ].map((shade) => (
                  <div
                    key={shade.step}
                    className={`flex items-center justify-between px-3 py-1.5 rounded-md text-xs font-mono font-medium ${shade.bg} ${shade.text}`}
                  >
                    <span>{shade.step}</span>
                    <span>{shade.hex}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Secondary Scale */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center justify-between">
                  <span>Secondary (Warm Cream)</span>
                  <code className="text-xs text-muted-foreground">#FCFBFA</code>
                </CardTitle>
                <CardDescription>Base for light surfaces, cards, borders, and dark-mode text</CardDescription>
              </CardHeader>
              <CardContent className="space-y-1.5">
                {[
                  { step: "50 (Base)", hex: "#fcfbfa", bg: "bg-brand-secondary-50", text: "text-brand-primary-900" },
                  { step: "100", hex: "#f8f6f3", bg: "bg-brand-secondary-100", text: "text-brand-primary-900" },
                  { step: "200", hex: "#f2eee9", bg: "bg-brand-secondary-200", text: "text-brand-primary-900" },
                  { step: "300", hex: "#e8e2d9", bg: "bg-brand-secondary-300", text: "text-brand-primary-900" },
                  { step: "400", hex: "#dbd2c5", bg: "bg-brand-secondary-400", text: "text-brand-primary-900" },
                  { step: "500", hex: "#c9bcab", bg: "bg-brand-secondary-500", text: "text-brand-primary-900" },
                  { step: "600", hex: "#b3a28e", bg: "bg-brand-secondary-600", text: "text-white" },
                  { step: "700", hex: "#978470", bg: "bg-brand-secondary-700", text: "text-white" },
                  { step: "800", hex: "#7a6a58", bg: "bg-brand-secondary-800", text: "text-white" },
                  { step: "900", hex: "#5c4f41", bg: "bg-brand-secondary-900", text: "text-white" },
                  { step: "950", hex: "#3d342b", bg: "bg-brand-secondary-950", text: "text-white" },
                ].map((shade) => (
                  <div
                    key={shade.step}
                    className={`flex items-center justify-between px-3 py-1.5 rounded-md text-xs font-mono font-medium ${shade.bg} ${shade.text}`}
                  >
                    <span>{shade.step}</span>
                    <span>{shade.hex}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Accent Scale */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center justify-between">
                  <span>Accent (Yellow)</span>
                  <code className="text-xs text-muted-foreground">#FFDB00</code>
                </CardTitle>
                <CardDescription>Reserved for active states, focus rings, highlights, and CTAs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-1.5">
                {[
                  { step: "50", hex: "#fffdeb", bg: "bg-brand-accent-50", text: "text-brand-primary-900" },
                  { step: "100", hex: "#fff9c7", bg: "bg-brand-accent-100", text: "text-brand-primary-900" },
                  { step: "200", hex: "#fff38a", bg: "bg-brand-accent-200", text: "text-brand-primary-900" },
                  { step: "300", hex: "#ffe94d", bg: "bg-brand-accent-300", text: "text-brand-primary-900" },
                  { step: "400 (Base)", hex: "#ffdb00", bg: "bg-brand-accent-400", text: "text-brand-primary-900 font-bold" },
                  { step: "500", hex: "#e6c500", bg: "bg-brand-accent-500", text: "text-brand-primary-900 font-bold" },
                  { step: "600", hex: "#b89e00", bg: "bg-brand-accent-600", text: "text-white" },
                  { step: "700", hex: "#8a7600", bg: "bg-brand-accent-700", text: "text-white" },
                  { step: "800", hex: "#5c4f00", bg: "bg-brand-accent-800", text: "text-white" },
                  { step: "900", hex: "#332c00", bg: "bg-brand-accent-900", text: "text-white" },
                  { step: "950", hex: "#1a1600", bg: "bg-brand-accent-950", text: "text-white" },
                ].map((shade) => (
                  <div
                    key={shade.step}
                    className={`flex items-center justify-between px-3 py-1.5 rounded-md text-xs font-mono font-medium ${shade.bg} ${shade.text}`}
                  >
                    <span>{shade.step}</span>
                    <span>{shade.hex}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* 2. Semantic Tokens */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-accent" />
            <h2 className="text-2xl font-display font-bold text-foreground">
              2. Semantic Token Swatches
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Components reference semantic variables that adapt automatically to Light and Dark modes.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              { name: "Background", cls: "bg-background text-foreground border border-border" },
              { name: "Foreground", cls: "bg-foreground text-background" },
              { name: "Card", cls: "bg-card text-card-foreground border border-border" },
              { name: "Primary", cls: "bg-primary text-primary-foreground" },
              { name: "Secondary", cls: "bg-secondary text-secondary-foreground border border-border/50" },
              { name: "Muted", cls: "bg-muted text-muted-foreground" },
              { name: "Accent", cls: "bg-accent text-accent-foreground font-semibold" },
              { name: "Destructive", cls: "bg-destructive text-destructive-foreground" },
              { name: "Border", cls: "bg-border text-foreground" },
              { name: "Ring", cls: "bg-ring text-accent-foreground font-semibold" },
              { name: "Success", cls: "bg-green-500/15 text-green-700 dark:text-green-400 border border-green-500/20" },
              { name: "Warning", cls: "bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/20" },
            ].map((token) => (
              <div
                key={token.name}
                className={`flex flex-col items-center justify-center p-4 rounded-xl text-center text-xs shadow-sm min-h-[90px] ${token.cls}`}
              >
                <span className="font-semibold text-sm">{token.name}</span>
                <span className="opacity-75 text-[11px] mt-1 font-mono">var(--{token.name.toLowerCase()})</span>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* 3. Typography */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Type className="h-5 w-5 text-accent" />
            <h2 className="text-2xl font-display font-bold text-foreground">
              3. Typography
            </h2>
          </div>

          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono text-muted-foreground">Heading 1 — 36px / Bold / Albert Sans</span>
                <h1 className="text-4xl font-display font-bold text-foreground tracking-tight">
                  Accelerate Your Career Trajectory
                </h1>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-muted-foreground">Heading 2 — 30px / Bold / Albert Sans</span>
                <h2 className="text-3xl font-display font-bold text-foreground tracking-tight">
                  Intelligent Skill Gap & Roadmap Processing
                </h2>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-muted-foreground">Heading 3 — 24px / SemiBold / Albert Sans</span>
                <h3 className="text-2xl font-display font-semibold text-foreground tracking-tight">
                  Mock Interview Evaluation & Scoring
                </h3>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-muted-foreground">Body Text — 16px / Regular / Geist Sans</span>
                <p className="text-base text-foreground leading-relaxed">
                  Elev8 transforms your career context into structured, actionable insights. From ATS-optimized resume builder to real-time speech interview sessions, our platform powers every step of your professional growth.
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-muted-foreground">Muted / Secondary Text — 14px / Geist Sans</span>
                <p className="text-sm text-muted-foreground">
                  Updated 2 hours ago • All AI feedback runs through verified deterministic rubric scoring models.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* 4. Interactive Components Showcase */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <LayoutGrid className="h-5 w-5 text-accent" />
            <h2 className="text-2xl font-display font-bold text-foreground">
              4. Core Component Coverage (shadcn/ui New York)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Buttons */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Buttons & Actions</CardTitle>
                <CardDescription>Primary, Accent, Secondary, Outline, Ghost, and Destructive</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button variant="accent">
                    <Sparkles className="h-4 w-4 mr-1.5" />
                    Accent CTA
                  </Button>
                  <Button variant="default">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Button size="sm" variant="accent">Small</Button>
                  <Button size="default" variant="accent">Default</Button>
                  <Button size="lg" variant="accent">Large</Button>
                </div>
              </CardContent>
            </Card>

            {/* Badges & Status */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Badges & Status Tags</CardTitle>
                <CardDescription>Semantic state tags and accent highlights</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 pt-2">
                <Badge variant="accent">ACCENT</Badge>
                <Badge variant="default">PRIMARY</Badge>
                <Badge variant="secondary">SECONDARY</Badge>
                <Badge variant="outline">OUTLINE</Badge>
                <Badge variant="success">COMPLETE</Badge>
                <Badge variant="warning">IN PROGRESS</Badge>
                <Badge variant="info">INFO</Badge>
                <Badge variant="destructive">FAILED</Badge>
              </CardContent>
            </Card>

            {/* Form Controls */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Form Controls</CardTitle>
                <CardDescription>Inputs, selects, textareas, and switches</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="demo-input">Role Title</Label>
                  <Input id="demo-input" placeholder="e.g. Senior Frontend Engineer" />
                </div>

                <div className="space-y-1.5">
                  <Label>Experience Level</Label>
                  <Select defaultValue="mid">
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entry">Entry Level (0-2 yrs)</SelectItem>
                      <SelectItem value="mid">Mid Level (3-5 yrs)</SelectItem>
                      <SelectItem value="senior">Senior (6+ yrs)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="space-y-0.5">
                    <Label htmlFor="ai-toggle">AI Deep Personalization</Label>
                    <p className="text-xs text-muted-foreground">Tailor prompts to target role requirements</p>
                  </div>
                  <Switch id="ai-toggle" defaultChecked />
                </div>
              </CardContent>
            </Card>

            {/* Feedback & Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Feedback & Alerts</CardTitle>
                <CardDescription>Contextual banners and inline alerts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Alert variant="accent">
                  <Sparkles className="h-4 w-4" />
                  <AlertTitle>Assessment Ready</AlertTitle>
                  <AlertDescription>
                    Your skill gap profile has updated. Review recommendations now.
                  </AlertDescription>
                </Alert>

                <Alert variant="info">
                  <Info className="h-4 w-4" />
                  <AlertTitle>Profile Sync</AlertTitle>
                  <AlertDescription>
                    Your resume artifact has synced with your active career profile.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>

          {/* Metric Cards KPI Display */}
          <div className="space-y-4 pt-4">
            <SectionHeader title="KPI & Data Displays" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <MetricCard
                label="Readiness Score"
                value="88%"
                trend="+6% this month"
                trendDirection="up"
                highlighted
              />
              <MetricCard
                label="Resumes Scored"
                value="14"
                trend="+2 new scans"
                trendDirection="up"
              />
              <MetricCard
                label="Mock Interviews"
                value="8"
                trend="Avg score 82/100"
                trendDirection="neutral"
              />
              <MetricCard
                label="Active Roadmaps"
                value="3"
                trend="Phase 2 in progress"
                trendDirection="neutral"
              />
            </div>
          </div>

          {/* Data Table */}
          <div className="space-y-4 pt-4">
            <SectionHeader title="Data Table" />
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Module / Activity</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Score / Metric</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">System Design Mock Interview</TableCell>
                    <TableCell><Badge variant="success">Completed</Badge></TableCell>
                    <TableCell>86 / 100</TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" variant="ghost">View Report</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Full Stack Resume ATS Scan</TableCell>
                    <TableCell><Badge variant="success">Completed</Badge></TableCell>
                    <TableCell>92 / 100</TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" variant="ghost">View Report</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Distributed Systems Learning Path</TableCell>
                    <TableCell><Badge variant="warning">In Progress</Badge></TableCell>
                    <TableCell>Phase 3 of 5</TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" variant="ghost">Continue</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </div>
        </section>
      </div>
    </TooltipProvider>
  );
}
