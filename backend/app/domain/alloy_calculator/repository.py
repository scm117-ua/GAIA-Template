from abc import ABC, abstractmethod
from typing import List
from app.infrastructure.persistence.models.alloy import AlloyModel

# Note: In pure DDD we should return Domain Entities, but for simplicity in this template
# we might direct to return Pydantic Models or ORM models if mapped.
# Ideally: repository returns Domain Entity -> Use Case returns Domain Entity -> Controller maps to DTO.
# Here we will define the interface to return a list of Alloy "definitions".
# Since we haven't strictly defined a separate Domain Entity for Alloy (only AlloyQuantity Value Object),
# we will assume we map to a simple dictionary or DTO-like structure for now, 
# OR use the SQLAlchemy model if we are being pragmatic.
# Let's return the ORM Model for now and let proper mapping happen at boundaries, 
# or better: Define a Domain Entity.

# Let's verify if we have a pure Alloy Domain Entity. We don't.
# Logic: Let's assume the Repository returns the ORM model for now to keep it simple 
# until we need rich behavior on the Alloy itself.

class AlloyRepository(ABC):
    @abstractmethod
    async def list_all(self) -> List[AlloyModel]:
        """List all available alloys."""
        pass
