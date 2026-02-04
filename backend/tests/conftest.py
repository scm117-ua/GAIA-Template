import pytest
from httpx import AsyncClient, ASGITransport
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession
import os

from app.main import app
from app.infrastructure.persistence.database import get_db

@pytest.fixture(scope="session")
def anyio_backend():
    return "asyncio"

# Use the same DB URL but ensures fresh engine per test loop if needed
# For integration tests, we usually want to commit to DB or rollback.
# Here we just need it to work with the loop.
DATABASE_URL = os.environ.get("DATABASE_URL", "postgresql+asyncpg://user:pass@localhost/dbname")

@pytest.fixture(scope="function")
async def override_get_db():
    # Create engine per test function to avoid loop binding issues
    test_engine = create_async_engine(DATABASE_URL, echo=False)
    TestSessionLocal = async_sessionmaker(
        bind=test_engine,
        class_=AsyncSession,
        expire_on_commit=False,
        autocommit=False,
        autoflush=False,
    )

    async def _get_test_db():
        async with TestSessionLocal() as session:
            yield session

    app.dependency_overrides[get_db] = _get_test_db
    yield
    app.dependency_overrides.clear()
    await test_engine.dispose()

@pytest.fixture(scope="function")
async def async_client(override_get_db):
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as c:
        yield c
