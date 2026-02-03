# AC-PLAYER-001-FE-T01 — Implementation Plan

**Source ticket**: `specs/features/alloy-calculator/tickets.md` → **AC-PLAYER-001-FE-T01**
**Related user story**: **AC-PLAYER-001** (from `specs/features/alloy-calculator/user-stories.md`)
**Plan version**: v1.0
**Traceability**: All tasks must include inline references to `AC-PLAYER-001`.

---

## 1) Context & Objective
- **Ticket summary**: Create the UI for entering amount and toggling between Units/Ingots.
- **Impacted services/modules**: `src/features/alloy-calculator/components`.
- **Impacted tests**: Component tests (Vitest).

## 2) Scope
- **In scope**: `AmountInput` component, Unit/Ingot Toggle, Zod Validation Schema.
- **Out of scope**: Sending data to backend (just local state management for now).
- **Assumptions**: Using shadcn/ui components (Input, Button/ToggleGroup).

## 3) Detailed Work Plan (TDD + BDD)

### 3.1 Test-first sequencing
1. **Define Specs**: Create `src/features/alloy-calculator/components/AmountInput.test.tsx`.
   - Test rendering.
   - Test input updates.
   - Test toggle switching.
   - Test validation error display.
2. **Implement Component**: Create `src/features/alloy-calculator/components/AmountInput.tsx`.
3. **Refactor**: Optimize re-renders and styles.

### 3.2 NFR hooks
- **Accessibility**: ARIA labels for input and toggle. Keyboard navigable.
- **Brand**: Use primary colors for active toggle state.
- **Performance**: Instant validation feedback.

## 4) Atomic Task Breakdown

### Task 1: Set up Feature Directory
- **Purpose**: Prepare folder structure.
- **Prerequisites**: Check `frontend` container.
- **Artifacts impacted**: `src/features/alloy-calculator/`.
- **Test types**: N/A.

### Task 2: Implement AmountInput Component
- **Purpose**: Create the visual input with toggle.
- **Prerequisites**: shadcn components available.
- **Artifacts impacted**: `src/features/alloy-calculator/components/AmountInput.tsx`, `src/features/alloy-calculator/schemas.ts` (Zod).
- **Test types**: Component (Vitest).
- **BDD Acceptance**:
  - **Given** the AmountInput is rendered
  - **When** I type "200"
  - **Then** the value is updated.
  - **When** I click "Ingots"
  - **Then** the mode changes to Ingots.
