# AC-PLAYER-004-BE-T01 — Implementation Plan

**Source ticket**: `specs/features/alloy-calculator/tickets.md` → **AC-PLAYER-004-BE-T01**
**Related user story**: **AC-PLAYER-004** (from `specs/features/alloy-calculator/user-stories.md`)
**Plan version**: v1.0
**Traceability**: All tasks must include inline references to `AC-PLAYER-004`.

---

## 1) Context & Objective
- **Ticket summary**: Implement validation logic (`validate_composition`) in Domain.
- **Impacted services**: Domain Service.
- **Impacted tests**: Unit Tests.

## 2) Scope
- **In scope**: Validate that current percentages match the rules (min/max) and sum to 100% (if checking full status).
- **Out of scope**: UI feedback.

## 3) Detailed Work Plan (TDD + BDD)

### 3.1 Test-first sequencing
1. **Define Test**: `test_validation_service.py`.
   - Test "Copper too high".
   - Test "Valid composition".
2. **Implement Logic**: `backend/app/domain/alloy_calculator/services.py`.

## 4) Atomic Task Breakdown

### Task 1: Implement Validation Service
- **Purpose**: Core business rules.
- **Artifacts**: `backend/app/domain/alloy_calculator/services.py`.
- **Test types**: Unit.
- **BDD Acceptance**:
  - **Given** Copper is 90% (Max 70%)
  - **When** I validate
  - **Then** I get an error "Copper too high".
