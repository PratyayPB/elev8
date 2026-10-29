# Profile Country Selection — Implementation Specification

## Objective

Update the Elev8 Profile setup/form so that the `country` field uses a static local country dataset.

The implementation must be lightweight, fast, deterministic, and independent of external country APIs.

## 1. Core Decision

Use:

```text
Static local country dataset
        ↓
Country selector
        ↓
ISO 3166-1 alpha-2 code
        ↓
Profile.country
```

Do **not** use:
- An external Country API
- A database table for countries
- Runtime API requests to retrieve countries

## 2. Country Dataset

Create a local static dataset, preferably:

```text
lib/data/countries.ts
```

containing standard ISO 3166-1 alpha-2 countries.

Example:

```ts
export const countries = [
  { code: "IN", name: "India" },
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  // ...
];
```

Requirements:
- Include all standard ISO 3166-1 alpha-2 countries.
- Use stable two-letter uppercase codes.
- Use human-readable names.
- Keep the dataset static and deterministic.
- Sort alphabetically by display name unless existing UI conventions require otherwise.

## 3. Database Storage

Keep the existing Prisma field:

```prisma
country String
```

Store only the ISO alpha-2 code.

Example:

```text
User selects: India
Database stores: IN
```

Do not store the country name or a JSON object in the Profile.

## 4. Frontend Behavior

Display human-readable country names:

```text
India
United States
United Kingdom
...
```

The submitted value should be the corresponding ISO code:

```text
IN
US
GB
```

When an existing Profile is loaded:

```text
Profile.country = "IN"
        ↓
Country lookup
        ↓
Display "India"
```

## 5. Validation

The server/API must validate the submitted country code against the local dataset before saving.

Example:

```text
IN → valid → save
XYZ → invalid → reject
```

Do not rely exclusively on frontend validation.

## 6. Centralized Country Utilities

Keep country-related logic centralized. A small utility module may expose:

```ts
getCountryByCode(code)
getCountryName(code)
isValidCountryCode(code)
```

For example:

```ts
getCountryName("IN")
// "India"

isValidCountryCode("IN")
// true
```

Do not duplicate lookup/validation logic across components or API routes.

## 7. Application Architecture

Use:

```text
lib/data/countries.ts
        │
        ├───────────────┐
        ▼               ▼
 Profile Form      Server Validation
        │               │
        ▼               ▼
 ISO Code            Validation
        │               │
        └───────┬───────┘
                ▼
          Profile.country
```

The local country dataset is the single source of truth.

## 8. No Runtime API

Do not implement:

```text
Profile Form
    ↓
External Country API
    ↓
Country List
```

The list should already be available locally at runtime.

This avoids network latency, external dependencies, API failures, and rate limits.

## 9. No Database Country Table

Do not create a Prisma `Country` model. Countries are static reference data for the current MVP.

## 10. Existing Elev8 Architecture

Follow the existing application's conventions for:
- Profile setup
- Form components
- UI components
- Validation
- API routes/server actions
- Services
- TypeScript
- Error handling

Do not introduce a new state-management system or unrelated architectural changes.

## 11. Type Safety

Use a predictable country type:

```ts
type Country = {
  code: string;
  name: string;
};
```

If the project already has a validation library/schema system, integrate with it rather than adding another validation dependency.

## 12. Profile Submission Flow

```text
User opens Profile Setup
        ↓
Local country dataset loads
        ↓
User selects "India"
        ↓
Form value = "IN"
        ↓
Client validation
        ↓
Profile API / server action
        ↓
Server validates "IN"
        ↓
Profile.country = "IN"
        ↓
Profile saved
```

## 13. Profile Editing Flow

```text
Database:
country = "IN"
        ↓
Profile loaded
        ↓
Country selector resolves "IN"
        ↓
UI displays "India"
```

If changed:

```text
India
 ↓
United States
 ↓
country = "US"
 ↓
Profile update
```

Follow the existing Profile versioning behavior when a country change qualifies as a meaningful Profile update.

## 14. Recommendation Engine

The Recommendation Engine may consume the stored ISO code as Profile context.

Example:

```text
Profile.country = "IN"
```

If human-readable context is required, resolve:

```text
IN → India
```

using the local dataset.

Do not make the Recommendation Engine dependent on an external country API.

## 15. Career Assessment

Career Assessment may use country as contextual information.

If the LLM prompt requires the country name:

```text
IN → India
```

using the local dataset.

Do not duplicate country names in Profile storage.

## 16. Roadmap

Country is generally low-to-medium importance for roadmap generation. Make it available as Profile context but do not add country-specific roadmap behavior in this task.

## 17. Resume Builder

Country may be useful for resume/contact information and regional formatting.

Do not automatically add unrelated Profile fields such as age to a resume. Use country only where the existing Resume Builder specification requires it.

## 18. Resume Scoring

Resume Scoring does not need an external country service. If country context is passed to an assessment prompt, resolve the ISO code locally.

## 19. Interview

Country is not a primary Interview input. Do not add country-specific interview behavior in this task.

## 20. Performance

A static dataset of roughly 250 countries is small enough to keep locally.

Do not:
- Fetch countries on every render.
- Query a database for country names.
- Make network requests.
- Add caching infrastructure.

## 21. Error Handling

If legacy data contains an unsupported code, the Profile UI should fail gracefully rather than crash.

For new submissions, reject invalid country codes server-side.

Do not silently transform unknown legacy values without an explicit migration/data-cleanup strategy.

## 22. Acceptance Criteria

- [ ] Local static country dataset exists.
- [ ] Dataset uses ISO 3166-1 alpha-2 codes.
- [ ] Standard countries are included.
- [ ] Country names are displayed to users.
- [ ] ISO codes are submitted by the form.
- [ ] `Profile.country` stores only the ISO alpha-2 code.
- [ ] Existing country codes resolve correctly.
- [ ] Server-side validation rejects unsupported codes.
- [ ] No external country API is used.
- [ ] No Country database table is created.
- [ ] Lookup/validation logic is centralized.
- [ ] Existing Profile functionality remains unaffected.
- [ ] Profile versioning follows the existing architecture.
- [ ] TypeScript passes.
- [ ] Lint passes.
- [ ] Production build succeeds.
- [ ] Relevant Profile tests pass.

## Final Decision

**Use a static local country dataset with ISO 3166-1 alpha-2 codes.**

Do not use an external API or a database Country table for the MVP.

This is the lightest, fastest, and most maintainable approach for Elev8.
