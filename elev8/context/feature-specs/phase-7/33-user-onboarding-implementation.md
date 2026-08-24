# Elev8 User Onboarding — Frontend & Backend Implementation Specification

## Objective

Implement the Elev8 onboarding system using:

Clerk Sign Up → Create User → Check Profile → Onboarding Modal → Create/Update Profile → Dashboard

The onboarding must enforce mandatory profile information while allowing all other profile information to be completed later.

## 1. Mandatory Fields

The following fields are mandatory:

- `name`
- `age`
- `country`
- `phoneNumber`

Keep these Prisma fields nullable because a newly created User/Profile may temporarily be incomplete. Enforce mandatory requirements in backend validation.

Do not add an `onboardingCompleted` boolean. Completion must be derived from the required Profile fields.

Conceptually:

```ts
const isComplete =
  Boolean(profile?.name) &&
  profile?.age != null &&
  Boolean(profile?.country) &&
  Boolean(profile?.phoneNumber);
```

The backend is the authoritative source.

## 2. Optional Fields

These may be completed later:

- `currentStatus`
- `currentRole`
- `yearsOfExperience`
- `highestQualification`
- `fieldOfStudy`
- `primaryGoal`
- `targetRole`
- `targetCompanyType`
- `weeklyLearningHours`
- `ProfileSkill[]`
- `ProfileDesiredSkill[]`

Do not block application access because optional fields are incomplete.

## 3. UI Architecture

Use a modal/dialog over the application.

Requirements:

- Background is blurred and non-interactive.
- Mandatory stage has no close button.
- Mandatory stage has no Skip button.
- Mandatory stage cannot close through Escape.
- Mandatory stage cannot close through backdrop click.
- After mandatory fields are successfully saved, optional onboarding is shown.
- Optional stage has a close button in the top-right.
- Optional stage has a Skip action at the bottom.
- Optional stage may be closed without completing all optional fields.
- Use responsive, accessible form controls.

Suggested flow:

```text
MANDATORY
  ↓
Save required profile data
  ↓
OPTIONAL
  ├── Continue
  ├── Skip
  └── Close
```

## 4. Onboarding Resume Behavior

If a new user closes the browser/tab before completing mandatory fields:

```text
Sign up
→ User created
→ Onboarding
→ User leaves
```

On the next sign-in:

```text
Sign in
→ Check profile completion
→ Incomplete
→ Wait approximately 3000ms
→ Open mandatory onboarding
```

Use a deterministic delay such as `3000ms`, rather than a random 3000–5000ms interval. The original 3–5 second UX intention is preserved while testing remains deterministic.

Do not rely on localStorage or a frontend flag to determine whether onboarding is complete.

## 5. User/Profile Architecture

Authentication identity:

```text
Clerk
 ↓
User.clerkId
 ↓
User.id
 ↓
Profile.userId
```

Use the authenticated Clerk identity to resolve the internal `User`.

Never use email as the internal relationship key.

`Profile.userId` is unique, so each User can have at most one Profile.

## 6. Backend APIs

Implement or adapt:

```text
GET /api/profile
PUT /api/profile
GET /api/profile/completion
```

Use the project's existing routing conventions if they differ.

### GET /api/profile

Return the authenticated user's profile and related skills.

Example:

```json
{
  "id": "profile_123",
  "name": "User",
  "age": 20,
  "country": "India",
  "phoneNumber": "+91XXXXXXXXXX",
  "currentStatus": null,
  "currentRole": null,
  "yearsOfExperience": null,
  "highestQualification": null,
  "fieldOfStudy": null,
  "primaryGoal": null,
  "targetRole": null,
  "targetCompanyType": null,
  "weeklyLearningHours": null,
  "skills": [],
  "desiredSkills": []
}
```

### GET /api/profile/completion

Return:

```json
{
  "isComplete": false,
  "missingFields": [
    "name",
    "phoneNumber"
  ]
}
```

When complete:

```json
{
  "isComplete": true,
  "missingFields": []
}
```

The backend must calculate this from the actual Profile record.

### PUT /api/profile

Support partial updates.

Mandatory example:

```json
{
  "name": "User",
  "age": 20,
  "country": "India",
  "phoneNumber": "+91XXXXXXXXXX"
}
```

Optional example:

```json
{
  "currentStatus": "STUDENT",
  "currentRole": "Software Developer",
  "yearsOfExperience": 1,
  "targetRole": "Full Stack Developer"
}
```

Do not trust a client-provided `userId`. Resolve the user from authentication.

## 7. Profile Validation

Use the project's existing validation library, preferably Zod if already present.

Mandatory validation should enforce:

```ts
const mandatoryProfileSchema = z.object({
  name: z.string().trim().min(1),
  age: z.number().int().min(13).max(100),
  country: z.string().trim().min(1),
  phoneNumber: z.string().trim().min(1)
});
```

Adjust the age range if the product has a different requirement.

Phone number should initially be validated for reasonable format. Do not implement OTP verification unless explicitly required.

## 8. Profile Create/Update

When onboarding submits mandatory information:

```text
Authenticated Clerk user
 ↓
Resolve User
 ↓
Find Profile
 ↓
Create if missing
OR
Update existing Profile
 ↓
Validate
 ↓
Save
```

Use `upsert` where appropriate:

```ts
await prisma.profile.upsert({
  where: { userId },
  create: {
    userId,
    ...validatedData
  },
  update: {
    ...validatedData
  }
});
```

The database `userId @unique` constraint must prevent duplicate profiles.

## 9. Skills

Do not store skills in Profile JSON.

Use:

```text
ProfileSkill[]
ProfileDesiredSkill[]
```

Current skill:

```json
{
  "name": "JavaScript",
  "normalizedName": "javascript",
  "proficiency": "INTERMEDIATE"
}
```

Desired skill:

```json
{
  "name": "Docker",
  "normalizedName": "docker"
}
```

Rules:

- `name` is the UI/display value.
- `normalizedName` is used for backend matching and uniqueness.
- Normalization must happen server-side.
- Do not create duplicate skills for one profile.
- Respect `@@unique([profileId, normalizedName])`.

## 10. Frontend Onboarding State

Create a dedicated onboarding provider/hook, for example:

```text
OnboardingProvider
useOnboarding()
```

Suggested state:

```ts
{
  isLoading,
  isOpen,
  stage,
  profile,
  missingFields,
  isSaving,
  error
}
```

Stage:

```ts
type OnboardingStage = "MANDATORY" | "OPTIONAL";
```

Avoid duplicating onboarding state across unrelated components.

## 11. Application Initialization

After authentication:

```text
Authenticated
 ↓
Application initializes
 ↓
GET /api/profile/completion
 ↓
isComplete?
```

If complete:

```text
Continue normally
```

If incomplete:

```text
Wait 3000ms
 ↓
Open onboarding
```

Do not briefly show the modal before the completion request returns.

Use a loading state while the completion status is being determined.

## 12. Mandatory Modal

Mandatory modal:

- No X button.
- No Skip button.
- No Escape close.
- No backdrop close.
- No application interaction behind it.
- Submit disabled while saving.
- Submit blocked when required data is invalid.
- Inline validation errors.
- Focus should be trapped inside the dialog.

The user can still close the browser/tab. The system must recover on the next login.

## 13. Optional Modal

After mandatory data succeeds:

```text
stage = OPTIONAL
```

Show:

- Close button.
- Skip button.
- Optional profile fields.

If the user skips or closes:

- Preserve already-saved mandatory information.
- Save optional fields already submitted if appropriate.
- Close the modal.
- Allow normal application access.

Do not mark optional fields as completed if they were skipped.

## 14. Profile Completion

Recommended future UI:

```text
Profile completion: 55%

✓ Basic information
○ Current career
○ Education
○ Career goals
○ Skills
○ Learning preferences
```

This is informational. Optional completion should not block normal application use.

## 15. Country

Prefer a standardized country selector rather than unrestricted free text.

Use one consistent representation throughout the application. Do not allow arbitrary variations such as:

```text
India
india
IN
IND
```

to become inconsistent backend values.

## 16. Accessibility

The onboarding dialog must:

- Use an accessible dialog role.
- Have an accessible title.
- Associate labels with inputs.
- Move focus into the modal when opened.
- Trap focus while mandatory onboarding is active.
- Support keyboard navigation.
- Show visible validation errors.
- Not rely only on color for errors.
- Restore focus appropriately after optional onboarding closes.

## 17. Authentication & Authorization

Every profile endpoint must require authentication.

Test:

```text
User A
 ↓
Profile A
```

and ensure User A cannot:

```text
read Profile B
update Profile B
```

Do not trust:

```json
{
  "userId": "another-user"
}
```

from the client.

Resolve ownership server-side from Clerk → User.

## 18. Clerk User Creation

Ensure Clerk sign-up results in an Elev8 `User`.

The process must be idempotent:

```text
User already exists
→ do not create duplicate

User does not exist
→ create User
```

Use the project's existing Clerk webhook/on-demand synchronization architecture rather than introducing a second competing mechanism.

## 19. Loading/Error Handling

Handle:

### Loading

```text
Checking profile...
```

### Saving

Disable relevant controls while saving.

### Validation failure

Keep modal open and display field errors.

### API failure

Display:

```text
Unable to save your profile. Please try again.
```

Do not silently close the modal.

### Network failure

Preserve entered form values where possible.

## 20. Backend Test Cases

Test:

1. New User + no Profile.
2. New User + incomplete Profile.
3. New User + complete Profile.
4. Profile creation.
5. Profile update.
6. Profile upsert.
7. Duplicate Profile prevention.
8. Missing mandatory fields.
9. Invalid age.
10. Invalid phone number.
11. Unauthorized profile request.
12. Cross-user access.
13. Partial optional update.
14. ProfileSkill creation.
15. ProfileDesiredSkill creation.
16. Duplicate normalized skill.
17. Skill deletion/update if supported.

## 21. Frontend Test Cases

Test:

1. Mandatory modal appears for incomplete users.
2. Modal does not appear for complete users.
3. Mandatory modal cannot be closed.
4. Escape cannot close mandatory modal.
5. Backdrop click cannot close mandatory modal.
6. Continue remains disabled/blocked for invalid input.
7. Validation errors display correctly.
8. Successful mandatory save transitions to optional stage.
9. Optional stage shows Close and Skip.
10. Skip closes optional onboarding.
11. Close closes optional onboarding.
12. Loading states work.
13. Saving states work.
14. API errors are displayed.
15. Form values survive recoverable failures.
16. Responsive/mobile layout works.
17. Focus management works.

## 22. Interrupted Onboarding Tests

### Scenario A

```text
Sign up
→ onboarding opens
→ user closes browser
→ sign in again
→ onboarding appears after ~3000ms
```

### Scenario B

```text
Sign up
→ enter some mandatory fields
→ close
→ sign in
→ previously saved fields remain
→ missing fields are still requested
```

### Scenario C

```text
Complete mandatory fields
→ close optional onboarding
→ sign out
→ sign in
→ mandatory onboarding does not appear
```

## 23. Integration Tests

Verify the full chain:

```text
Clerk
 ↓
User
 ↓
Profile
 ↓
Profile completion
 ↓
Onboarding
 ↓
Profile update
 ↓
Dashboard
```

Then verify downstream modules can consume the resulting profile:

```text
Profile
 ↓
Career Assessment
Roadmap
Resume Score
Interview Personalization
```

Do not modify downstream business logic unless required to accommodate the finalized Profile structure.

## 24. Regression Verification

Run the project's actual commands for:

```text
Prisma validation
Prisma client generation
TypeScript/type checking
Lint
Unit tests
Integration tests
Production build
```

Do not suppress schema/type errors using `any`, `@ts-ignore`, or similar workarounds unless there is a documented reason.

Verify existing routes continue to work.

## 25. Final Acceptance Criteria

- [ ] Clerk sign-up works.
- [ ] Elev8 User is created exactly once.
- [ ] Profile is created/updated correctly.
- [ ] Mandatory fields cannot be skipped.
- [ ] Mandatory modal cannot be dismissed.
- [ ] Optional fields can be skipped.
- [ ] Optional modal can be closed.
- [ ] Incomplete onboarding resumes on future sign-in.
- [ ] Completion is derived from Profile data.
- [ ] No unnecessary `onboardingCompleted` field exists.
- [ ] Backend is authoritative for completion.
- [ ] Profile skills use relational tables.
- [ ] Skill normalization works.
- [ ] Authentication is enforced.
- [ ] Cross-user access is blocked.
- [ ] API errors are controlled.
- [ ] Frontend errors are controlled.
- [ ] Accessibility requirements pass.
- [ ] Mobile/responsive behavior works.
- [ ] Downstream modules still receive valid Profile data.
- [ ] Prisma validation passes.
- [ ] Type checking passes.
- [ ] Build passes.
- [ ] Relevant frontend/backend tests pass.

## 26. Important Implementation Principle

Do not treat this task as only a UI implementation.

Trace and verify the complete request lifecycle:

```text
Frontend form
 ↓
API request
 ↓
Authentication
 ↓
Validation
 ↓
User resolution
 ↓
Profile service
 ↓
Prisma
 ↓
Database
 ↓
API response
 ↓
Frontend state
 ↓
Onboarding UI
```

The implementation is complete only when this entire lifecycle works correctly for both new and returning users.
