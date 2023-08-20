from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from datetime import timedelta
from core.config import settings
from core.hashing import Hash
from core.emailValidation import validateEmail

from database.repository.user import create_new_user, authenticate_user


