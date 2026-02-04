from pydantic import BaseModel

class AlloyResponse(BaseModel):
    id: int
    name: str
    slug: str

    class Config:
        from_attributes = True
