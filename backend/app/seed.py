from app.database import SessionLocal
from app.models import User
from app.auth import get_password_hash

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
