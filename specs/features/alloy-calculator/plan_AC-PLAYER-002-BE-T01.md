# AC-PLAYER-002-BE-T01 — Implementation Plan

**Source ticket**: `specs/features/alloy-calculator/tickets.md` → **AC-PLAYER-002-BE-T01**
**Related user story**: **AC-PLAYER-002** (from `specs/features/alloy-calculator/user-stories.md`)
**Plan version**: v1.0
**Traceability**: All tasks must include inline references to `AC-PLAYER-002`.

---

## 1) Context & Objective
- **Ticket summary**: Create `GET /api/v1/alloys` to list available alloys.
- **Impacted services**: `backend/app/presentation/api/v1/alloys`.
- **Impacted tests**: Integration tests for API.

## 2) Scope
- **In scope**: Router, Controller, Use Case, Repository for listing alloys.
- **Out of scope**: Modifying alloys (ReadOnly for now).

## 3) Detailed Work Plan (TDD + BDD)

### 3.1 Test-first sequencing
1. **Define Test**: `backend/tests/integration/api/test_alloys.py`.
   - **Scenario**: GET /alloys returns 200 and list of alloys.
2. **Implement Layer**:
   - DTOs (`presentation/schemas/alloy.py`).
   - Repository Interface (`domain/ports`).
   - Use Case (`application/use_cases/list_alloys.py`).
   - Router (`presentation/api/v1/routers/alloys.py`).
3. **Wire up**: `backend/app/main.py`.

### 3.2 NFR hooks
- **Performance**: Ensure DB query is efficient (SELECT * FROM alloys).
- **Security**: Public endpoint (no Auth required per PRD).

## 4) Atomic Task Breakdown

### Task 1: Create Repository Interface & Mock
- **Purpose**: Define how to fetch alloys.
- **Artifacts**: `backend/app/domain/alloy_calculator/repository.py`.

### Task 2: Implement Use Case
- **Purpose**: Orchestrate fetching.
- **Artifacts**: `backend/app/application/alloy_calculator/list_alloys.py`.

### Task 3: Implement API Router
- **Purpose**: Expose HTTP endpoint.
- **Artifacts**: `backend/app/presentation/api/v1/alloys.py`.
- **Test types**: Integration.
- **BDD Acceptance**:
  - **When** I request GET /api/v1/alloys
  - **Then** I receive a list of alloys.
