# Dashboard Design System

## 1. Scope

This design system applies **only** to routes under `/dashboard` and all of its
children/nested routes (e.g. `/dashboard/settings`, `/dashboard/billing/[id]`, etc.).

**Do NOT apply this design system to:**
- `/` (landing/home page)
- `/not-found`
- Sign-in page
- Sign-up page

These excluded routes should keep their own separate styling and must not import
or inherit tokens/components built for the dashboard.

---

## 2. Setup — shadcn/ui

1. Install shadcn/ui agent skill and set it up in this project so it can be used
   for context, correct component APIs, and accurate code generation. Reference the
   skill before generating any shadcn component code to avoid hallucinated props/variants.
2. Use shadcn/ui as the base component library for the dashboard. Only build custom
   components when no suitable shadcn block/component exists.
3. Prefer shadcn **blocks** (pre-composed layouts: sidebar, dashboard shell, data
   tables, forms, auth-adjacent cards, etc.) over building layouts from scratch.

---

## 3. Brand Colors

| Role      | Hex       |
|-----------|-----------|
| Primary   | `#171816` |
| Secondary | `#FCFBFA` |
| Accent    | `#FFDB00` |

### 3.1 Shade Generation Rule

Generate a full tonal scale (e.g. 50–950) for each brand color so they can be used
appropriately across backgrounds, borders, hover/active states, disabled states,
and text-on-color contexts. Do not use only the single flat hex value everywhere.

- **Primary** (`#171816`) — near-black/charcoal. Use its lighter tints for subtle
  dark-mode surfaces, and darker shades for high-emphasis text/icons/buttons in
  light mode.
- **Secondary** (`#FCFBFA`) — near-white/off-white. Use its darker tints for
  light-mode surfaces (cards, panels, muted backgrounds) and its lightest tints
  for base backgrounds.
- **Accent** (`#FFDB00`) — yellow. Reserve for primary actions, active states,
  focus rings, key highlights, badges, and data-viz emphasis. Never use as a
  large background fill (accessibility/eye-strain) — use tinted/muted variants
  for accent backgrounds instead, with the full-strength accent for the
  interactive element itself (button, active tab indicator, etc.).

### 3.2 Semantic Token Mapping

Define semantic tokens (as CSS variables) that map to the shades above, so
components reference semantics — not raw hex values:

- `--background`, `--foreground`
- `--card`, `--card-foreground`
- `--popover`, `--popover-foreground`
- `--primary`, `--primary-foreground`
- `--secondary`, `--secondary-foreground`
- `--muted`, `--muted-foreground`
- `--accent`, `--accent-foreground`
- `--border`, `--input`, `--ring`
- `--destructive`, `--destructive-foreground` (use a standard red — not derived
  from brand palette — for error/danger states)
- `--success`, `--warning`, `--info` (standard semantic colors, kept subtle so
  they don't clash with the brand accent)

---

## 4. Light / Dark Mode

- Implement using **class-based** theming (e.g. `.dark` class on `<html>` or a
  root wrapper), compatible with shadcn/ui + Tailwind `darkMode: "class"` config.
- All dashboard components must read colors from the semantic CSS variables
  above, never hardcoded hex values, so both themes work automatically.
- **Light mode:** Secondary shades as base background/surfaces, Primary shades
  for text/icons, Accent for CTAs and highlights.
- **Dark mode:** Primary shades as base background/surfaces, lighter
  Secondary/near-white shades for text, Accent for CTAs and highlights (slightly
  desaturated/dimmed accent variant if needed to avoid glare on dark surfaces).
- Respect user's system preference by default (`prefers-color-scheme`), with a
  manual toggle stored in local/user settings that overrides it.

---

## 5. Performance Requirements

- Design must stay **lightweight and fast**:
  - Prefer CSS variables + Tailwind utility classes over heavy runtime CSS-in-JS.
  - Avoid unnecessary box-shadows, blurs, gradients, or animations on
    frequently-rendered dashboard elements (tables, lists).
  - Lazy-load/code-split heavy shadcn blocks (charts, complex data tables) not
    needed on initial dashboard paint.
  - Use system font stack or a single self-hosted variable font — avoid loading
    multiple font weights/families.
  - Keep icon usage to one consistent icon set (e.g. `lucide-react`, shadcn's
    default) to avoid bundling multiple icon libraries.

---

## 6. Component Coverage (SaaS Dashboard Suitability)

Build/configure the following using shadcn/ui components & blocks, styled with
the tokens above, for both light and dark mode:

- **Shell:** Sidebar navigation (collapsible), top navbar, breadcrumb
- **Data display:** Data table (sortable/filterable/paginated), cards, stat/KPI
  cards, badges, avatars, tooltips
- **Forms:** Input, select, checkbox, radio, switch, textarea, form validation
  states (error/success), date picker
- **Feedback:** Toast/notification, alert, dialog/modal, skeleton loaders,
  empty states
- **Navigation:** Tabs, dropdown menu, command palette (search)
- **Actions:** Primary/secondary/ghost/destructive buttons, icon buttons
- **Charts:** Basic chart components for analytics widgets (using accent +
  neutral shades, not clashing colors)

All interactive elements (buttons, inputs, tabs, links) must use the Accent
color for focus/active/hover indication for consistency and accessibility
(visible focus ring using `--ring`).

---

## 7. Deliverables

1. Tailwind config / global CSS with full color scale + semantic tokens for
   light and dark mode.
2. shadcn/ui installed and configured (`components.json`), with the shadcn
   agent skill installed and used for generating component code.
3. A themed dashboard layout (sidebar + navbar shell) applied only within
   `/dashboard/**`, explicitly excluded from `/`, `/not-found`, sign-in, and
   sign-up pages.
4. A short style guide reference (this file, or a rendered `/dashboard/design-system`
   preview page, if useful) showing color swatches, typography scale, and core
   components in both themes.
