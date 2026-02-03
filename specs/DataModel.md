# Data Model

## 1. Domain Entities (Conceptual)

### 1.1 Alloy Calculator Domain

#### Value Object: `AlloyQuantity`
Represents the amount of alloy to be crafted. It abstracts the unit conversion logic.
- **Attributes**:
  - `value`: Float (Positive)
  - `unit`: Enum (`INGOT`, `UNIT`)
- **Behaviors**:
  - `to_units()`: Returns value in game units (1 Ingot = 100 Units).
  - `to_ingots()`: Returns value in ingots.
- **Constraints**:
  - Value must be >= 0.

## 2. Persistence Schema (ERD)
*No persistence required for Alloy Calculator basic logic (Client-side calculation).*
