# AC-PLAYER-001-DB-T01 — Implementation Plan

**Source ticket**: `specs/features/alloy-calculator/tickets.md` → **AC-PLAYER-001-DB-T01**
**Related user story**: **AC-PLAYER-001** (from `specs/features/alloy-calculator/user-stories.md`)
**Plan version**: v1.0
**Traceability**: All tasks must include inline references to `AC-PLAYER-001`.

---

## 1) Context & Objective
- **Ticket summary**: Review and setup the Data Model concepts for handling Alloy Quantities (Units vs Ingots).
- **Impacted entities/tables**: None (No persistence required for this specific calculation logic yet).
- **Impacted services/modules**: Domain Layer (Alloy Value Objects).
- **Impacted tests**: N/A (Documentation/Design task).

## 2) Scope
- **In scope**: defining the `AlloyQuantity` concept and ensuring the Domain Model supports the conversion logic.
- **Out of scope**: SQL migrations (since this is a calculator tool, no data is persisted per user yet).
- **Assumptions**: The system will handle conversions in memory.

## 3) Detailed Work Plan

### 3.1 Data Model Design
1. **Define Value Objects**: Document the `AlloyQuantity` structure in `specs/DataModel.md`.
2. **Review Constraints**: Ensure we handle negative numbers effectively at the model level (conceptually).

### 3.2 NFR hooks
- **Maintainability**: Ensure the data model documentation is up to date with the non-persistent entities.

## 4) Atomic Task Breakdown

### Task 1: Document Domain Entities
- **Purpose**: Define the `AlloyQuantity` and `UnitType` in the conceptual data model.
- **Prerequisites**: None.
- **Artifacts impacted**: `specs/DataModel.md`.
- **Test types**: N/A (Doc only).
- **BDD Acceptance**: N/A.
