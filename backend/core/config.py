from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import Field, field_validator
from functools import lru_cache
from typing import List


class Settings(BaseSettings):
    """Application settings"""
    model_config = SettingsConfigDict(
        env_file=".env", 
        env_file_encoding="utf-8", 
        case_sensitive=True,
    )

    PORT: int = Field(default=8000)
    DATABASE_URL_DEV: str = Field(...)
    DATABASE_URL_PROD: str = Field(...)
    ALLOWED_ORIGINS: str = Field(
         default="http://localhost:3000,http://localhost:5173,https://"
    )
    WASENDER_API_KEY: str = Field(...)


    @field_validator("ALLOWED_ORIGINS")
    def parse_allowed_origins(cls, v: str) -> List[str]:
        return [origin.strip() for origin in v.split(",")] if v else []


@lru_cache
def app_settings():
    """Exported function to fetch env variables."""
    return Settings()

settings = app_settings()