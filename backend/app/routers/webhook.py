from fastapi import APIRouter
from typing import Dict
from loguru import logger


router = APIRouter(
    prefix="/webhook",
    tags=["webhook"],
)

@router.post("/whatsapp")
async def whatsapp_webhook(payload: Dict):
    """webhook to recieve whatsapp's event"""
    
    logger.info("listening for events....")
    logger.info(f"Event recieved with payload: {payload}")

    return {"status": "ok"}