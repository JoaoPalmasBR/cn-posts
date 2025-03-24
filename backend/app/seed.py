from app.database import SessionLocal, engine
from app.models import User, Post
from app.auth import get_password_hash
from sqlalchemy.orm import Session

# Conectar ao banco de dados
session = SessionLocal()

# Verifica se o usuário admin já existe
if not session.query(User).filter(User.username == "admin").first():
    admin = User(
        name="Administrador",
        username="admin",
        password=get_password_hash("admin123")
    )
    session.add(admin)
    session.commit()
    print("Usuário admin criado com sucesso.")
else:
    print("Usuário admin já existe.")

session.close()

# Dados de exemplo
users = [
    {"name": "João Silva", "username": "joao", "password": "senha123"},
    {"name": "Maria Oliveira", "username": "maria", "password": "senha123"},
]

posts = [
    {"content": "Este é o primeiro post de João!", "user_id": 1},
    {"content": "Este é o primeiro post de Maria!", "user_id": 2},
    {"content": "João está postando novamente!", "user_id": 1},
]

# Função para popular o banco de dados
def seed_data():
    with Session(engine) as session:
        # Inserir usuários
        for user_data in users:
            user = User(**user_data)
            session.add(user)

        # Inserir posts
        for post_data in posts:
            post = Post(**post_data)
            session.add(post)

        session.commit()
        print("Dados de exemplo inseridos com sucesso!")

if __name__ == "__main__":
    seed_data()
