# app/models/user.py
from sqlalchemy import Column, Integer, String
from app.database import Base  # <- use this

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    password = Column(String, nullable=False)
    role = Column(String, nullable=False, default="user")
    avatar_url = Column(String, nullable=True)
    phone = Column(String, nullable=True)
