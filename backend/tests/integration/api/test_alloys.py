import pytest
from httpx import AsyncClient

@pytest.mark.asyncio
async def test_list_alloys_empty(async_client: AsyncClient):
    """Test converting listing alloys when none exist."""
    response = await async_client.get("/api/v1/alloys")
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)
    assert len(data) == 0

@pytest.mark.asyncio
async def test_list_alloys_populated(async_client: AsyncClient):
    """
    Test listing alloys when they exist.
    Note: Real integration test might need seeding the DB.
    For now we rely on the DB being empty or manually seeded in test.
    """
    # TODO: Refactor to Seed DB fixtures when Infrastructure is ready
    response = await async_client.get("/api/v1/alloys")
    assert response.status_code == 200
    # Checking structure only - data depends on DB state
    assert isinstance(response.json(), list)
