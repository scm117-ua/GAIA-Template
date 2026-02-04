from typing import List
from app.domain.alloy_calculator.repository import AlloyRepository
from app.infrastructure.persistence.models.alloy import AlloyModel

class ListAlloysUseCase:
    def __init__(self, repository: AlloyRepository):
        self.repository = repository

    async def execute(self) -> List[AlloyModel]:
        return await self.repository.list_all()
