# User Stories: Alloy Calculator

## 0. Introduction
The Alloy Calculator enables players to accurately calculate ingot and nugget ratios for complex alloys in Vintage Story.
**Objectives:**
- Reduce calculation errors (KPI: User reported success).
- Provide a usable tool for players (KPI: >100 Unique Visitors).

---

## 1. User Stories

### Story: AC-PLAYER-001 - Set Target Alloy Amount
**As a** Player,
**I want** to input the total amount of alloy I wish to craft in either units or ingots,
**So that** I calculate materials for the exact batch size I need.

**Acceptance Criteria:**
- **Scenario 1: Input amount in Units**
  - **Given** the calculator is open
  - **And** the "Units" toggle is selected
  - **When** I enter "200"
  - **Then** the total calculation base should be 200 units.

- **Scenario 2: Input amount in Ingots**
  - **Given** the calculator is open
  - **And** the "Ingots" toggle is selected
  - **When** I enter "2"
  - **Then** the total calculation base should be 200 units (2 * 100).

- **Scenario 3: Negative Input (Edge Case)**
  - **Given** the input field is active
  - **When** I try to enter "-50"
  - **Then** the system should prevent the input or clamp it to 0.

---

### Story: AC-PLAYER-002 - Select Alloy Type
**As a** Player,
**I want** to select a specific alloy from a list,
**So that** the calculator loads the correct metal components and validity ratios.

**Acceptance Criteria:**
- **Scenario 1: Alloy Selection loads components**
  - **Given** the dropdown contains "Bismuth Bronze"
  - **When** I select "Bismuth Bronze"
  - **Then** the interface displays sliders for Bismuth, Copper, and Zinc.
  - **And** the validation rules update to Bismuth (10-20%), Copper (50-70%), Zinc (20-30%).

- **Scenario 2: Change Alloy resets composition**
  - **Given** I have selected "Tin Bronze"
  - **When** I switch to "Brass"
  - **Then** the previous values are reset/recalculated for the new alloy.

---

### Story: AC-PLAYER-003 - Adjust Alloy Composition
**As a** Player,
**I want** to adjust the amount of each metal using sliders that snap to nugget values,
**So that** I can easily explore valid compositions without doing math.

**Acceptance Criteria:**
- **Scenario 1: Slider Steps**
  - **Given** a slider for "Copper"
  - **When** I drag or click the slider
  - **Then** the value changes in increments of 5 units (1 nugget).

- **Scenario 2: Dependent Sliders (Optional/Nice to Have)**
  - **Given** there are 3 metals
  - **When** I increase "Copper"
  - **Then** the other sliders adjust or the total percentage updates to reflect the change.

---

### Story: AC-PLAYER-004 - View Composition Validation
**As a** Player,
**I want** to see clear feedback if my alloy composition is valid or invalid,
**So that** I don't craft a useless item in-game.

**Acceptance Criteria:**
- **Scenario 1: Valid Composition**
  - **Given** Bismuth Bronze is selected
  - **And** Bismuth is 15%, Copper is 60%, Zinc is 25% (Total 100%)
  - **When** I check the status
  - **Then** the system shows a "Valid" indicator (e.g., green checkmark).

- **Scenario 2: Invalid Ratio**
  - **Given** Copper is 90% for Bismuth Bronze (Max 70%)
  - **When** the values update
  - **Then** the system highlights the Copper component as "Too High".

- **Scenario 3: Invalid Total**
  - **Given** the sum of all percentages is 95%
  - **When** I look at the summary
  - **Then** the system warns that the total must be 100%.

---

## 2. NFR Mapping

| ID | Requirement | Related Story | Verification |
|---|---|---|---|
| **NFR-PERF-01** | Instant Calculations (<100ms) | AC-PLAYER-003 | Browser Perf Profile |
| **NFR-A11Y-01** | Sliders keyboard accessible | AC-PLAYER-003 | Keyboard Tab/Arrow test |
| **NFR-RESP-01** | Mobile Compatible UI | All | Chrome DevTools device mode |
