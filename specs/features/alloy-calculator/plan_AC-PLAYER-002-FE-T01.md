# AC-PLAYER-002-FE-T01 — Implementation Plan

**Source ticket**: `specs/features/alloy-calculator/tickets.md` → **AC-PLAYER-002-FE-T01**
**Related user story**: **AC-PLAYER-002** (from `specs/features/alloy-calculator/user-stories.md`)
**Plan version**: v1.0
**Traceability**: All tasks must include inline references to `AC-PLAYER-002`.

---

## 1) Context & Objective
- **Ticket summary**: Dropdown component to select alloy, fetching data from Backend.
- **Impacted services**: Frontend Component, React Query.
- **Impacted tests**: Component + MSW.

## 2) Scope
- **In scope**: `AlloySelect` component, Recat Query hook `useAlloys`.
- **Out of scope**: Composition display (handled in next story).

## 3) Detailed Work Plan (TDD + BDD)

### 3.1 Test-first sequencing
1. **Define Specs**: `src/features/alloy-calculator/components/AlloySelect.test.tsx`.
   - Mock API with MSW.
   - Test loading state.
   - Test selection event.
2. **Implement API Hook**: `src/features/alloy-calculator/api.ts`.
3. **Implement Component**: `src/features/alloy-calculator/components/AlloySelect.tsx`.

### 3.2 NFR hooks
- **Accessibility**: Combobox/Select must be accessible.

## 4) Atomic Task Breakdown

### Task 1: Implement API Hook
- **Purpose**: Fetch logic.
- **Artifacts**: `src/features/alloy-calculator/api.ts`.

### Task 2: Implement Selector Component
- **Purpose**: UI Dropdown.
- **Artifacts**: `src/features/alloy-calculator/components/AlloySelect.tsx`.
- **Test types**: Component.
- **BDD Acceptance**:
  - **Given** the API returns "Tin Bronze"
  - **When** I open the dropdown
  - **Then** "Tin Bronze" is an option.
