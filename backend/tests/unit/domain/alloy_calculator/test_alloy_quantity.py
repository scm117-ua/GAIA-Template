import pytest
from pydantic import ValidationError
from app.domain.alloy_calculator.models import AlloyQuantity, UnitType

def test_alloy_quantity_creation_units():
    # AC: Input amount in Units -> total calculation base should be 200 units
    quantity = AlloyQuantity(value=200, unit=UnitType.UNIT)
    assert quantity.value == 200
    assert quantity.unit == UnitType.UNIT
    assert quantity.to_units() == 200

def test_alloy_quantity_creation_ingots():
    # AC: Input amount in Ingots -> total calculation base should be 200 units (2 * 100)
    quantity = AlloyQuantity(value=2, unit=UnitType.INGOT)
    assert quantity.value == 2
    assert quantity.unit == UnitType.INGOT
    assert quantity.to_units() == 200

def test_alloy_quantity_negative_value():
    # AC: Negative Input (Edge Case) -> system should prevent input
    with pytest.raises(ValidationError):
        AlloyQuantity(value=-50, unit=UnitType.UNIT)

def test_alloy_quantity_to_ingots():
    quantity = AlloyQuantity(value=200, unit=UnitType.UNIT)
    assert quantity.to_ingots() == 2.0

    quantity2 = AlloyQuantity(value=5, unit=UnitType.INGOT)
    assert quantity2.to_ingots() == 5.0

