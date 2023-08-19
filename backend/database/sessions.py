from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# Sqlite database
SQLALCHEMY_DATABASE_URL = "sqlite:///./sql_app.db"

#  Engine for sqlite database
engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)

# SessionLocal class
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Get Database Function
def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()