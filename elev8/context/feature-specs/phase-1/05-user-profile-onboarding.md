# Phase 1.5 - User Profile & Onboarding

## Objective

Implement the complete user profile and optional onboarding system for **Elev8**.

This phase begins immediately after a user successfully authenticates. It is responsible for collecting user information, creating a personalized profile, storing user preferences, and preparing the foundation for future AI-powered career features.

Onboarding **must be optional**. Users should be able to skip onboarding and immediately start using Elev8. They can complete or update their profile at any time from the Dashboard or Settings.

This phase should **NOT** implement Career Assessment, Career Guidance, Roadmap Generation, Resume Builder, or any AI functionality.

---

# Background

Authentication confirms **who the user is**.

This phase determines **who the user is professionally**.

Unlike traditional SaaS applications, Elev8 should not force users through onboarding before they can use the platform.

Users may sign in for different reasons:

- Generate a roadmap
- Build a resume
- Practice interviews
- Explore the platform
- Receive career guidance

## The onboarding system should support progressive personalization, allowing users to provide information over time rather than requiring everything upfront.

# AI Implementation Rules

Before implementation:

- Read this specification completely.
- Only implement profile creation and onboarding.
- Do NOT implement AI functionality.
- Do NOT implement Career Assessment.
- Do NOT generate career recommendations.
- Keep the onboarding modular.
- Use reusable components.
- Follow Next.js App Router best practices.
- Follow Prisma best practices.
- Use TypeScript throughout.

---

# Functional Requirements

The onboarding system should:

- Detect first-time users.
- Allow users to skip onboarding.
- Create a user profile when required.
- Allow onboarding to be resumed later.
- Allow users to update their profile.
- Track onboarding progress.
- Track profile completion.
- Redirect users appropriately based on onboarding status.

---

# User Flow

```text
User Signs In
        │
        ▼
Dashboard
        │
        ├───────────────┐
        ▼               ▼
Explore Features   Complete Onboarding
        │               │
        └──────┬────────┘
               ▼
     Personalized Experience
```

After authentication:

- Users are **not forced** to complete onboarding.
- Users may skip onboarding immediately.
- Users can complete onboarding later from:
  - Dashboard
  - Profile
  - Settings

---

# Onboarding Strategy

Onboarding should be **optional**.

After the user's first successful login, present two actions:

```text
Complete Profile

or

Skip for Now
```

If the user selects **Skip for Now**, redirect them directly to the Dashboard.

The onboarding process should remain accessible at any time from:

- Dashboard
- Profile
- Settings

Skipping onboarding should never restrict access to any module.

# Profile Model

Create a profile linked to the authenticated Clerk user.

The profile should include the following fields.

---

## Personal Information

- Full Name
- Profile Picture
- Email (read-only)
- Country
- Time Zone

---

## Academic Information

- Current Status
  - Student
  - Graduate
  - Working Professional
  - Career Switcher

- Degree

- Major / Specialization

- Institution

- Graduation Year

---

## Professional Information

- Current Role

- Years of Experience

- Industry

- Employment Status

---

## Career Interests

Allow multiple selections.

Examples

- Frontend Development
- Backend Development
- Full Stack Development
- AI / Machine Learning
- Data Science
- Cybersecurity
- DevOps
- Mobile Development
- Cloud Computing
- UI / UX Design
- Product Management

---

## Skills

Users should be able to add

- Programming Languages
- Frameworks
- Databases
- Cloud Platforms
- Tools
- Soft Skills

Store as arrays.

---

## Career Goals

Allow one or more goals.

Examples

- Get my first internship
- Land my first software job
- Switch careers
- Become a Full Stack Developer
- Learn AI
- Become interview ready
- Build a stronger portfolio

---

## Preferences

Store user preferences such as

- Preferred Learning Style
- Preferred Difficulty
- Weekly Learning Hours

These will be used later by the Roadmap Generator.

---

# Onboarding Flow

Create a multi-step onboarding experience.

Suggested flow

```
Step 1

Welcome

↓

Step 2

Personal Information

↓

Step 3

Education

↓

Step 4

Professional Background

↓

Step 5

Skills

↓

Step 6

Career Interests

↓

Step 7

Career Goals

↓

Step 8

Preferences

↓

Finish

↓

Dashboard
```

---

# Profile Completion

Profile completion should be calculated independently from onboarding status.

Example

```text
Profile Completion

████████░░

80%
```

Users should always be able to improve their profile over time.

Completing onboarding does not require 100% profile completion.

---

# Dashboard Redirect

After authentication:

If onboarding has never started:

```text
Dashboard
```

The dashboard should display a non-blocking prompt encouraging profile completion.

If the user starts onboarding:

```text
Resume Onboarding
```

If onboarding is completed:

```text
Dashboard
```

---

# Settings

Users should be able to update their profile at any time.

Editable fields include:

- Personal Information
- Academic Information
- Professional Information
- Skills
- Interests
- Career Goals
- Preferences

Users should also be able to resume onboarding from the Settings page.

---

# Shared Components

Create

```
components/profile/

profile-card.tsx

profile-avatar.tsx

profile-progress.tsx

profile-summary.tsx

index.ts
```

---

Create

```
components/onboarding/

stepper.tsx

progress-bar.tsx

navigation.tsx

welcome.tsx

personal-info.tsx

education.tsx

professional.tsx

skills.tsx

interests.tsx

goals.tsx

preferences.tsx

completion.tsx
```

Only minimal implementations.

---

# Feature Module

```
features/profile/

components/

hooks/

services/

types.ts

constants.ts

utils.ts

index.ts
```

---

# Database Requirements

Create the necessary Prisma model(s) for:

- User Profile

The model should support

- Personal information
- Academic information
- Professional information
- Skills
- Interests
- Goals
- Preferences
- Onboarding completion
- Profile completion percentage
- Timestamps

Do not implement unrelated database models.

---

# Services

Create

```
profile.service.ts
```

Responsibilities

- Create profile
- Update profile
- Fetch profile
- Calculate completion percentage
- Determine onboarding status

---

# Hooks

Create

```
use-profile.ts

use-onboarding.ts

use-profile-completion.ts
```

---

# Validation

Use

- React Hook Form
- Zod

Every onboarding step should validate before continuing.

---

# UI Requirements

The onboarding should:

- Be responsive.
- Show current step.
- Display progress.
- Allow Previous and Next navigation.
- Save progress between steps.
- Prevent skipping required information.

Do not spend time polishing the UI.

Focus on functionality.

---

# Non-Functional Requirements

- Modular implementation.
- Reusable form components.
- Type-safe forms.
- Clean separation of concerns.
- Scalable architecture.
- Production-ready structure.

---

# Progressive Personalization

Elev8 follows a progressive personalization approach.

Users should never be forced to provide information that is unnecessary for the task they want to perform.

Each module should request only the minimum information required.

Examples

### Roadmap Generator

Required

- Target Career
- Experience Level

Optional

- Skills
- Interests

---

### Resume Builder

Required

- Name
- Education
- Experience

---

### Interview Simulation

Required

- Target Role

Optional

- Experience Level

---

### Career Guidance

Benefits from a complete profile but should gracefully handle missing information by requesting additional details only when necessary.

---

# Acceptance Criteria

## Profile

- A user profile can be created.
- Profile data persists.
- Profile updates work.
- Profile completion is calculated correctly.

---

## Onboarding

- Users can skip onboarding.
- Users can resume onboarding later.
- Multi-step onboarding works correctly.
- Validation works.
- Progress persists.

---

## Dashboard

- New users can access the dashboard immediately.
- Dashboard displays a non-blocking profile completion reminder.
- Reminder can be dismissed temporarily.

---

## Flexibility

- No feature is blocked because onboarding was skipped.
- Users are prompted only for information required by the feature they are currently using.
- Missing profile information can be completed incrementally.

---

## Code Quality

- No TypeScript errors.
- No lint errors.
- Project builds successfully.

---

# Out of Scope

Do NOT implement

- Career Assessment
- Career Guidance
- AI recommendations
- Roadmap generation
- Resume Builder
- Resume Scorer
- Interview Simulation
- Progress Dashboard
- Notifications
- Analytics
- Social features
- Gamification
- File uploads beyond profile picture
- Subscription management

---

# Deliverables

The implementation should include

```
✓ Optional onboarding flow

✓ Skip onboarding functionality

✓ Resume onboarding functionality

✓ User profile model

✓ Multi-step onboarding

✓ Profile completion tracking

✓ Settings page

✓ Profile service

✓ Validation

✓ Shared profile components

✓ Shared onboarding components

✓ Profile hooks

✓ Progressive personalization foundation
```

---

# Task Checklist

## Database

- [ ] Create User Profile model
- [ ] Add onboarding fields
- [ ] Add timestamps
- [ ] Run Prisma migration

---

## Feature Module

- [ ] Create profile feature module
- [ ] Create services
- [ ] Create hooks
- [ ] Create types
- [ ] Create utilities

---

## Onboarding

- [ ] Create onboarding layout
- [ ] Create stepper
- [ ] Create progress bar
- [ ] Create welcome screen
- [ ] Create Personal Information step
- [ ] Create Education step
- [ ] Create Professional Information step
- [ ] Create Skills step
- [ ] Create Career Interests step
- [ ] Create Career Goals step
- [ ] Create Preferences step
- [ ] Create Completion step

---

## Profile

- [ ] Create profile service
- [ ] Create profile summary
- [ ] Create profile card
- [ ] Create profile avatar
- [ ] Create completion calculator

---

## Settings

- [ ] Create profile editing page
- [ ] Persist updates

---

## Validation

- [ ] Validate each onboarding step
- [ ] Prevent invalid navigation
- [ ] Save progress between steps

---

## Testing

- [ ] First-time users are redirected to onboarding
- [ ] Returning users go directly to dashboard
- [ ] Profile persists correctly
- [ ] Completion percentage updates correctly
- [ ] Forms validate correctly
- [ ] Project builds successfully
- [ ] No TypeScript errors
- [ ] No lint errors
