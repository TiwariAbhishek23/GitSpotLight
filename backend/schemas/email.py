from pydantic import EmailStr, Field, BaseModel

class EmailBase(BaseModel):
    first_name: str = Field(example="John")
    last_name: str = Field(example="Doe")
    email: EmailStr = Field(example="john@example.com")
    subject: str = Field(example="Hello World")
    message: str = Field(example="Hello World")

    class Config:
        orm_mode = True


