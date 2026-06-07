from fastapi import APIRouter, Request
from typing import Dict
from loguru import logger


router = APIRouter(
    prefix="/webhook",
    tags=["webhook"],
)

@router.post("/whatsapp")
async def whatsapp_webhook(req: Request):
    """webhook to recieve whatsapp's event"""
    
    logger.info("listening for events....")
    resp = await req.json()
    logger.info(f"Event recieved with payload: {resp}")

    return {"status": "ok"}