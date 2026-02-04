from sqlalchemy import String, Integer, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.infrastructure.persistence.models.base import Base

class AlloyComponentModel(Base):
    __tablename__ = "alloy_components"

    # [Feature: Alloy Calculator] [Story: AC-PLAYER-003] [Ticket: AC-PLAYER-003-DB-T01]
    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    alloy_id: Mapped[int] = mapped_column(ForeignKey("alloys.id"), nullable=False, index=True)
    metal_name: Mapped[str] = mapped_column(String, nullable=False)
    min_percentage: Mapped[int] = mapped_column(Integer, nullable=False)
    max_percentage: Mapped[int] = mapped_column(Integer, nullable=False)

    # Relationships
    alloy = relationship("AlloyModel", back_populates="components")
