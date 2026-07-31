# UI Context & Design System (Grovia / Native Reference)

This document defines the visual identity, design tokens, typography, component patterns, and layout conventions for Elev8, inspired by the high-craft **Grovia** SaaS template design system (`brilliant-experiences-114165.framer.app`) combined with native modern UI standards.

---

## 1. Aesthetic Identity & Theme

The UI features a clean, high-contrast, premium aesthetic that balances ultra-modern typography with refined layout grids, subtle borders, tactile card elevations, and dynamic accent pops.

It supports dual visual modes:

- **Light Theme (Grovia Primary)**: Warm neutral, clean light mode (`#F4F2EE` canvas, `#FFFFFF` surface cards, high-contrast black typography `#000000`).
- **Dark Theme (Ambient Dark Mode)**: Deep midnight/black backgrounds (`#040508` to `#0C0F16`), soft ambient glowing blurreddivs (`#5B698B`, `#293249`), and glowing borders.

---

## 2. Color Palette & Design Tokens

### Light Theme Tokens (Grovia Palette)

| Role                   | Token / Utility       | Hex / Value             | Description                                              |
| ---------------------- | --------------------- | ----------------------- | -------------------------------------------------------- |
| Page Canvas Background | `--background-canvas` | `#F4F2EE` / `#F0ECE6`   | Warm off-white / light cream page background             |
| Surface Primary        | `--surface-primary`   | `#FFFFFF`               | Pure white background for elevated cards & modules       |
| Surface Muted          | `--surface-muted`     | `#FAFAFA` / `#EDE9E6`   | Muted background for inner section callouts & inputs     |
| Text Primary           | `--text-primary`      | `#000000` / `#1A1A1A`   | Crisp black text for primary headings and body           |
| Text Secondary         | `--text-secondary`    | `#605F5F` / `#737373`   | Soft dark gray for subtitles and metadata                |
| Text Muted             | `--text-muted`        | `#999999` / `#AEAEAE`   | Muted gray for inactive tabs, placeholders, and captions |
| Border Subtly          | `--border-subtle`     | `#E6E6E6` / `#DADADA`   | Crisp 1px borders for cards and divider lines            |
| Border Dark / Active   | `--border-strong`     | `#0000001A` / `#1A1A1A` | Darker border accent for focused or active items         |

### Vibrant Accent Pops (Grovia Highlights)

| Accent Role         | Utility        | Hex Code  | Usage                                                   |
| ------------------- | -------------- | --------- | ------------------------------------------------------- |
| Soft Cyan Accent    | `bg-[#84E6F6]` | `#84E6F6` | Feature callout badges, primary highlights, status tags |
| Coral / Pink Accent | `bg-[#F7A49E]` | `#F7A49E` | Secondary callouts, alerts, category pills              |
| Gold / Warm Yellow  | `bg-[#FECD1A]` | `#FECD1A` | Star ratings, highlight tags, key metrics               |
| Pale Cream Yellow   | `bg-[#FEF7AF]` | `#FEF7AF` | Highlighted text background, soft warning callout       |
| Crimson Red Accent  | `bg-[#E83043]` | `#E83043` | Urgent action buttons, negative indicators              |

### Dark Theme Tokens (Native Dark Mode)

| Role            | Utility           | Value                     | Description                                    |
| --------------- | ----------------- | ------------------------- | ---------------------------------------------- |
| Page Background | Linear Gradients  | `from-black to-[#0C0F16]` | Deep black and midnight gradient               |
| Text Colors     | Solid & Gradients | `#D0D2D8`, `#C5CDE3`      | Silver and soft blue-gray typography           |
| Ambient Glows   | Blurred Divs      | `#5B698B`, `#293249`      | `opacity-40` to `80`, `blur-[80px]` to `100px` |
| Accent Borders  | Borders & Glows   | `#8096D2`, `#333B4F`      | Elevated glowing borders                       |

---

## 3. Typography & Hierarchy

### Font Families

1. **Primary Headline & UI**: **Geist** (`font-sans`) and **Albert Sans** for clean, modern geometric structure.
2. **Body & Interface**: **Inter** / **Geist** (`font-sans` with `-0.03em` letter spacing for headlines).
3. **Monospace & Badges**: **Fragment Mono** (`font-mono`) for code snippets, metrics, and technical labels.

### Typography Scale & Utility Rules

- **Display Headings**: `text-4xl` to `text-6xl`, `font-bold` or `font-semibold`, `tracking-tight` (`-0.03em`), `line-height: 1.1`.
- **Section Headings**: `text-2xl` to `text-3xl`, `font-semibold`, crisp black or white text.
- **Body Text**: `text-base` to `text-lg`, `font-normal`, `leading-relaxed` (`1.5em`), muted gray color (`#605F5F` in light mode, `#C5CDE3` in dark mode).
- **Badge / Pill Text**: `text-xs` or `text-sm`, `font-medium`, uppercase/capitalized with pill padding (`px-3 py-1`).

---

## 4. Component Layout & Structural Conventions

### Header & Navigation

- **Floating Pill Nav Bar**: Centered floating navigation container (`top: 24px`, `max-width: 900px`, `backdrop-blur-md`, `bg-white/80` or `bg-black/80` dark mode).
- **Rounded Capsule Border**: `rounded-full`, 1px border (`#E6E6E6` or `#ffffff1a`), subtle drop shadow (`shadow-sm`).
- **Pill Nav Links**: Interactive hover states with smooth transition, subtle background fill on active item.

### Bento Grid & Cards

- **Card Containers**: `rounded-2xl` (`16px` to `24px` radius), 1px solid border (`#E6E6E6`), crisp padding (`p-6` to `p-8`).
- **Elevated Surfaces**: White background (`bg-white`) on warm off-white canvas (`#F4F2EE`), soft shadow on hover (`hover:shadow-md transition-all duration-300`).
- **Interactive Badges**: Corner tags or inline pill badges featuring pastels (`#84E6F6`, `#F7A49E`, `#FEF7AF`).

### Buttons & Interactive Controls

- **Primary CTA Button**: High contrast solid button (`bg-black text-white hover:bg-black/90` or dark mode `bg-white text-black hover:bg-white/90`), `rounded-full` or `rounded-xl`, `px-6 py-3`, `font-medium`, `transition-all`.
- **Secondary / Outline Button**: 1px border button (`border-[#E6E6E6] text-black bg-white hover:bg-neutral-50`), `rounded-full` or `rounded-xl`.
- **Pill Toggles & Swaps**: Rounded container (`bg-[#EDE9E6]` or `bg-neutral-800`), sliding pill indicator for switching states (e.g. Monthly vs Annual pricing, or Assessment vs Guidance views).

### Section Layouts & Breakpoints

- **Max Container Width**: `max-w-6xl` (`1150px` to `1200px`) centered with `mx-auto px-4 sm:px-6`.
- **Breakpoints**:
  - `desktop`: `min-width: 1200px`
  - `tablet`: `810px - 1199px`
  - `mobile`: `< 810px`

---

## 5. Micro-Animations & Interactivity

- **Framer Motion (`motion`)**: Entrance fades, staggered element reveals (`staggerChildren: 0.1`), smooth scale/hover lift on cards (`whileHover={{ y: -4 }}`).
- **Smooth Cursor & Hover States**: Micro-interactions on buttons, links, and card borders.
- **Icons**: Primary library **Lucide React** (`Gauge`, `Globe`, `Mail`, `WandSparkles`, `Check`, `ArrowRight`, `Sparkles`), rendered crisp with 1.5px stroke width.

---

## 6. Guidelines for AI Implementation

When generating UI components for Elev8:

1. **Never use plain unstyled elements**: Always wrap content in polished containers with proper spacing, typography, and borders.
2. **Consistently apply color tokens**: Use the warm neutral palette (`#F4F2EE`, `#FFFFFF`, `#1A1A1A`) for light themes or sleek dark mode gradients (`from-black to-[#0C0F16]`) for dark themes.
3. **Use Pill Badges & High-Contrast Typography**: Pair thin/medium body text with strong headlines (`-0.03em` letter spacing) and vibrant accent pills (`#84E6F6`, `#F7A49E`, `#FECD1A`).
4. **Enforce Clean Elevation & Borders**: Apply `border border-[#E6E6E6]` (or `dark:border-neutral-800`) and `rounded-2xl` to cards and dashboard panels.
