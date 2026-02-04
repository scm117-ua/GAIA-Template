from sqlalchemy import String, Boolean
from sqlalchemy.orm import Mapped, mapped_column

from app.infrastructure.persistence.models.base import Base

class AlloyModel(Base):
    __tablename__ = "alloys"

    # [Feature: Alloy Calculator] [Story: AC-PLAYER-002] [Ticket: AC-PLAYER-002-DB-T01]
    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    name: Mapped[str] = mapped_column(String, unique=True, index=True)
    slug: Mapped[str] = mapped_column(String, unique=True, index=True)
    enabled: Mapped[bool] = mapped_column(Boolean, default=True)
