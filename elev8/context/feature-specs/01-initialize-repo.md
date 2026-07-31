Project Vision

Elev8 is an AI-powered career development platform that provides a complete career growth ecosystem. Instead of offering isolated tools, Elev8 connects every stage of the user's journey—from career discovery to job readiness.

Core modules include:

• Career Assessment
• AI Career Guidance
• Personalized Roadmap Generator
• Progress Dashboard
• Resume Builder & ATS Resume Scorer
• AI Interview Simulation
• Career Readiness Analytics
• User Dashboard
• AI Chat Assistant

The repository should be structured so each module is independent, reusable, and scalable while sharing common services, UI components, hooks, utilities, and state management.

```text
You are an expert software architect and senior full-stack engineer.

Initialize a production-ready repository for an AI-powered career development platform called **Elev8**.

Your task is to generate ONLY the project structure and boilerplate. Do NOT implement business logic, UI components, API functionality, authentication flows, database models, or AI integrations. Create folders, placeholder files, minimal exports, and TODO comments where appropriate.

The codebase should be clean, scalable, modular, and follow modern Next.js best practices.

---

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui
- Prisma ORM
- PostgreSQL
- Clerk Authentication
- Zustand
- TanStack Query
- React Hook Form
- Zod
- Framer Motion
- Trigger.dev
- OpenAI SDK
- UploadThing
- Lucide Icons

---

## Project Architecture

Use a feature-first architecture while separating reusable code.

```

src/
│
├── app/
├── components/
├── features/
├── hooks/
├── lib/
├── services/
├── store/
├── providers/
├── types/
├── constants/
├── config/
├── utils/
└── styles/

```

---

## App Router

Initialize pages only.

```

app/

(layout)

page.tsx

(auth)

sign-in/
sign-up/

dashboard/

page.tsx

career-assessment/

page.tsx

career-guidance/

page.tsx

roadmaps/

page.tsx

resume/

page.tsx

interview/

page.tsx

progress/

page.tsx

pricing/

page.tsx

settings/

page.tsx

api/

...

```

Every page should simply export a placeholder component.

Example

```

export default function DashboardPage() {
return <div>Dashboard</div>;
}

```

---

## Components

Create folders only.

```

components/

layout/
navigation/
landing/
dashboard/
cards/
charts/
forms/
dialogs/
modals/
shared/
feedback/
animations/
roadmaps/
resume/
interview/
career/
progress/
ui/

```

Inside each folder create an index.ts.

No implementation.

---

## Features

Create one feature module for each major feature.

```

features/

career-assessment/

components/
hooks/
services/
types/
utils/

career-guidance/

...

roadmaps/

...

resume/

...

interview/

...

progress/

...

```

Each module should contain

```

components/

hooks/

services/

types.ts

constants.ts

utils.ts

index.ts

```

---

## Services

Create service folders.

```

services/

ai/

roadmaps/

resume/

interview/

career/

dashboard/

analytics/

user/

storage/

```

Each service should contain placeholder files.

Example

```

roadmap.service.ts

resume.service.ts

...

```

---

## Database

Initialize

```

prisma/

schema.prisma

migrations/
seed.ts

```

Leave schema empty with TODO comments.

---

## Lib

Create

```

lib/

prisma.ts

auth.ts

openai.ts

trigger.ts

uploadthing.ts

db.ts

utils.ts

```

Only initialize exports.

---

## Store

Create Zustand stores.

```

store/

user.store.ts

roadmap.store.ts

dashboard.store.ts

career.store.ts

resume.store.ts

interview.store.ts

progress.store.ts

```

Initialize empty stores only.

---

## Hooks

Create shared hooks.

```

hooks/

use-user.ts

use-mobile.ts

use-debounce.ts

use-local-storage.ts

use-theme.ts

use-api.ts

```

---

## Providers

Create providers.

```

providers/

theme-provider.tsx

query-provider.tsx

clerk-provider.tsx

toast-provider.tsx

```

---

## Types

Create

```

types/

career.ts

roadmap.ts

resume.ts

interview.ts

dashboard.ts

api.ts

database.ts

common.ts

```

---

## Constants

```

constants/

routes.ts

navigation.ts

career.ts

roadmap.ts

resume.ts

pricing.ts

faq.ts

```

---

## Config

```

config/

site.ts

env.ts

ai.ts

auth.ts

dashboard.ts

```

---

## Utils

```

utils/

format.ts

validation.ts

helpers.ts

dates.ts

storage.ts

```

---

## Public

Initialize folders.

```

public/

images/

icons/

logos/

illustrations/

avatars/

```

---

## Landing Page Sections

Create folders for each landing page section.

```

components/landing/

header/

hero/

social-proof/

about/

features/

how-it-works/

dashboard-preview/

gallery/

pricing/

testimonials/

faq/

cta/

contact/

footer/

chatbot/

```

Each folder should contain

```

index.tsx

```

with placeholder components.

---

## Forms

Create boilerplate folders.

```

components/forms/

career-assessment-form/

contact-form/

resume-builder-form/

settings-form/

sign-in-form/

sign-up-form/

```

---

## Dashboard

Create placeholder folders.

```

components/dashboard/

overview/

career-readiness/

skill-gap/

resume-score/

interview-score/

roadmap-progress/

recent-activity/

quick-actions/

```

---

## Documentation

Initialize

```

README.md

LICENSE

CONTRIBUTING.md

CHANGELOG.md

PROJECT_OVERVIEW.md

ARCHITECTURE.md

ROADMAP.md

.env.example

```

Populate each with placeholder headings and TODO sections.

---

## Code Quality

Initialize configuration files.

```

.eslintrc

.prettierrc

.prettierignore

.gitignore

tsconfig.json

tailwind.config.ts

components.json

next.config.ts

postcss.config.js

```

Only boilerplate.

---

## Rules

- Do not implement business logic.
- Do not generate UI.
- Do not create API endpoints.
- Do not connect to databases.
- Do not write authentication logic.
- Do not write AI prompts.
- Do not implement state management.
- Do not create Prisma models.
- Do not install packages.

Only generate a clean, scalable repository structure with placeholder files, minimal exports, TODO comments, and index files where appropriate.

The resulting project should be immediately ready for feature-by-feature implementation while following industry-standard architecture and maintainability practices.
```
