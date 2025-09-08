from fastapi import APIRouter

router = APIRouter(
    prefix="/auth",
    tags=["Auth"]
)

@router.get("/ping")
async def ping():
    return {"message": "Auth router working!"}
