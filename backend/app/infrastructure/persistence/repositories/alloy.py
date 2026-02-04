from typing import List
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from app.domain.alloy_calculator.repository import AlloyRepository
from app.infrastructure.persistence.models.alloy import AlloyModel

class SQLAlchemyAlloyRepository(AlloyRepository):
    def __init__(self, session: AsyncSession):
        self.session = session

    async def list_all(self) -> List[AlloyModel]:
        result = await self.session.execute(select(AlloyModel).where(AlloyModel.enabled == True))
        return result.scalars().all()
