from enum import Enum
from pydantic import BaseModel, Field, field_validator

class UnitType(str, Enum):
    INGOT = "ingot"
    UNIT = "unit"

class AlloyQuantity(BaseModel):
    # [Feature: Alloy Calculator] [Story: AC-PLAYER-001] [Ticket: AC-PLAYER-001-BE-T01]
    value: float = Field(..., description="The amount of alloy")
    unit: UnitType = Field(..., description="The unit of the amount")
    
    @field_validator("value")
    @classmethod
    def validate_positive(cls, v: float) -> float:
        if v < 0:
            raise ValueError("Quantity must be non-negative")
        return v
    
    def to_units(self) -> float:
        if self.unit == UnitType.INGOT:
            return self.value * 100.0
        return self.value
    
    def to_ingots(self) -> float:
        if self.unit == UnitType.INGOT:
            return self.value
        return self.value / 100.0
