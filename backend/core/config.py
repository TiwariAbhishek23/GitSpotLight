class Settings:
    PROJECT_NAME: str = "GitSpotLight"
    PROJECT_VERSION: str = "1.0.0"

    # Authentication
    SECRET_KEY: str = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJvY3Rlcm5zaGlwVGFzayIsIm5hbWUiOiJBYmhpc2hlayBUaXdhcmkiLCJpYXQiOjIwMjN9.2YAsRhnuehDTtz2Hqw-njRMSg2xaf0ssLkACqlVyNWw"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30


settings = Settings()