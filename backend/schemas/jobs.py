from pydantic import BaseModel, EmailStr, Field
from datetime import date
from enum import Enum

class job(BaseModel):
    name: str = Field(example="Software Engineer")
    description: str = Field(example="Software engineers are responsible for the complete life cycle of a new or modified software product, from research and design to implementation, training and support.")
    salary: str = Field(example="$100,000")
    location: str = Field(example="Redmond, WA")
    type: str = Field(example="Full-time")
    experience: str = Field(example="3+ years")
    skills: list = Field(example=["Python", "Java", "C++"])
    company: str = Field(example="Microsoft")
    application_count: int = Field(example=0)
    company_id: int = Field(example=1)
    


    class Config:
        orm_mode = True

class jobCreate(BaseModel):
    name: str = Field(example="Software Engineer")
    description: str = Field(example="Software engineers are responsible for the complete life cycle of a new or modified software product, from research and design to implementation, training and support.")
    salary: str = Field(example="$100,000")
    location: str = Field(example="Redmond, WA")
    type: str = Field(example="Full-time")
    experience: str = Field(example="3+ years")
    skills: list = Field(example=["Python", "Java", "C++"])
    company: str = Field(example="Microsoft")
    company_id: int = Field(example=1)

    class Config:
        orm_mode = True

class jobList(BaseModel):
    jobs: list = Field(example=[job])

    class Config:
        orm_mode = True
