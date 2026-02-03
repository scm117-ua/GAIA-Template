# AC-PLAYER-003-DB-T01 — Implementation Plan

**Source ticket**: `specs/features/alloy-calculator/tickets.md` → **AC-PLAYER-003-DB-T01**
**Related user story**: **AC-PLAYER-003** (from `specs/features/alloy-calculator/user-stories.md`)
**Plan version**: v1.0
**Traceability**: All tasks must include inline references to `AC-PLAYER-003`.

---

## 1) Context & Objective
- **Ticket summary**: Store composition rules (min/max percentages) for each alloy.
- **Impacted entities**: `alloy_components` table or `composition_rules` JSONB.
- **Impacted services**: Backend Infrastructure.

## 2) Scope
- **In scope**: New table `alloy_components` related to `alloys`.
- **Fields**: metal_name, min_percentage, max_percentage.

## 3) Detailed Work Plan (TDD + BDD)

### 3.1 Test-first sequencing
1. **Define Model**: `backend/app/infrastructure/persistence/models/alloy_component.py`.
2. **Review Constraints**: Ensure percentages are stored correctly (Integer or Float).
3. **Migration**: Generate.

### 3.2 NFR hooks
- **Integrity**: FK to `alloys` table.

## 4) Atomic Task Breakdown

### Task 1: Create AlloyComponent Model
- **Purpose**: Store the rules.
- **Artifacts**: `backend/app/infrastructure/persistence/models/alloy_component.py`.

### Task 2: Generate Migration
- **Purpose**: Persist schema.
- **Artifacts**: Alembic.
