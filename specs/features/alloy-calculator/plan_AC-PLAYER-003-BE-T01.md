# AC-PLAYER-003-BE-T01 — Implementation Plan

**Source ticket**: `specs/features/alloy-calculator/tickets.md` → **AC-PLAYER-003-BE-T01**
**Related user story**: **AC-PLAYER-003** (from `specs/features/alloy-calculator/user-stories.md`)
**Plan version**: v1.0
**Traceability**: All tasks must include inline references to `AC-PLAYER-003`.

---

## 1) Context & Objective
- **Ticket summary**: Serve alloy details (components and limits).
- **Impacted services**: `GET /api/v1/alloys/{id}` or expand `GET /api/v1/alloys`.
- **Impacted tests**: API Tests.

## 2) Scope
- **In scope**: Relation loading in Repository (Alloy -> Components), DTO updates.
- **Out of scope**: Validation logic (Story 4).

## 3) Detailed Work Plan (TDD + BDD)

### 3.1 Test-first sequencing
1. **Update Test**: `test_alloys.py`. Expect "components" list in response.
2. **Update Models**: Pydantic schemas.
3. **Update Repository**: Join `alloy_components`.

## 4) Atomic Task Breakdown

### Task 1: Update Domain Models
- **Purpose**: Include component list in Alloy entity.
- **Artifacts**: `backend/app/domain/alloy_calculator/models.py`.

### Task 2: Update Repository & API
- **Purpose**: Fetch and return components.
- **Artifacts**: `backend/app/infrastructure/persistence/repositories/alloy.py`.
- **Test types**: Integration.
- **BDD Acceptance**:
  - **When** I fetch "Bismuth Bronze"
  - **Then** I see Bismuth, Copper, Zinc in the response.
