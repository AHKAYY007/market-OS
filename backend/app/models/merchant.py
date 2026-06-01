from sqlmodel import SQLModel, Field
from uuid import uuid4, UUID
from datetime import datetime, UTC
from typing import Optional

class Merchant(SQLModel, table=True):
    """Entity for local merchant"""

    id: UUID = Field(primary_key=True, default_factory=uuid4)
    whatsapp_no: str = Field(...)
    business_name: Optional[str] = Field(...)
    created_at: datetime = Field(default_factory=datetime.now(UTC).isoformat)