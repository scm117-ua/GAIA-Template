from fastapi import FastAPI

app = FastAPI(title="GAIA Template API")

@app.get("/")
def read_root():
    return {"Hello": "World"}
