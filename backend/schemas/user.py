from pydantic import BaseModel, EmailStr, Field
from datetime import date
from enum import Enum

class Role(str, Enum):
    user = "USER"
    CompanyManager = "CompanyManager"
    admin = "ADMIN"

    class Config:
        orm_mode = True

class UserCreate(BaseModel):
    first_name: str = Field(example="John")
    last_name: str = Field(example="Doe")
    username: str = Field(example="johndoe")
    email: EmailStr = Field(example="john@gmail.com")
    password: str = Field(example="JohnDoe@123")
    join_date = date.today()
    role = Role.user
    github_url = str = Field(example="www.github.com/johndoe")
    linkedin_url = str = Field(example="www.linkedin.com/johndoe")
    twitter_url = str = Field(example="www.twitter.com/johndoe")
    facebook_url = str = Field(example="www.facebook.com/johndoe")
    instagram_url = str = Field(example="www.instagram.com/johndoe")
    verified = bool = Field(default=False)

    class Config:
        orm_mode = True


class ShowUser(BaseModel):
    first_name: str
    last_name: str
    username: str
    email: EmailStr
    join_date: date
    role: str

    class Config:
        orm_mode = True

class UsersList(BaseModel):
    users: list[ShowUser]

    class Config:
        orm_mode = True
