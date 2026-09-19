# Elev8 Settings Page — Implementation Specification

## Objective

Implement the Elev8 Settings page with these sections:

```text
Settings
├── Account
│   ├── Email
│   ├── Plan
│   └── Authentication
├── AI Preferences
│   └── Fast / Balanced / Think
├── Notifications
│   ├── Product Updates
│   ├── Offers & Promotions
│   └── Newsletter
├── Security
│   └── Clerk "Manage Account"
├── Billing & Subscription
│   ├── Current Plan
│   └── Manage Subscription
└── Danger Zone
    └── Delete Account
```

This is primarily a frontend task. The only application backend work required is persistence/integration of the universal LLM preference. Clerk should handle security/account management.

---

## 1. Account

Include only:

- Email
- Plan / account type
- Authentication

Do **not** include career Profile data in Settings.

Ownership:

- Email/authentication → Clerk
- Plan → existing plan/subscription source, if present
- Career data → existing Profile module

Do not duplicate existing source-of-truth data merely for Settings.

---

## 2. AI Preferences

Provide one universal LLM preference:

```ts
type LLMPreference = "FAST" | "BALANCED" | "THINK";
```

Display:

- **Fast** — quicker responses
- **Balanced** — balance between speed and capability
- **Think** — deeper reasoning for more complex tasks

Use abstract tiers only. Do not expose provider-specific model names.

### Centralized LLM selector

The selected preference must apply across the entire application:

```text
Settings
   ↓
User LLM Preference
   ↓
Centralized LLM Selector
   ↓
All LLM-powered modules
```

The centralized selector must be the single resolution point for model selection. Do not implement separate user-model selection logic inside individual modules.

Potential consumers include:

- Career Assessment
- Roadmap
- Interview generation/evaluation
- Resume AI features
- Resume scoring, if LLM-powered
- Future LLM features

Keep the actual provider/model mapping centralized:

```text
FAST     → configured fast model
BALANCED → configured balanced model
THINK    → configured reasoning/advanced model
```

The UI should not know these mappings.

### Persistence

Inspect the existing project for a user-preference mechanism and reuse it if appropriate. Otherwise add the smallest suitable persistence mechanism.

The preference must be:

- user-specific
- persisted
- validated server-side
- retrieved by the centralized selector
- given a sensible default

Recommended default: `BALANCED`.

Never expose API keys or sensitive provider configuration to the client.

---

## 3. Notifications

Create frontend UI only for:

- Product Updates
- Offers & Promotions
- Newsletter

Use switches/toggles.

For this version, **do not implement**:

- database persistence
- notification APIs
- email service integration
- scheduling
- webhooks
- backend notification logic

The toggles may use local/component state so they behave interactively during the current session.

Do not create fake APIs or imply that emails are actually being sent.

Structure the UI/code so persistence can be added later.

---

## 4. Security

Security is handled entirely by Clerk.

The Settings Security section should contain a clear:

```text
Manage Account
```

button.

Wire it to the existing Clerk account-management UI/integration already used by the application.

Reuse existing Clerk components/routes where possible.

Do **not** implement custom:

- password management
- 2FA
- session management
- connected-account management
- authentication APIs
- security database fields

Do not duplicate Clerk functionality.

---

## 5. Billing & Subscription

Create frontend UI containing:

- Current Plan
- Manage Subscription

Use existing plan information if already available.

For this version, **do not implement**:

- billing backend
- Stripe/payment integration
- checkout
- subscription mutations
- invoices API
- payment-method management
- billing database implementation
- billing webhooks

`Manage Subscription` should be a placeholder/disabled/Coming Soon control consistent with the existing product UI.

Do not create fake billing functionality.

---

## 6. Danger Zone

Place this at the bottom of Settings:

```text
Danger Zone
└── Delete Account
```

Use a destructive button and confirmation dialog.

Before implementing deletion logic:

1. Inspect the existing account-deletion flow.
2. Inspect the existing Clerk integration.
3. Reuse an existing supported deletion flow if one exists.
4. Do not create duplicate deletion mechanisms.

If no deletion flow exists, implement the confirmation UI without inventing a fake deletion API.

The confirmation must prevent accidental deletion and clearly communicate the actual consequences supported by the existing flow.

---

## 7. Design System

First inspect the existing Elev8 UI/design system and reuse:

- typography
- colors
- spacing
- borders
- radii
- buttons
- cards
- switches
- radio groups
- dialogs
- icons
- breakpoints

Use existing shadcn/ui components where available and install additional shadcn/ui components weherever necessary.

Do not introduce a separate visual language.

---

## 8. Layout & Responsive Behavior

Use a standard SaaS settings layout with clearly separated sections.

Ensure the page works on:

- desktop
- tablet
- mobile

Controls must remain usable on narrow screens, buttons must not overflow, and descriptions must remain readable.

Use existing loading/skeleton conventions for genuinely asynchronous data. Avoid unnecessary loading states for local notification toggles.

---

## 9. Ownership / Data Flow

Maintain these ownership boundaries:

| Setting        | Source of Truth                   |
| -------------- | --------------------------------- |
| Email          | Clerk                             |
| Authentication | Clerk                             |
| Plan           | Existing subscription/plan source |
| LLM Preference | User preference storage           |
| Notifications  | Frontend-only for this version    |
| Security       | Clerk                             |
| Billing        | Frontend-only for this version    |
| Delete Account | Existing supported deletion flow  |

Settings must not become a new source of truth for Profile, Clerk, billing, or domain-module data.

---

## 10. Backend Requirements

Only implement backend functionality required for the universal LLM preference.

Required:

- persist the preference
- validate `FAST`, `BALANCED`, `THINK`
- associate it with the authenticated user
- prevent cross-user access
- make it available to the centralized LLM selector
- use a safe default (`BALANCED`)

Not required:

- notification backend
- billing backend
- custom security backend
- Privacy & Data functionality

Invalid/missing values should safely fall back to `BALANCED` where appropriate.

---

## 11. Error Handling

Use concise user-facing errors.

Example:

```text
Unable to save your AI preference. Please try again.
```

Never expose:

- stack traces
- database errors
- provider errors
- API keys
- internal implementation details

Follow existing Clerk error handling for account management.

Handle deletion errors safely without leaking internal information.

---

## 12. Security Audit

Verify:

- Settings requires authentication.
- Users can only read/write their own LLM preference.
- LLM preference is validated server-side.
- Provider/model configuration remains server-side.
- No secrets are sent to the browser.
- Frontend/backend responsibilities remain separated.
- No fake backend functionality is introduced for notifications or billing.

---

## 13. Implementation Workflow

### Step 1 — Inspect

Before modifying code, locate:

- current Settings route/page
- existing layout
- existing UI components
- Clerk integration
- User model
- existing preference storage
- plan/subscription representation
- centralized LLM selector
- account-deletion flow
- validation conventions
- existing shadcn/ui components

### Step 2 — Map ownership

Confirm the source of truth for each setting using the ownership table above.

### Step 3 — Implement

Build the Settings UI using existing project conventions.

Then integrate the LLM preference with the centralized selector.

Do not implement excluded backend functionality.

### Step 4 — Verify

Check all sections, responsive behavior, data ownership, Clerk integration, LLM propagation, validation, and error states.

---

## 14. Explicitly Excluded

Do not implement:

- Career Profile data in Settings
- Privacy & Data section
- data export
- custom password management
- custom 2FA
- custom session management
- custom connected-account management
- notification backend
- notification persistence
- email service integration
- billing backend
- Stripe/payment integration
- checkout
- invoices
- payment methods
- subscription webhooks
- provider-specific model names in the UI
- separate per-module LLM selection
- duplicate LLM-selection logic in individual modules

---

## 15. Testing

### Settings UI

Verify:

- all required sections render
- excluded sections do not render
- Account contains Email, Plan, Authentication
- Profile data is absent
- Fast/Balanced/Think render
- notification toggles render
- Security contains Clerk Manage Account
- Billing UI renders
- Danger Zone appears at the bottom

### LLM Preference

Test:

- default value
- each valid option
- persistence
- retrieval
- invalid values
- unauthenticated access
- cross-user access prevention
- centralized selector uses the saved preference

### Notifications

Verify toggles only change frontend state and do not call nonexistent APIs.

### Billing

Verify placeholder/disabled behavior only.

### Delete Account

Verify:

- confirmation is required
- cancellation does not delete
- existing supported deletion flow is used where available
- errors are handled safely

### Accessibility

Run existing lint/test/accessibility checks where available. Verify keyboard navigation, labels, focus handling, and accessible error/status messaging.

---

## 16. Acceptance Criteria

- [ ] Settings page follows Elev8's existing design system.
- [ ] Account contains Email, Plan, Authentication only.
- [ ] Career Profile data is not duplicated into Settings.
- [ ] AI Preferences contains Fast, Balanced, Think.
- [ ] LLM preference is persisted per user.
- [ ] Centralized LLM selector uses the preference universally.
- [ ] Individual modules do not implement their own user model-selection logic.
- [ ] Notifications contains the three requested email preferences.
- [ ] Notifications are frontend-only.
- [ ] Security contains Clerk Manage Account.
- [ ] No custom security system is added.
- [ ] Billing contains Current Plan and Manage Subscription UI.
- [ ] Billing is frontend-only.
- [ ] Privacy & Data is omitted.
- [ ] Delete Account is in a bottom Danger Zone with confirmation.
- [ ] Existing supported deletion flow is reused where available.
- [ ] No fake APIs are added for excluded functionality.
- [ ] LLM preference is validated server-side.
- [ ] Sensitive provider configuration remains server-side.
- [ ] Errors do not leak internal information.
- [ ] Responsive and accessible behavior is implemented.
- [ ] Relevant tests pass.

---

## 17. Final Agent Report

After implementation, report:

1. Files created
2. Files modified
3. Schema/database changes
4. API/backend changes
5. Centralized LLM selector changes
6. Clerk integration changes
7. Tests added/updated
8. Tests executed and results
9. Pre-existing issues discovered
10. Explicitly excluded functionality intentionally left unimplemented

Do not claim backend functionality exists where only frontend UI was implemented.
