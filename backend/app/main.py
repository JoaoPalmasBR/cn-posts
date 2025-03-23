from fastapi import FastAPI
from app.routes import router
from app.database import Base, engine

app = FastAPI()

# Criação automática de tabelas
Base.metadata.create_all(bind=engine)

app.include_router(router)

@app.get("/")
def read_root():
    return {"message": "API is running"}
