# Feature Specification: Alloy Calculator

## 0) Feature Name & Summary
**Feature Name:** Alloy Calculator

**Executive Summary (3–5 lines):**
- **Problem:** Players struggle to manually calculate the correct ratios of nuggets and ingots for complex alloys in Vintage Story, leading to wasted resources.
- **Opportunity:** Provide a dedicated calculator web interface that handles the math and constraints automatically.
- **Expected Outcome:** Players can quickly determine the exact materials needed for their desired alloy quantity, improving their gameplay experience.

**Fit with Vision / Product Goal:**
This aligns with the goal of creating useful utilities for the game community, enhancing the overall product value for players.

---

## 1) Description of the feature
A dedicated interface where the user can:
1.  Input the desired amount of alloy in **Units** or **Ingots** (100 units = 1 ingot).
2.  Select the **Alloy Type** from a dropdown list.
3.  Adjust the composition using **Clamped Sliders** for nuggets (1 nugget = 5 units).
4.  See the calculated percentages and verify if they are within the valid range for the selected alloy.

**Supported Alloys & Ratios:**
- **Tin Bronze:** Copper (88-92%), Tin (8-12%)
- **Bismuth Bronze:** Bismuth (10-20%), Copper (50-70%), Zinc (20-30%)
- **Black Bronze:** Copper (68-84%), Gold (8-16%), Silver (8-16%)
- **Brass:** Copper (60-70%), Zinc (30-40%)
- **Cupronickel:** Copper (65-75%), Nickel (25-35%)

---

## 2) Users/Roles & Impacted Personas

| Role/Persona | Key Objectives | Tasks / Jobs-to-be-done | Current Pain | Stakeholders |
|---|---|---|---|---|
| **Player** | Create alloys efficiently | Calculate nugget/ingot ratios | Mental math errors, wasting rare metals | None |

---

## 3) Problem / Opportunity Statement
**Context:** In the game *Vintage Story*, crafting alloys requires precise percentages of different metals.
**Problem Statement:** Players experience frustration and loss of materials when manually calculating these ratios, especially for ternary alloys like Bismuth Bronze.
**Why Now:** This is a high-value, low-complexity feature that establishes the utility of the application immediately.

---

## 4) Objectives & Business Outcomes

| Objective / Outcome | KPI / Metric | Baseline | Target | Time Horizon | Measurement Method |
|---|---|---|---|---|---|
| Reduce calculation errors | User reported success | N/A | High | Launch | Feedback / Usage |
| Usable tool for players | Unique Visitors | 0 | >100 | Q1 | Analytics |

---

## 5) Scope (In/Out)
**In scope:**
- Input field for total alloy amount (Units/Ingots toggle).
- Dropdown for Alloy Selection.
- Dynamic sliders for each metal in the alloy.
- Sliders snap/clamp to nugget values (steps of 5 units).
- Visual feedback for valid/invalid percentage ranges.
- Responsive web UI.

**Out of scope:**
- Inventory management integration.
- Reading game memory/save files.
- Other crafting mechanics (clay forming, smithing).

**Key Assumptions:**
- Game mechanic ratios remain stable (v1.18+ standards).

---

## 6) Non-Functional Requirements (NFRs)

### 6.1 Security & Privacy
- **Personal Data:** None. No user data storage required.
- **Compliance:** None specific.

### 6.2 Performance
- **Responsiveness:** Calculations must be instant (client-side).
- **Load:** Static asset delivery only; no heavy backend load.

### 6.3 Availability & Reliability
- **Uptime:** 99.9% (dependent on hosting).
- **Offline:** Should work offline if PWA is implemented (optional).

### 6.4 Accessibility (a11y) & Internationalization (i18n)
- **Accessibility:** WCAG 2.1 AA. Sliders must be keyboard accessible.
- **Languages:** English (Interface).

### 6.5 Observability
- basic error logging if logic fails (unlikely for pure client-side math).

---

### Annexes
- **Risks:** Game updates changing alloy ratios.
- **Mitigation:** Store ratios in a config file/constant for easy update.
