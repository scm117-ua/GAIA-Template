from typing import List
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.infrastructure.persistence.database import get_db
from app.infrastructure.persistence.repositories.alloy import SQLAlchemyAlloyRepository
from app.application.alloy_calculator.list_alloys import ListAlloysUseCase
from app.presentation.schemas.alloy import AlloyResponse

router = APIRouter()

async def get_repository(db: AsyncSession = Depends(get_db)) -> SQLAlchemyAlloyRepository:
    return SQLAlchemyAlloyRepository(db)

async def get_use_case(repo: SQLAlchemyAlloyRepository = Depends(get_repository)) -> ListAlloysUseCase:
    return ListAlloysUseCase(repo)

@router.get("/alloys", response_model=List[AlloyResponse])
async def list_alloys(use_case: ListAlloysUseCase = Depends(get_use_case)):
    return await use_case.execute()
