from datetime import datetime,timedelta
from typing import Optional
from jose import JWTError, jwt
from schemas.users import UserCreate as User
from database.repository.users import get_user_by_email, get_user_by_username
from fastapi import HTTPException, Header, Depends, Query
from core.config import settings
from core.hashing import Hash
from database.sessions import get_db
from sqlalchemy.orm import Session

def authenticate_user(username: str, password: str):
    user = get_user_by_username(username)
    if not user:
        return False
    if not Hash.verify_password(user.password, password):
        return False
    return user

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
    return encoded_jwt

def get_current_user(auth_token: Optional[str] = Query(None), db: Session = Depends(get_db)) -> User:
    if auth_token is None:
        raise HTTPException(status_code=401, detail="Not authenticated")

    try:
        payload = jwt.decode(auth_token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        email = payload.get("sub")

        if not email:
            raise HTTPException(status_code=401, detail="Invalid authentication credentials A")

        user = get_user_by_email(email, db)

        if user is None:
            raise HTTPException(status_code=401, detail=f"Invalid authentication credentials B, {email} {payload}")
        
        return user
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid authentication credentials")