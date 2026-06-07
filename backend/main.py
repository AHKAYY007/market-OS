import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from loguru import logger
from core.config import settings
from app import models
from core.session import init_db
from app.routers import webhook

@asynccontextmanager
async def lifespan(app: FastAPI):
    """Async contextmanager"""
    logger.info("Application starting....")
    # await init_db()
    logger.info("Database sync succesful....")
    yield
    logger.info("Application shutting down....")

app = FastAPI(
    title="MarketOS API",
    description="""An AI operating system for local commerce. 
    MarketOS syncs automatically to your whastapp and comes packed with 
    features out of the box to keep track of inventory, sales, profits, etc. 
    It's your AI-assisted bookkeeping bot.""",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(webhook.router)

@app.get("/")
async def root():
    """Root Endpoint"""
    logger.info("Reading root...")
    return {
        "message": "MarketOS API running...",
        "status": "healthy"
    }

if __name__ == "__main__":
    uvicorn.run(
        app,
        host="0.0.0.0",
        port=settings.PORT,
    )
