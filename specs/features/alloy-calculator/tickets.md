# Alloy Calculator — Implementation Tickets

The Alloy Calculator feature allows players to calculate material ratios for crafting.
Implementation follows a Client-Server model where the **Backend** acts as the Source of Truth for Alloy Definitions and Logic (Domain), and the **Frontend** provides the interactive UX.
**Frontend Architecture**: Feature-based `src/features/alloy-calculator`.
**Backend Architecture**: Domain-driven `backend/app/domain/alloy_calculator`.

---

### Story: AC-PLAYER-001 — Set Target Alloy Amount
**Source**: `user-stories.md`
**Key Scenarios**: Input in Units, Input in Ingots, Negative Input.

#### Tickets for AC-PLAYER-001

1. - [x] **AC-PLAYER-001-DB-T01 — Review/Setup Data Models for Quantity** (2026-02-03)
   - **Type**: DB
   - **Description**: Verify if any DB constraints are needed for "Units" vs "Ingots". Since this is a calculation tool, likely no persistence is needed, but we must ensure the Data Model (Domain) supports these types.
   - **Scope**: Define `AlloyQuantity` Value Object in Domain (conceptual). No SQL changes expected.
   - **Deliverables**: Domain Entity/VO definition plan.

2. - [ ] **AC-PLAYER-001-BE-T01 — Define Quantity Domain Models**
   - **Type**: BE
   - **Description**: Implement `AlloyQuantity` and `UnitType` (Ingot/Unit) in the Backend Domain layer. Define conversion logic (1 Ingot = 100 Units) as a Domain Service or Value Object method.
   - **Scope**: `backend/app/domain/alloy_calculator`.
   - **Deliverables**: Pydantic models for Input/Output (even if not yet exposed via API, they form the ubiquitous language). Python Unit Tests.

3. - [ ] **AC-PLAYER-001-FE-T01 — Target Amount Input Component**
   - **Type**: FE
   - **Description**: Create the UI for entering amount and toggling between Units/Ingots. Implement validation (no negative numbers).
   - **Scope**: `AmountInput` component, Zod schema.
   - **Dependencies**: None.
   - **Deliverables**: Component, Unit Test (Vitest).

---

### Story: AC-PLAYER-002 — Select Alloy Type
**Source**: `user-stories.md`
**Key Scenarios**: Alloy selection loads components, Changing alloy resets.

#### Tickets for AC-PLAYER-002

1. - [ ] **AC-PLAYER-002-DB-T01 — Create Alloys Reference Table**
   - **Type**: DB (Migrations)
   - **Description**: Create a table/structure to hold Alloy Definitions (Name, Enabled).
   - **Scope**: New table `alloys` (or JSON config if preferred, but Table is standard).
   - **Deliverables**: Alembic Migration.

2. - [ ] **AC-PLAYER-002-BE-T01 — Alloy List Endpoint**
   - **Type**: BE
   - **Description**: Create `GET /api/v1/alloys` to list available alloys.
   - **Scope**: Router, Use Case, Repository.
   - **Deliverables**: OpenAPI endpoint, Integration Test.

3. - [ ] **AC-PLAYER-002-FE-T01 — Alloy Selector Component**
   - **Type**: FE
   - **Description**: Dropdown to select alloy. Fetches list from Backend (React Query).
   - **Scope**: `AlloySelect` component.
   - **Dependencies**: BE-T01.
   - **Deliverables**: Component wired to API, Mocked Server Test.

---

### Story: AC-PLAYER-003 — Adjust Alloy Composition
**Source**: `user-stories.md`
**Key Scenarios**: Slider steps (5 units), Dynamic sliders.

#### Tickets for AC-PLAYER-003

1. - [ ] **AC-PLAYER-003-DB-T01 — Store Alloy Composition Rules**
   - **Type**: DB
   - **Description**: Add columns/tables to store the detailed composition rules for each alloy (e.g., "Copper: 88-92%").
   - **Scope**: `alloy_components` table (FK to alloys) or JSONB column `composition_rules`.
   - **Deliverables**: Alembic Migration.

2. - [ ] **AC-PLAYER-003-BE-T01 — Alloy Details Domain & API**
   - **Type**: BE
   - **Description**: Ensure the Alloy details (components and min/max) are served. Could be part of List endpoint or Detail endpoint `GET /alloys/{id}`.
   - **Scope**: Domain Entity `AlloyComposition`.
   - **Deliverables**: Pydantic Schema Update, API Update, Tests.

3. - [ ] **AC-PLAYER-003-FE-T01 — Composition Sliders UI**
   - **Type**: FE
   - **Description**: Dynamic sliders based on selected alloy. Step = 5.
   - **Scope**: `CompositionAdjuster` component.
   - **Dependencies**: FE-T01 (Selector state).
   - **Deliverables**: Interactive UI, Vitest.

---

### Story: AC-PLAYER-004 — View Composition Validation
**Source**: `user-stories.md`
**Key Scenarios**: Valid composition, Invalid ratio, Invalid total.

#### Tickets for AC-PLAYER-004

1. - [ ] **AC-PLAYER-004-DB-T01 — Refine Constraint Definitions**
   - **Type**: DB
   - **Description**: Ensure Min/Max constraints are strictly defined in DB/Schema to support validation.
   - **Scope**: Review `alloy_components` constraints.
   - **Deliverables**: Migration (if changes needed) or specific Check Constraints.

2. - [ ] **AC-PLAYER-004-BE-T01 — Validation Domain Service**
   - **Type**: BE
   - **Description**: Implement `validate_composition(alloy, components)` in Domain. Essential for "End-to-end" correctness even if UI validates eagerly.
   - **Scope**: Domain Service. Use case not strictly required to be exposed if FE duplicates logic, BUT best practice is to expose `POST /alloys/{id}/validate` OR just unit test the Python logic to ensure rules are sound.
   - **Deliverables**: Domain Logic, Unit Tests (Parameterized).

3. - [ ] **AC-PLAYER-004-FE-T01 — Validation Feedback UI**
   - **Type**: FE
   - **Description**: Real-time validation visual feedback (Green/Red). Calculates total percentage.
   - **Scope**: Validation Logic (Zod/Custom), Visual indicators.
   - **Deliverables**: UI States, Tests.

---

## NFR Tickets (Cross-cutting)
- [ ] **AC-NFR-OTH-T01 — Performance Check** (Verify <100ms calc).
- [ ] **AC-NFR-OTH-T02 — A11y Verification** (Keyboard nav for sliders).
