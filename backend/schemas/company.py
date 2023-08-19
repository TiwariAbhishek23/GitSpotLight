from pydantic import BaseModel, EmailStr, Field
from datetime import date
from enum import Enum
from .jobs import job, jobList

class CompanyBase(BaseModel):
    name: str = Field(example="Microsoft")
    email: EmailStr = Field(example="microsoft.exmapl.com")
    phone: str = Field(example="1234567890")
    address: str = Field(example="1234 Main St, Redmond, WA 98052")
    description: str = Field(example="Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.")
    founded: date = Field(example="1975-04-04")
    website: str = Field(example="https://www.microsoft.com/en-us/")
    logo: str = Field(example="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png")
    jobs: jobList = Field(example=jobList)
    employees_count: int = Field(example=144000)
    jobs_count: int = Field(example=1000)
    company_type: str = Field(example="Public")
    company_size: str = Field(example="Large")
    verified: bool = Field(example=True)

    class Config:
        orm_mode = True

class CompanyCreate(BaseModel):
    name: str = Field(example="Microsoft")
    email: EmailStr = Field(example="microsoft.exmapl.com")
    phone: str = Field(example="1234567890")
    address: str = Field(example="1234 Main St, Redmond, WA 98052")
    description: str = Field(example="Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.")
    founded: date = Field(example="1975-04-04")
    founder_name: str = Field(example="Bill Gates")
    website: str = Field(example="https://www.microsoft.com/en-us/")
    logo: str = Field(example="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png")
    employees_count: int = Field(example=144000)
    company_type: str = Field(example="Public")
    company_size: str = Field(example="Large")

    class Config:
        orm_mode = True


class CompanyUpdate(BaseModel):
    phone: str = Field(example="1234567890")
    address: str = Field(example="1234 Main St, Redmond, WA 98052")
    description: str = Field(example="Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.")
    website: str = Field(example="https://www.microsoft.com/en-us/")
    logo: str = Field(example="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png")
    employees_count: int = Field(example=144000)
    company_type: str = Field(example="Public")
    company_size: str = Field(example="Large")

    class Config:
        orm_mode = True

class CompanyShow(BaseModel):
    name: str = Field(example="Microsoft")
    email: EmailStr = Field(example="microsoft.exmapl.com")
    phone: str = Field(example="1234567890")
    address: str = Field(example="1234 Main St, Redmond, WA 98052")
    description: str = Field(example="Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.")
    founded: date = Field(example="1975-04-04")
    website: str = Field(example="https://www.microsoft.com/en-us/")
    logo: str = Field(example="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png")
    employees_count: int = Field(example=144000)
    company_type: str = Field(example="Public")
    company_size: str = Field(example="Large")

    class Config:
        orm_mode = True

class CompanyList(BaseModel):
    companies: list = Field(example=[CompanyShow])

    class Config:
        orm_mode = True

