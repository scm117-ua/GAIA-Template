from fastapi import FastAPI
from app.presentation.api.v1.routers import alloys


app = FastAPI(title="GAIA Template API")

app.include_router(alloys.router, prefix="/api/v1", tags=["Alloys"])

@app.get("/")
def read_root():
    return {"Hello": "World"}
