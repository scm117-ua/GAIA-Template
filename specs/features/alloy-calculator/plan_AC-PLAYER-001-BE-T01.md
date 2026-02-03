# AC-PLAYER-001-BE-T01 — Implementation Plan

**Source ticket**: `specs/features/alloy-calculator/tickets.md` → **AC-PLAYER-001-BE-T01**
**Related user story**: **AC-PLAYER-001** (from `specs/features/alloy-calculator/user-stories.md`)
**Plan version**: v1.0
**Traceability**: All tasks must include inline references to `AC-PLAYER-001`.

---

## 1) Context & Objective
- **Ticket summary**: Implement `AlloyQuantity` and `UnitType` in the Backend Domain layer, including conversion logic.
- **Impacted services/modules**: `backend/app/domain/alloy_calculator`.
- **Impacted tests**: Unit tests for Domain Models.

## 2) Scope
- **In scope**: Pydantic models for Quantity (Units/Ingots), Conversion logic (1 Ingot = 100 Units), Negative value validation.
- **Out of scope**: API Endpoints (covered in separate ticket).
- **Assumptions**: We are using Pydantic V2.

## 3) Detailed Work Plan (TDD + BDD)

### 3.1 Test-first sequencing
1. **Define Tests**: Create `backend/tests/unit/domain/test_alloy_quantity.py`.
   - Test strict positive validation.
   - Test conversion (Ingots -> Units).
2. **Implement Models**: Create `backend/app/domain/alloy_calculator/models.py`.
3. **Refactor**: Ensure clean usage.

### 3.2 NFR hooks
- **Security**: Validate inputs (no negative numbers) to prevent logic errors.
- **Observability**: N/A for pure domain logic.

## 4) Atomic Task Breakdown

### Task 1: Create Domain Module Structure
- **Purpose**: Initialize the alloy calculator domain package.
- **Prerequisites**: Docker container running.
- **Artifacts impacted**: `backend/app/domain/alloy_calculator/__init__.py`.
- **Test types**: N/A.
- **BDD Acceptance**: N/A.

### Task 2: Implement AlloyQuantity Domain Model
- **Purpose**: Define the core value object with validation and conversion.
- **Prerequisites**: Backend container.
- **Artifacts impacted**: `backend/app/domain/alloy_calculator/models.py`, `backend/tests/unit/domain/test_alloy_quantity.py`.
- **Test types**: Unit.
- **BDD Acceptance**:
  - **Given** I create an AlloyQuantity with 2 Ingots
  - **When** I ask for units
  - **Then** it returns 200.
  - **Given** I try to create AlloyQuantity with -50
  - **Then** it raises a ValidationError.
