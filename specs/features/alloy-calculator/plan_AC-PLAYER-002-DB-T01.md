# AC-PLAYER-002-DB-T01 — Implementation Plan

**Source ticket**: `specs/features/alloy-calculator/tickets.md` → **AC-PLAYER-002-DB-T01**
**Related user story**: **AC-PLAYER-002** (from `specs/features/alloy-calculator/user-stories.md`)
**Plan version**: v1.0
**Traceability**: All tasks must include inline references to `AC-PLAYER-002`.

---

## 1) Context & Objective
- **Ticket summary**: Create the `alloys` reference table to store alloy definitions.
- **Impacted entities**: `alloys` table.
- **Impacted services**: Backend Infrastructure (SQLAlchemy models).
- **Impacted tests**: Schema verification.

## 2) Scope
- **In scope**: New standard table `alloys` (id, name, slug, enabled).
- **Out of scope**: Composition rules (handled in Story 3).
- **Assumptions**: We use standard Alembic migrations.

## 3) Detailed Work Plan (TDD + BDD)

### 3.1 Test-first sequencing
1. **Define Model**: Create `backend/app/domain/alloy_calculator/models.py` (Entity).
2. **Define Schema**: Create `backend/app/infrastructure/persistence/models/alloy.py`.
3. **Migration**: Generate Alembic migration.

### 3.2 NFR hooks
- **Maintainability**: Use Slug for URL-friendly logic.

## 4) Atomic Task Breakdown

### Task 1: Create Alloy SQLAlchemy Model
- **Purpose**: Define the persistence schema.
- **Prerequisites**: DB Container healthy.
- **Artifacts impacted**: `backend/app/infrastructure/persistence/models/alloy.py`.
- **Test types**: Unit/Integration.
- **BDD Acceptance**: N/A (Internal).

### Task 2: Generate Migration
- **Purpose**: Apply schema to DB.
- **Prerequisites**: Task 1.
- **Artifacts impacted**: `backend/alembic/versions/*`.
- **Test types**: Infrastructure.
- **BDD Acceptance**: N/A.
