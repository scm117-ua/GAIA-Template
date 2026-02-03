# AC-PLAYER-003-FE-T01 — Implementation Plan

**Source ticket**: `specs/features/alloy-calculator/tickets.md` → **AC-PLAYER-003-FE-T01**
**Related user story**: **AC-PLAYER-003** (from `specs/features/alloy-calculator/user-stories.md`)
**Plan version**: v1.0
**Traceability**: All tasks must include inline references to `AC-PLAYER-003`.

---

## 1) Context & Objective
- **Ticket summary**: Dynamic sliders for the composition.
- **Impacted services**: `CompositionAdjuster` component.
- **Impacted tests**: Component Interaction.

## 2) Scope
- **In scope**: Render N sliders based on selected Alloy. Step = 5 (nugget). Update local state.
- **Out of scope**: Validation (Story 4).

## 3) Detailed Work Plan (TDD + BDD)

### 3.1 Test-first sequencing
1. **Define Specs**: `src/features/alloy-calculator/components/CompositionAdjuster.test.tsx`.
   - Test dynamic rendering (3 sliders for Bismuth Bronze).
   - Test step constraint (only multiple of 5).
2. **Implement Component**: `src/features/alloy-calculator/components/CompositionAdjuster.tsx`.

### 3.2 NFR hooks
- **Accessibility**: Keyboard support (Arrow keys move by step).

## 4) Atomic Task Breakdown

### Task 1: Implement Component
- **Purpose**: User Interaction.
- **Artifacts**: `src/features/alloy-calculator/components/CompositionAdjuster.tsx`.
- **Test types**: Component.
- **BDD Acceptance**:
  - **Given** I selected Bismuth Bronze
  - **Then** I see 3 sliders.
  - **When** I move one slider
  - **Then** the value updates in steps of 5.
