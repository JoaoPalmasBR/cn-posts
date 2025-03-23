import redis
import os

REDIS_URL = os.getenv("REDIS_URL", "redis://localhost:6379")

redis_client = redis.Redis.from_url(REDIS_URL, decode_responses=True)


def set_cache(key, value, expire=3600):
    redis_client.set(key, value, ex=expire)


def get_cache(key):
    return redis_client.get(key)


def delete_cache(key):
    redis_client.delete(key)
