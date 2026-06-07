from sqlmodel import SQLModel, Field
from uuid import uuid4, UUID
from datetime import datetime, UTC
from typing import Optional
from enum import StrEnum

class OnboardingStage(StrEnum):
    """Model for merchant onboarding stage"""

    BUSINESS_NAME = "business_name"
    BUSINESS_TYPE = "business_type"
    COMPLETED = "completed"


class Merchant(SQLModel, table=True):
    """Entity for local merchant"""

    id: UUID = Field(primary_key=True, default_factory=uuid4)
    whatsapp_no: str = Field(..., unique=True, index=True)
    business_name: Optional[str] = Field(...)
    onboarding_stage: OnboardingStage = Field(default=OnboardingStage.BUSINESS_NAME)
    created_at: datetime = Field(default_factory=datetime.now(UTC))