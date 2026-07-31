# AI Development Workflow

## Development Philosophy

Develop this project using a **spec-driven, incremental workflow**.

The context files are the single source of truth for:

- What to build
- How the system should behave
- Current implementation progress
- Architectural constraints

Always implement against these specifications.
Do not invent features, workflows, or business logic that are not explicitly defined.

---

# Implementation Principles

- Build one feature or subsystem at a time.
- Prefer small, verifiable increments over large implementations.
- Ensure every completed unit is functional before moving to the next.
- Keep implementations loosely coupled and modular.
- Reuse existing components whenever possible.

---

# Scoping Rules

A single implementation task should focus on one logical responsibility.

Do **not** combine unrelated work such as:

- UI implementation + backend logic
- API development + database migrations
- Background jobs + frontend interactions
- Authentication + feature implementation
- Multiple unrelated API routes
- Multiple independent features

If a task cannot be tested end-to-end quickly, split it into smaller implementation units.

---

# Requirements Handling

Never assume missing product behavior.

If a requirement is:

### Clearly Defined

Implement it exactly as specified.

### Ambiguous

Pause implementation.

Clarify the requirement by updating the appropriate context document before writing code.

### Missing

Document it as an **Open Question** inside:

`progress-tracker.md`

Do not invent functionality to fill the gap.

---

# Architecture Rules

Never violate architectural decisions defined in:

`architecture-context.md`

This includes:

- Data flow
- State management
- Storage boundaries
- API responsibilities
- Module ownership
- Service boundaries

If implementation requires changing the architecture:

1. Update the architecture document first.
2. Then implement the change.

---

# Protected Foundation Components

Do not modify generated third-party foundation components unless explicitly instructed.

Examples:

- `components/ui/*` (shadcn/ui)
- library source code
- generated Prisma files
- generated Trigger.dev files

Instead:

- compose wrappers
- create feature-specific components
- extend behavior outside the generated code

Treat foundation code as immutable.

---

# Documentation Synchronization

Whenever implementation changes any of the following:

- Architecture
- Feature scope
- Database schema
- API contracts
- Storage model
- Folder structure
- Coding conventions
- User flows

Update the appropriate context document before marking the task complete.

Documentation must always reflect the current implementation.

---

# Progress Tracking

After completing every implementation unit:

- Mark completed tasks.
- Record architectural decisions.
- Record newly discovered limitations.
- Record open questions.
- Update implementation status.

Never leave completed work undocumented.

---

# Verification Checklist

Before moving to the next implementation unit, verify that:

- The feature works end-to-end.
- The implementation matches the specifications.
- No architectural invariant was violated.
- No unrelated functionality was modified.
- Documentation has been updated.
- Progress tracker reflects the current implementation state.

Only then continue to the next unit.

---

# General Coding Guidelines

- Keep components small and focused.
- Prefer composition over duplication.
- Avoid premature optimization.
- Write readable code before clever code.
- Follow existing project conventions.
- Keep business logic separate from presentation logic.
- Avoid unnecessary abstractions until they provide clear value.

---

# Decision Hierarchy

When conflicts arise, follow this order of precedence:

1. Context files
2. Architecture document
3. Feature specification
4. Existing project conventions
5. AI judgment (only when none of the above provide guidance)

Never override a higher-priority source without updating the documentation first.
