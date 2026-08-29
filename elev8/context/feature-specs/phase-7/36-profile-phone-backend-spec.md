# Backend Implementation: International Phone Number

## Objective

Implement backend support for the Profile phone number using two separate fields:

- `phoneCountryCode`
- `phoneNumber`

Frontend input:

```text
Country identifier: +91
Phone number: 9876543210
```

Database:

```text
phoneCountryCode = "+91"
phoneNumber = "9876543210"
```

## Prisma Schema

Update the existing `Profile` model:

```prisma
phoneCountryCode String?
phoneNumber      String?
```

Both must be `String`, never `Int`.

Do not combine them into one database field. Create and apply the appropriate Prisma migration using the project's existing migration conventions.

## Validation

Use the existing project validation architecture.

If an equivalent utility is not already installed, use `libphonenumber-js` for international phone-number validation.

Do not use simplistic rules such as:

```ts
phoneNumber.length === 10
```

Validate the complete number using the country calling code and phone number.

Example:

```text
+91 + 9876543210
```

must be validated as an Indian number.

Reject invalid country/number combinations.

## Normalization

Normalize the phone number before storage. Do not preserve arbitrary spaces, dashes, parentheses, or other formatting.

Store the country calling code separately from the national phone number:

```text
phoneCountryCode = "+91"
phoneNumber = "9876543210"
```

Do not store a redundant complete-number field.

## Backend Flow

```text
Client
  ↓
phoneCountryCode + phoneNumber
  ↓
Schema validation
  ↓
Normalize
  ↓
Validate complete international number
  ↓
Profile Service
  ↓
Prisma
```

The server must perform final validation even if the frontend validates the input.

## Optional Input

Both fields are optional because Profile setup may be incomplete.

If no phone number is provided, store both as `null`, not empty strings, following project conventions.

If one is provided without the other, reject the request:

```text
phoneCountryCode = "+91"
phoneNumber = null
```

or:

```text
phoneCountryCode = null
phoneNumber = "9876543210"
```

## API / Service Architecture

Follow the existing Profile architecture.

Do not put phone business logic directly inside the route handler.

Prefer:

```text
Profile Route / Server Action
        ↓
Profile Validation
        ↓
Profile Service
        ↓
Phone normalization + validation
        ↓
Prisma
```

Reuse existing Profile services and utilities where appropriate.

## Full Number

When the complete international number is needed, construct it from the two stored fields:

```ts
const fullNumber = `${phoneCountryCode}${phoneNumber}`;
```

Example:

```text
+91 + 9876543210
        ↓
+919876543210
```

Use the phone library's parsing/validation functionality rather than relying only on string concatenation for validation.

## Security

Treat phone numbers as personal data.

Do not:

- Log raw phone numbers unnecessarily.
- Include raw numbers in debug output.
- Expose phone numbers through unrelated APIs.
- Store unnecessary duplicate copies.

Only return phone information through authenticated Profile endpoints where required.

Follow the existing authorization architecture.

## Profile Versioning

The Profile already uses `profileVersion`.

Follow the existing Profile versioning rules when `phoneCountryCode` or `phoneNumber` changes.

Do not bypass the established versioning mechanism.

Do not add special Recommendation Engine invalidation logic for phone changes unless the existing Profile implementation automatically handles all Profile changes.

## Existing Architecture

Do not modify unrelated Profile functionality.

Do not create a separate `PhoneNumber` database model for the MVP.

Follow the project's existing:

- Prisma conventions
- validation approach
- API/service structure
- TypeScript conventions
- error handling
- authorization patterns

## Testing

Add or update backend tests covering:

### Valid numbers

```text
+91 + valid Indian number
+1 + valid US number
+44 + valid UK number
```

### Invalid numbers

```text
Invalid country code
Invalid phone number
Country/number mismatch
Malformed input
```

### Optional input

```text
Both omitted → valid
Both empty → stored as null
Only country code → rejected
Only phone number → rejected
```

### Normalization

Verify formatted input is stored consistently.

### Authorization

Verify a user cannot update another user's Profile phone number.

## Acceptance Criteria

- [ ] `Profile` contains `phoneCountryCode String?`.
- [ ] `Profile` contains `phoneNumber String?`.
- [ ] Prisma migration is created/applied.
- [ ] Phone values are stored as strings.
- [ ] Country code and number remain separate.
- [ ] Server-side validation is implemented.
- [ ] International validation uses the country code.
- [ ] `libphonenumber-js` is used if no equivalent existing utility is available.
- [ ] Stored values are normalized consistently.
- [ ] Partial phone information is rejected.
- [ ] Empty phone input is stored as `null`.
- [ ] Existing Profile validation/service architecture is reused.
- [ ] Profile authorization is preserved.
- [ ] Profile versioning behavior is preserved.
- [ ] Raw phone numbers are not unnecessarily logged.
- [ ] Relevant tests pass.
- [ ] TypeScript passes.
- [ ] Lint passes.
- [ ] Production build succeeds.

## Final Database Structure

```prisma
model Profile {
  // ...

  phoneCountryCode String?
  phoneNumber      String?

  // ...
}
```

Example:

```text
phoneCountryCode: "+91"
phoneNumber:      "9876543210"
```

The backend treats these as one logical phone number while keeping them physically separate in the database.
