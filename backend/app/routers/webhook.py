from fastapi import APIRouter, Request, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from core.session import get_session
from loguru import logger
from core.messages import (
    WELCOME_MSG, REGISTRATION_SUCCESS_MSG,
    BUSINESS_MSG
)
from app.models.merchant import OnboardingStage
from app.services.message_service import send_msg
from app.services.merchant_service import create_merchant

router = APIRouter(
    prefix="/webhook",
    tags=["webhook"],
)

@router.post("/whatsapp")
async def whatsapp_webhook(
    req: Request, 
    db: AsyncSession = Depends(get_session)
    ):
    """webhook to recieve whatsapp's event"""
    
    logger.info("listening for events....")
    resp = await req.json()

    if resp.get("event") != "messages.upsert":
        logger.info(f'ignoring event: {resp.get("event")}, no messages appeared on whatsapp...')
        return {"status": "ignored"}
    
    data = resp["data"]["messages"]
    from_me = data["key"]["fromMe"]
    phone_number = data["key"]["cleanedSenderPn"]
    message = data.get("messageBody", "")

    if from_me:
        logger.info('ignoring message sent by the merchant...')
        return {"status": "ignored"}
    
    merchant, created = await create_merchant(
        phone_number, 
        db
    )

    if created:
        try:
            await send_msg(phone_number, WELCOME_MSG)
            logger.success(f"sent welcome message to +{phone_number}")
        except Exception as e:
            logger.error(f"failed to send welcome message to +{phone_number}: {str(e)}")
            return HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to send welcome message. Please try again later."
            )


    if merchant.onboarding_stage == OnboardingStage.BUSINESS_NAME:
        merchant.business_name = message
        merchant.onboarding_stage = OnboardingStage.BUSINESS_TYPE
        await db.commit()

        try:
            await send_msg(phone_number, BUSINESS_MSG)
            logger.success(f"sent business type message to +{phone_number}")
        except Exception as e:
            logger.error(f"failed to send business type message to +{phone_number}: {str(e)}")
            return HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to send business message. Please try again later."
            )
    
    if merchant.onboarding_stage == OnboardingStage.BUSINESS_TYPE:
        merchant.onboarding_stage = OnboardingStage.COMPLETED
        await db.commit()

        try:
            await send_msg(phone_number, REGISTRATION_SUCCESS_MSG)
            logger.success(f"sent registration success message to +{phone_number}")
        except Exception as e:
            logger.error(f"failed to send registration success message to +{phone_number}: {str(e)}")
            return HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to send registration success message. Please try again later."
            )
        
    if merchant.onboarding_stage == OnboardingStage.COMPLETED:
        logger.info(f"merchant with whatsapp number +{phone_number} has completed onboarding.")
        

    return {"status": "ok"}