# AC-PLAYER-002-FE-T01 — Implementation Plan

**Source ticket**: `specs/features/alloy-calculator/tickets.md` → **AC-PLAYER-002-FE-T01**
**Related user story**: **AC-PLAYER-002** (from `specs/features/alloy-calculator/user-stories.md`)
**Plan version**: v1.0
**Traceability**: All tasks must include inline references to `AC-PLAYER-002`.

---

## 1) Context & Objective
- **Ticket summary**: Implement a dropdown to select the target Alloy.
- **Impacted services**: Frontend (`src/features/alloy-calculator`).
- **Dependencies**: Backend API `GET /api/v1/alloys` (Ready).

## 2) Scope
- **In scope**: 
  - `AlloySelect` component (UI).
  - API Integration via React Query (`useAlloys`).
  - Unit/Component tests with MSW.
- **Out of scope**: 
  - Alloy Composition display (Story 3).

## 3) Detailed Work Plan (TDD + BDD)

### 3.1 Test-first sequencing
1. **Define Hook Test**: Test `useAlloys` hook with MSW mock.
2. **Define Component Test**: Test `AlloySelect` renders options from API.

### 3.2 NFR hooks
- **UX**: Show "Loading..." state while fetching.
- **Error Handling**: Graceful fallback if API fails.
- **Brand**: Use Shadcn Select component.

## 4) Atomic Task Breakdown

### Task 1: Setup React Query & API Client
- **Purpose**: Enable data fetching.
- **Artifacts**: `src/lib/react-query.ts`, `src/lib/axios.ts` (if not exists), `src/features/alloy-calculator/api/getAlloys.ts`.

### Task 2: Implement UseAlloys Hook
- **Purpose**: Fetcher logic.
- **Artifacts**: `src/features/alloy-calculator/api/getAlloys.ts`.
- **Test**: `src/features/alloy-calculator/api/getAlloys.test.ts`.

### Task 3: Implement AlloySelect Component
- **Purpose**: UI Component.
- **Artifacts**: `src/features/alloy-calculator/components/AlloySelect.tsx`.
- **Test**: `src/features/alloy-calculator/components/AlloySelect.test.tsx`.

## 5) Verification Plan
- **Automated**: `npx vitest` (Mocked backend).
- **Manual**: Run `npm run dev` + `docker compose up backend`, verify dropdown populates.
