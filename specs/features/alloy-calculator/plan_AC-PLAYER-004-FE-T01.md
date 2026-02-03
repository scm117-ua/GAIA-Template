# AC-PLAYER-004-FE-T01 — Implementation Plan

**Source ticket**: `specs/features/alloy-calculator/tickets.md` → **AC-PLAYER-004-FE-T01**
**Related user story**: **AC-PLAYER-004** (from `specs/features/alloy-calculator/user-stories.md`)
**Plan version**: v1.0
**Traceability**: All tasks must include inline references to `AC-PLAYER-004`.

---

## 1) Context & Objective
- **Ticket summary**: Real-time validation feedback in UI.
- **Impacted services**: Frontend Component Logic.
- **Impacted tests**: Component Tests.

## 2) Scope
- **In scope**: Check rules (passed from BE) against current slider values. Show Green/Red indicators.
- **Assumptions**: Rules are available from Story 3's API response.

## 3) Detailed Work Plan (TDD + BDD)

### 3.1 Test-first sequencing
1. **Define Specs**: `ValidationFeedback.test.tsx`.
2. **Implement Logic**: Helper function or Zod schema for client-side check.
3. **Implement UI**: Visual integration in `CompositionAdjuster` or separate notification.

## 4) Atomic Task Breakdown

### Task 1: Client-Side Validation Logic
- **Purpose**: Immediate feedback.
- **Artifacts**: `src/features/alloy-calculator/utils/validation.ts`.

### Task 2: Visual Feedback
- **Purpose**: Show errors/success.
- **Artifacts**: `src/features/alloy-calculator/components/ValidationStatus.tsx`.
- **Test types**: Component.
- **BDD Acceptance**:
  - **Given** values are valid
  - **Then** show Green Check.
