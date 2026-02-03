# AC-PLAYER-004-DB-T01 — Implementation Plan

**Source ticket**: `specs/features/alloy-calculator/tickets.md` → **AC-PLAYER-004-DB-T01**
**Related user story**: **AC-PLAYER-004** (from `specs/features/alloy-calculator/user-stories.md`)
**Plan version**: v1.0
**Traceability**: All tasks must include inline references to `AC-PLAYER-004`.

---

## 1) Context & Objective
- **Ticket summary**: Refine DB constraints for validation integrity.
- **Impacted entities**: `alloy_components`.

## 2) Scope
- **In scope**: Check constraints (e.g., min_percentage >= 0, max_percentage <= 100).
- **Out of scope**: Business logic validation.

## 3) Detailed Work Plan (TDD + BDD)

### 3.1 Test-first sequencing
1. **Define Schema**: Add `CheckConstraint` to SQLAlchemy model.
2. **Migration**: Generate.

## 4) Atomic Task Breakdown

### Task 1: Add DB Constraints
- **Purpose**: Data integrity.
- **Artifacts**: `backend/app/infrastructure/persistence/models/alloy_component.py`.

### Task 2: Migration
- **Purpose**: Apply.
- **Artifacts**: Alembic.
