from fastapi import FastAPI
from core.config import settings
from database.sessions import engine, SessionLocal
from database.baseclass import Base

from api.routes import route_user, route_company, route_auth, route_email



def include_router(app):
    app.include_router(route_user.user_router, tags=["Users"], prefix="/users")
    app.include_router(route_company.company_router, tags=["Company"], prefix="/company")
    app.include_router(route_auth.login_router, tags=["Auth"], prefix="/auth")
    app.include_router(route_email.email_router, tags=["Contact"], prefix="/contact")

def configure_database(app):
    Base.metadata.create_all(bind=engine)

def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()

def start_application():
    app = FastAPI(title=settings.PROJECT_NAME,version=settings.PROJECT_VERSION)
    include_router(app)
    configure_database(app)
    return app

app = start_application()