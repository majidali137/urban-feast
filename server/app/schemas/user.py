from pydantic import BaseModel, EmailStr
from typing import Optional

class UserCreate(BaseModel):
    name: str
    email: EmailStr  # Use EmailStr for email validation
    password: str
    role: Optional[str] = "user"
    avatar_url: Optional[str] = None
    phone: Optional[str] = None

class UserResponse(BaseModel):
    id: int
    name: str
    email: str
    role: str
    avatar_url: Optional[str] = None
    phone: Optional[str] = None

    class Config:
        from_attributes = True